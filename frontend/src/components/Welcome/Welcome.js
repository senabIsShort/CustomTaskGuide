import "./Welcome.css"

function Welcome () {
    return <div className="welcome-wrapper">
        <h1>Welcome to CustomTaskGuide !</h1>
        <p>It's a simple <b>To Do list</b> app to help you see the goals you set yourself, 
        and those that you have already achieved !</p>
        <p>This app uses your <b>browser's Local Storage</b> to save your tasks, which means they will be kept snuggly warm as long as you don't empty your browser cache and/or data.</p>
    </div>
}

export default Welcome;