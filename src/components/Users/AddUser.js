import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState(null);

	const errorObject = (title, message) => {
		setError({ title: title, message: message });
	};

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			errorObject("input", "check yourinput");
			return;
		}
		if (+enteredAge < 1) {
			errorObject("age input", "check your age input");
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const errorClearHandler = () => {
		setError(1 < 0);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					errorClear={errorClearHandler}
					error={error}
					title={error.title}
					message={error.message}
				></ErrorModal>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						type="number"
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
