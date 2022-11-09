import "./Task.css"

function Task ({ item, viewCompleted, editItem, setEditing, handleDelete }) {
	return <li
		key={item.id}
		className={`task-card ${viewCompleted ? "completed-task" : ""}`}
	>
		<span
			className={`task-title`}
			title={item.description}
		>
			{item.title}
		</span>
		<p className="task-description">
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
}

export default Task;