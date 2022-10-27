import "./Navigation.css"

function Navigation (props) {
	return (
		<nav>
			<span
				className="nav-title"
				>
				TaskGuide
			</span>
			<button 
				className="btn new-task-btn"
				onClick={props.createItem}
				>
				<span aria-hidden="true">✚ </span>Add
			</button>
			<ul>
				<li>
					<button 
						className={props.viewCompleted ? "nav-link active" : "nav-link"}
						onClick={() => props.setViewCompleted(true)}
						>
						<span aria-hidden="true">☑ </span>Done
					</button>
				</li>
				<li>
					<button 
						className={props.viewCompleted ? "nav-link" : "nav-link active"}
						onClick={() => props.setViewCompleted(false)}
						>
						<span aria-hidden="true">☐ </span>To Do
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;