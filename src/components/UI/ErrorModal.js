import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
	return (
		<div>
			<div onClick={props.errorClear} className={classes.backdrop} />
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={props.errorClear}>okay</Button>
				</footer>
			</Card>
		</div>
	);
};

export default ErrorModal;
