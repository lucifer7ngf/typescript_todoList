"use client";

import type { Todo } from "./types"; 
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const [ todos , setTodos] = useState<Todo[]>();

  useEffect( () => {
    async function fetchTodos() {
      const response = await axios.get(`/api/todo`);
      setTodos(response.data as Todo[] );
    }
    fetchTodos
  }, []);


  return (
    <div className="bg-black">
      <div className=" flex flex-col justify-center  items-center min-h-screen text-white">
        <h3 className=" text-2xl">List Items</h3>
        <div className="flex flex-col w-10/12 bg-gray-800 p-4 rounded-md shadow-sm my-4 ">
          <div className="flex justify-between px-4 w-full mb-2 opacity-50">
            <div>Title :</div>
            <div>Catgory :</div>
            <div>Status :</div>
          </div>
          {todos.map((todo, idx) =>
            <>
              <div className={`${
                idx === 0 ? "rounded-t-md" :
                todos.length -1 === idx ? ' rounded-b-md' : ''
                } bg-gray-700 shadow-md cursor-pointer hover:bg-gray-600 flex p-4 felx justify-between w-full`}>
                <div className="">{todo.toDoTitle}</div>
                <div className="">{todo.toDoCategory}</div>
                <div className="">{todo.toDoCompleted ? 'Completed' : 'Not Completed'}</div>
              </div>
            </>
            )}
        </div>

      </div>
    </div>
  );
}
