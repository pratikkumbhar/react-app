import React, { useEffect } from "react";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import "./Form.css";
export default function Fetch() {
  const [todo, setTodo] = useState();
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [uid, setUid] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [update, setUpdate] = useState(false);
  const getAllData = () => {
    fetch("https://api.freeapi.app/api/v1/todos")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setTodo(jsonData);
      })
      .catch((e) => {
        console.log("Error Message", e);
      });
  };
  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/todos/" + deleteId, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [deleteId]);

  const createTodo = () => {
    const todo = {
      description: desc,
      title: title,
    };
    console.log("todo");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    };
    fetch("https://api.freeapi.app/api/v1/todos", options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("created sucessfully");
          setTitle("");
          setDesc("");
          getAllData();
        }
      })

      .catch((error) => console.log("create data : " + error));
    setShow(false);
  };
  const updateTodo = () => {
    const todo = {
      description: desc,
      title: title,
    };
    console.log("todo");
    const options = {
      method: "PATCH",
      headers: {
        
         
          'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(todo),
    };
    fetch("https://api.freeapi.app/api/v1/todos" + uid, options)
      .then((response) => response.json())
      .then((data) => {
       
          console.log("update data successfully : " +data)
          setTitle("");
          setDesc("");
          setUpdate(false);
          setShow(false);
          getAllData();
        
      }).catch((error) => {
        setUpdate(false);
          setShow(false);
          getAllData();
          setTitle("");
          setDesc("");
        console.log("update data : " + error)
      }
    );
    
  };

  const onDelete = (id) => {
    setDeleteId(id);
  };
  useEffect(() => {
      getAllData();
  });
  const onEdit = (id) => {
    todo.data.map((todo) => {
      if (todo._id == id) {
        setTitle(todo.title);
        setDesc(todo.description);
      }
    });
    setShow(true);
    setUid(id);
    setUpdate(true);
  };
  return (
    <section className="w-[100vw] h-screen p-6 bg-orange-50">
      <h1 className="text-2xl font-extrabold text-orange-600">Todo App</h1>
      <button
        onClick={() => {
          setShow(true);
        }}
        className="bg-orange-600 text-xl text-white py-2 px-4 mt-8 rounded-lg font-extrabold cur 
      ">
        Create
      </button>
      <ul className="flex gap-5 my-10 flex-wrap">
        {todo &&
          todo.data &&
          todo.data.map((todo, index) => {
            return (
              <li
                key={index}
                className="flex w-[400px] gap-2 flex-col justify-center items-start border border-orange-600 rounded-lg p-4">
                <div className="flex w-full justify-between">
                  <h1 className="text-xl font-extrabold text-orange-600">
                    {todo.title}
                  </h1>
                  <input
                    type="checkbox"
                    defaultChecked={todo.isComplete}
                    className="accent-orange-600 scale-125"
                    style={{ backgroundColor: "#ea580c" }}
                  />
                </div>
                <p className="text-base font-semibold text-orange-400">
                  {todo.description}
                </p>
                <p className="text-sm font-extrabold text-orange-600">
                  {new Date(todo.createdAt).toLocaleDateString([], {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <div className="w-full flex justify-between mt-2">
                  <button
                    onClick={() => {
                      onDelete(todo._id);
                    }}
                    className="py-2 px-4 text-white bg-orange-600 rounded-lg font-extrabold cursor-pointer">
                    Delete{" "}
                  </button>
                  <button
                    onClick={() => {
                      onEdit(todo._id);
                    }}
                    className="py-2 px-4 text-white bg-orange-600 rounded-lg font-extrabold cursor-pointer">
                    Edit{" "}
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
      {show ? (
        <section className=" w-[100vw] h-[100vh] bg-orange-50 absolute top-5 bg-opacity-75">
          <div className="w-[500px] h-[500px] bg-orange-200 rounded-xl p-5 ">
            <div className="flex justify-between">
              <h1 className="text-3xl text-orange-600 font-extrabold">Todo</h1>
              <IoMdCloseCircle
                className="text-orange-600 cursor-pointer"
                size={40}
                onClick={() => {
                  setShow(false);
                }}
              />
            </div>

            <div className=" flex flex-col mt-10 w-[75%]">
              <lable
                id="lable1"
                for="input"
                className="  text-orange-600 text-lg font-semibold ">
                Title
              </lable>
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                defaultValue={title}
                id="input1"
                className=" h-10  rounded px-2 py-1 text-lg text-semibold bg-red-50 text-orange-600 font-semibold outline-none hover:w-[105%] hover:h-[44px] duration-200 mb-6 hover:mb-5"
                type="text"
              />
            </div>
            <div className=" flex flex-col  w-[75%]">
              <lable
                id="lable2"
                for="input"
                className="  text-orange-600 text-lg font-semibold ">
                Description
              </lable>
              <textarea
                id="input2"
                defaultValue={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                className=" h-32  rounded px-2 py-1 text-lg text-semibold bg-red-50 text-orange-600 font-semibold outline-none hover:w-[105%] hover:h-36 duration-200 mb-6 hover:mb-5"
                type="text"
              />
            </div>
            <button
              onClick={() => {
                update ? updateTodo() : createTodo();
              }}
              className="py-2 px-4 text-white bg-orange-600 rounded-lg font-extrabold cursor-pointer hover:scale-105">
              {update ? "Edit" : "Create"}
            </button>
          </div>
        </section>
      ) : (
        <></>
      )}
    </section>
  );
}
