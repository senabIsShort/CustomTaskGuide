import React, { useEffect, useState } from "react";
import './App.css' ;
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import Navigation from "./components/Navigation/Navigation";
import Welcome from "./components/Welcome/Welcome";
import Task from "./components/Task/Task";
import Footer from "./components/Footer/Footer";


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

  function toggleModal() {
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
    toggleModal();

    if(editing) {
      // Find the item that's being edited and its index
      const currentItem = taskList.filter((item) => item.id === activeItem.id)[0];
      const itemIndex = taskList.indexOf(currentItem);
      // Replace the item in the list with the updated version
      taskList.splice(itemIndex,1,activeItem)

      setEditing(false);

      return localStorage.setItem("taskList", JSON.stringify(taskList));
    }

    if (taskList.length === 0) {
      activeItem.id = 1;
    }
    else {
      activeItem.id = taskList.at(-1).id + 1;
    }
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
    toggleModal();
  };

  function editItem (item) {
    setActiveItem(item);
    toggleModal();
  }

  function renderItemsOrWelcome () {
    const taskListItems = taskList.filter(
      (item) => item.completed === viewCompleted
    );

    if (taskListItems.length === 0) {
      return <Welcome/>
    }

    return <ul className="task-container">
        {taskListItems.map((item) => (
        <Task 
          key={item.id}
          item={item}
          editItem={editItem}
          setEditing={setEditing}
          handleDelete={handleDelete}
          viewCompleted={viewCompleted}
        />
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
      {renderItemsOrWelcome()}
    </main>
    <Footer/>
    <Modal 
      visibility={visibility}
      close={toggleModal}
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
