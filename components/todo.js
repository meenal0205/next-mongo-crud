"use client";
import { useState } from "react";
import { deleteTodo } from "@/actions"
import { updateTodo } from "@/actions"
import { CircleX } from 'lucide-react';
import { Pencil } from 'lucide-react';
export default function Todo({ text, id }) {
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, newText)
    setShowUpdateInput(!showUpdateInput);
  };

  return (
    <div className="border rounded p-5 flex justify-between items-center min-w-96 mt-5 min-h-24">

      <div>{text}</div>

      {showUpdateInput && (
        <input
          className="text-black mx-2 rounded pl-2 border"
          value={newText}
          placeholder="Edit Todo"
          onChange={(e) => setNewText(e.target.value)}
          type="text"
        />
      )}

      <div className="space-x-5">
        {showUpdateInput ? (
          <button
            onClick={() => setShowUpdateInput(!showUpdateInput)}
            className=" rounded shadow-sm p-1 m-3 text-sm font-semibold bg-red-600"
          >
            CANCEL
          </button>
        ) : (
          <button
            onClick={() => deleteTodo(id)}
            className="hover:border hover:rounded p-1"
          >
            <CircleX className="text-red-600" />

          </button>
        )}

        {showUpdateInput ? (
          <button
            onClick={handleUpdate}
            className=" rounded shadow-sm p-1 m-3 text-sm font-semibold bg-green-600 "
          >
            SAVE
          </button>
        ) : (
          <button
            onClick={() => setShowUpdateInput(!showUpdateInput)}
            className="hover:border hover:rounded p-1"
          >
            <Pencil className="text-blue-700" />

          </button>
        )}
      </div>
    </div >
  );
}
