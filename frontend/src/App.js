import React, { useEffect, useState } from "react";
import './App.css' ;
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import Navigation from "./components/Navigation/Navigation";
import Welcome from "./components/Welcome/Welcome";


function App () {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [editing, setEditing] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [activeItem, setActiveItem] = useState({
    id: 0,
    title: "",
    description: "",
    completed: false,
  });
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    refreshList();
  },[])

  function refreshList() {
    if (localStorage.getItem("taskList") === null) {
      return setTaskList([]);
    }

    setTaskList(JSON.parse(localStorage.getItem("taskList")));
  }

  function toggle() {
    setVisibility(!visibility);
  }

  function handleTitleChange (event) {
    setActiveItem( item => {
      return {...item, title: event.target.value} 
    });
  }

  function handleDescriptionChange (event) {
    setActiveItem( item => {
      return {...item, description: event.target.value} 
    });
  }

  function handleStatusChange (event) {
    setActiveItem( item => {
      return {...item, completed: event.target.checked}
    });
  }

  function handleSubmit () {
    toggle();

    if(editing) {
      // Find the item that's being edited and its index
      const currentItem = taskList.filter((item) => item.id === activeItem.id)[0];
      const itemIndex = taskList.indexOf(currentItem);
      // Replace the item in the list with the updated version
      taskList.splice(itemIndex,1,activeItem)

      setEditing(false);

      return localStorage.setItem("taskList", JSON.stringify(taskList));
    }

    activeItem.id = taskList.length + 1;
    taskList.push(activeItem)
    
    return localStorage.setItem("taskList", JSON.stringify(taskList));
  };

  function handleDelete (item) {
    // Find the item that's being edited and its index
    const currentItem = taskList.filter((e) => e.id === item.id)[0];
    const itemIndex = taskList.indexOf(currentItem);
    console.log("Deleting item: ", currentItem);
    // Delete the item from the list
    taskList.splice(itemIndex,1);

    localStorage.setItem("taskList", JSON.stringify(taskList));
    return refreshList(); 
  };

  function createItem () {
    const item = {title: "", description: "", completed: false};

    setActiveItem(item);
    toggle();
  };

  function editItem (item) {
    setActiveItem(item);
    toggle();
  }

  function renderItems () {
    const newItems = taskList.filter(
      (item) => item.completed === viewCompleted
    );

    if (newItems.length === 0) {
      return <Welcome/>
    }

    return <ul>
        {newItems.map((item) => (
        <li
          key={item.id}
          className={`${viewCompleted ? "completed-task" : ""}`}
        >
          <span
            className={`task-title`}
            title={item.description}
          >
            {item.title}
          </span>
          <p>
            {item.description}
          </p>
          <span
          className="control-btns"
          >
            <button 
              className="btn btn-secondary"
              onClick={() => {editItem(item); setEditing(true)}}
            >
              Edit
            </button>
            <button 
              className="btn btn-important"
              onClick={() => handleDelete(item)}
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>;
  };
  
  return (
    <>
    <Navigation
      createItem={createItem}
      viewCompleted={viewCompleted}
      setViewCompleted={setViewCompleted}
    />
    <main>
      {renderItems()}
    </main>
    <Modal 
      visibility={visibility}
      close={toggle}
    >
      <Form
        handleSubmit={handleSubmit}
        activeItem={activeItem}
        handleTitleChange={handleTitleChange}
        handleDescriptionChange={handleDescriptionChange}
        handleStatusChange={handleStatusChange}
      />
    </Modal>
    </>
  );
}

export default App;
