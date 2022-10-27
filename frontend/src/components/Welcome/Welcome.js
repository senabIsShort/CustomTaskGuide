import "./Welcome.css"

function Welcome () {
    return <div className="welcome-wrapper">
        <h1>Welcome to CustomTaskGuide !</h1>
        <p>It's a simple <b>To Do list</b> app to help you see the goals you set yourself, 
        and those that you have already achieved !</p>
        <p>This app uses your <b>browser's Local Storage</b> to save your tasks, which means they will be kept snuggly warm as long as you don't empty your browser cache and/or data.</p>
        <h2>How to use</h2>
        <p>All that you need to use this app is right at the top of the page, inside the navigation bar.</p>
        <p>Use the <b>Add</b> button to create a new Task.</p>
        <p>Use the <b>Done</b> and <b>To Do</b> buttons to switch the view between the tasks you've completed and those you're still working on.</p>
    </div>
}

export default Welcome;