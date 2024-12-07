"use client";
import { createTodo } from "@/actions";
import { useState } from "react";
import { Plus } from 'lucide-react';

export default function CreateTodo() {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      createTodo(text);
      setText("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mt-10  rounded p-5 flex flex-col items-center justify-center min-w-96">

      <form onSubmit={handleSubmit} className="flex gap-x-3  p-5">
        <label htmlFor="create-todo">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            name="todo-text"
            id="todo-text"
            placeholder="Create a Todo"
            className="text-black rounded border-2 border-blue-600 w-full p-2"
          />
        </label>
        <button className=" hover:border hover:rounded"><Plus className="" /></button>
      </form>
    </div>
  );
}
