import React, { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUserList() {
	const [usernames, setUsernames] = useState(["YerjanDesign"]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const { username } = e.currentTarget.elements;
		setUsernames((prev) => [...prev, username.value]);
		e.currentTarget.reset();
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<input type="text" name='username' />
				<button type="submit">Add to list</button>
			</form>
			{usernames.map((u, i) => (
				<GithubUser key={i} username={u} />
			))}
		</div>
	);
}
