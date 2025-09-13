export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  subtasks: string[];
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
    case "MOVE_TASK":
      const { fromColumnId, toColumnId, taskId } = action.payload;

      const fromColumn = state.columns.find(
        (column) => column.id === fromColumnId
      );
      const toColumn = state.columns.find((column) => column.id === toColumnId);
      if (!fromColumn || !toColumn) return state;

      const taskToMove = fromColumn.tasks.find((task) => task.id === taskId);
      if (!taskToMove) return state;
      return {
        ...state,
        columns: state.columns.map((column) => {
          if (column.id === fromColumnId) {
            return {
              ...column,
              tasks: column.tasks.filter((task) => task.id !== taskId),
            };
          }
          if (column.id === toColumnId) {
            return { ...column, tasks: [...column.tasks, taskToMove] };
          }
          return column;
        }),
      };
    default:
      return state;
  }
};
