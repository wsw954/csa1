//components/vehicle/form
import React from "react";

export default function Popup({ message, confirmAction, cancelAction }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full space-y-4">
        <p className="text-gray-800 text-base">{message}</p>

        <div className="flex justify-end space-x-3">
          <button
            onClick={cancelAction}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
          >
            No
          </button>
          <button
            onClick={confirmAction}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
