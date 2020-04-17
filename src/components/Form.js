import React, {useState} from "react";
import {useForm} from 'react-hook-form';

const Form = () => {
	const {handleSubmit, register, errors} = useForm();
	let [alert, setAlert] = useState("");
	
	const sendForm = (values, e) => {
		
		const {title, body} = values;
		
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: title,
				body: body,
				userId: 1
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
			if (!response.ok) {
				return;
			}
			setAlert('Post successfully added');
			e.target.reset();
			return response.json()
		}).then(json => console.log(json));
	};
	
	return (
		<div className="container py-3">
			<div className="row">
				<div className="col-md-12">
					<h2 className="text-center text-white mb-4">React Form</h2>
					{alert && <div className="alert alert-success" role="alert">
						{alert}
					</div>}
					<div className="row">
						<div className="col-md-6 mx-auto">
							<div className="card rounded">
								<div className="card-header">
									<h3 className="mb-0">Add Post</h3>
								</div>
								<div className="card-body">
									<form onSubmit={handleSubmit(sendForm)}>
										<div className="form-group">
											<label htmlFor="title">Title</label>
											<input type="text" className={`form-control ${errors.title ? 'is-invalid' : ''}`}
														 placeholder="title"
														 id="title"
														 name="title"
														 ref={register({
															 required: "The title field is required."
														 })}/>
											{errors.title &&
											<small className="text-danger">
												<strong> {errors.title.message}</strong>
											</small>
											}
										</div>
										<div className="form-group">
											<label htmlFor="publication">Publication</label>
											<textarea className={`form-control ${errors.body ? 'is-invalid' : ''}`} rows="5"
																placeholder="Write something..."
																id="publication"
																name="body"
																ref={register({
																	required: "The body of the publication is required."
																})}/>
											{errors.body &&
											<small className="text-danger">
												<strong>{errors.body.message}</strong>
											</small>
											}
										</div>
										<button type="submit" className="btn btn-block btn-info">Send</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
