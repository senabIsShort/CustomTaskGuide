import "./Form.css"

function Form (props) {
	return (
		<>
		<form onSubmit={props.handleSubmit}>
			<div className="title">
				<label>Title:</label>
				<input 
					type="text" 
					value={props.activeItem.title} 
					onChange={props.handleTitleChange} 
					placeholder="What's your Task ?"
				/>
			</div>
			<div className="status">
				<label>Status: </label>
				<input 
					type="checkbox" 
					checked={props.activeItem.completed} 
					onChange={props.handleStatusChange}
				/>
			</div>
			<div className="description">
				<label>Description: </label>
				<textarea 
					value={props.activeItem.description} 
					onChange={props.handleDescriptionChange} 
					placeholder="Any details about your Task ?"
				/>
			</div>
			<input className="btn submit" type="submit" value="Submit &#10004;" />
		</form>
		</>
	);
}

export default Form;