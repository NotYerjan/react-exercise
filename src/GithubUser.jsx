import React, { useEffect, useState } from "react";

export default function GithubUser({ username }) {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(`https://api.github.com/users/${username}`)
			.then((response) => response.json())
			.then((json) => {
				setData(json);
			});
	}, [username]);

	return <div>{data?.name}</div>;
}
