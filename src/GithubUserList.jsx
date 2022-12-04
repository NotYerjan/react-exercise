import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
				<Link to={`/users/${u}`} key={i}>
					{u}
				</Link>
			))}
			<Outlet />
		</div>
	);
}
