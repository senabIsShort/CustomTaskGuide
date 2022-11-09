import "./Navigation.css"

function Navigation ({ createItem, viewCompleted, setViewCompleted }) {
	return (
		<nav>
			<span
				className="nav-title"
				>
				TaskGuide
			</span>
			<button 
				className="btn new-task-btn"
				onClick={createItem}
				>
				<span aria-hidden="true">✚ </span>Add
			</button>
			<ul>
				<li>
					<button 
						className={viewCompleted ? "nav-link active" : "nav-link"}
						onClick={() => setViewCompleted(true)}
						>
						<span aria-hidden="true">☑ </span>Done
					</button>
				</li>
				<li>
					<button 
						className={viewCompleted ? "nav-link" : "nav-link active"}
						onClick={() => setViewCompleted(false)}
						>
						<span aria-hidden="true">☐ </span>To Do
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;