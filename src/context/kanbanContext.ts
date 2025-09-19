import React, { createContext, useReducer, ReactNode, Dispatch } from "react";
// import { kanbanReducer, KanbanState, Action } from "./kanbanReducer";
import initialData from "../../data.json";

console.log(initialData);

export type Task = {
  id: string;
  title: string;
  description: string;
  // status: string;
  // subtasks: string[];
};

export type column = {
  id: string;
  name: string;
  tasks: Task[];
};

export type KanbanState = {
  columns: column[];
};

type Action =
  | { type: "ADD_COLUMN"; payload: { title: string } }
  | { type: "ADD_TASK"; payload: { title: string; task: Task } }
  | {
      type: "MOVE_TASK";
      payload: { fromColumnId: string; toColumnId: string; taskId: string };
    };

export const kanbanReducer = (
  state: KanbanState,
  action: Action
): KanbanState => {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [
          ...state.columns,
          { id: Date.now().toString(), name: action.payload.title, tasks: [] },
        ],
      };
    case "ADD_TASK":
      return {
        ...state,
        columns: state.columns.map((column) => {
          if (column.name === action.payload.title) {
            return { ...column, tasks: [...column.tasks, action.payload.task] };
          }

          return column;
        }),
      };
    case "MOVE_TASK": {
      const { fromColumnId, toColumnId, taskId } = action.payload;

      let taskToMove: Task | undefined;
      const newColumns = state.columns.map((col) => {
        if (col.id === fromColumnId) {
          taskToMove = col.tasks.find((t) => t.id === taskId);
          return { ...col, tasks: col.tasks.filter((t) => t.id !== taskId) };
        }
        return col;
      });

      if (!taskToMove) return state;

      return {
        ...state,
        columns: newColumns.map((col) =>
          col.id === toColumnId
            ? { ...col, tasks: [...col.tasks, taskToMove!] }
            : col
        ),
      };
    }

    default:
      return state;
  }
};

type KanbanContextType = {
  state: KanbanState;
  dispatch: Dispatch<Action>;
};

const KanbanContext = createContext<KanbanContextType | undefined>(undefined);

const initialState = initialData.boards;

export const KanbanProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(kanbanReducer, initialState);

  return <KanbanContext.Provider>{children}</KanbanContext.Provider>;
};

// export const useKanban = () => {
//   const context = React.useContext(KanbanContext);
//   if (!context) {
//     throw new Error("useKanbanContext must be used within a KanbanProvider");
//   }
//   return context;
// };
