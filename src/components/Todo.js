import React, { useState } from "react";
import TrashLogo from "../assets/trash-solid.svg";
import EditLogo from "../assets/pen-to-square-solid.svg";
import "./Todo.css";
import TodoList from "./TodoList";
function Todo() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "demo",
      task: "",
    },
  ]);
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const createTask = (e) => {
    e.preventDefault();
    setList((prev) => [
      ...prev,
      {
        id: list.length,
        title: title,
        task: task,
      },
    ]);
    setTitle("");
    setTask("");
  };
  const updateTask = () => {
    setList((todos) =>
      todos.map((todo, key) =>
        key === editId ? { id: editId, title: title, task: task } : todo
      )
    );
    setEdit(false);
    setEditId(null);
    setTask("");
    setTitle("");
  };
  const onDeleteClicked = (id) => {
    setList(list.filter((item, index) => index !== id));
  };
  const onEditClicked = (id) => {
    setEdit(true);
    setEditId(id);
    setTitle(list[id].title);
    setTask(list[id].task);
  };
  return (
    <section className="container mx-auto my-10 max-w-[1200px] h-[90vh] bg-emerald-200 rounded-xl p-7">
      <h1 className="text-4xl font-extrabold text-emerald-900 "> TodoApp</h1>
      <div className="flex flex-row gap-10 py-10">
        <div className="bg-emerald-200 rounded-xl flex flex-col w-[35%]">
          <lable
            id="lable1"
            for="input"
            className="  text-emerald-900 text-lg font-semibold ">
            Title
          </lable>
          <input
            id="input1"
            className=" h-10  rounded px-2 py-1 text-lg text-semibold bg-emerald-50 text-emerald-900 font-semibold outline-none "
            type="text"
            value={title}
            defaultValue={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <lable
            id="lable1"
            for="input"
            className="  text-emerald-900 text-lg font-semibold ">
            Task
          </lable>
          <textarea
            id="input1"
            value={task}
            defaultValue={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            className=" h-[300px]  rounded px-2 py-1 text-lg text-semibold bg-emerald-50 text-emerald-900 font-semibold outline-none  "
            type="text"
          />

          <button
            onClick={(e) => {
              edit ? updateTask(e) : createTask(e);
            }}
            className="bg-emerald-700 w-[150px] h-[40px] text-emerald-50 font-extrabold text-lg rounded-md mt-7 hover:scale-95 ease-in-out duration-150">
            {edit ? "Edit" : "Create"}
          </button>
        </div>
        <div className="flex flex-col gap-2 w-[50%]">
          <h1 className="text-emerald-800 font-extrabold text-xl">Todos</h1>
          {list.length > 0 ? (
            list.map((value, index) => {
              return (
                <div
                  key={index}
                  className="bg-emerald-50 w-[100%] rounded py-4 px-7 flex justify-between  items-center">
                  <div>
                    <h1 className="text-lg font-extrabold text-emerald-900">
                      {value.title}
                    </h1>
                    <p className="text-base  text-emerald-700">{value.task}</p>
                  </div>
                  <div className="flex gap-6 h-6">
                    <img
                      src={TrashLogo}
                      alt="not found"
                      className="h-6 hover:scale-95 duration-200 ease-in-out"
                      onClick={() => onDeleteClicked(index)}
                    />
                    <img
                      src={EditLogo}
                      onClick={() => onEditClicked(index)}
                      alt="not found"
                      className="h-6 hover:scale-95 duration-200 ease-in-out"
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="font-extrabold text-xl text-emerald-600">
              Add some tasks
              <span className="dot1 font-extrabold text-xl text-emerald-600">
                {" "}
                .
              </span>
              <span className="dot2 font-extrabold text-xl text-emerald-600">
                {" "}
                .
              </span>
              <span className="dot3 font-extrabold text-xl text-emerald-600">
                {" "}
                .
              </span>
            </h1>
          )}
        </div>
      </div>
    </section>
  );
}

export default Todo;
