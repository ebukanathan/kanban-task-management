import { useState } from "react";

export default function ToggleButton() {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-4 w-11 items-center rounded-full transition-colors duration-300 ${
          enabled ? "bg-[#635fc7]" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
