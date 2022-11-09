import "./Form.css"

function Form ({ handleSubmit, activeItem, handleTitleChange, handleStatusChange, handleDescriptionChange }) {
	return (
		<>
		<form onSubmit={handleSubmit}>
			<div className="title">
				<label>Title:</label>
				<input 
					type="text" 
					value={activeItem.title} 
					onChange={handleTitleChange} 
					placeholder="What's your Task ?"
					autoFocus
				/>
			</div>
			<div className="status">
				<label>Status: </label>
				<input 
					type="checkbox" 
					checked={activeItem.completed} 
					onChange={handleStatusChange}
				/>
			</div>
			<div className="description">
				<label>Description: </label>
				<textarea 
					value={activeItem.description} 
					onChange={handleDescriptionChange} 
					placeholder="Any details about your Task ?"
				/>
			</div>
			<input className="btn submit" type="submit" value="Submit &#10004;" />
		</form>
		</>
	);
}

export default Form;