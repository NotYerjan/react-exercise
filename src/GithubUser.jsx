import React from "react";
import { useGithubUser } from "./useGithubUser";

export default function GithubUser({ username }) {
	const { data, error, isLoading } = useGithubUser(username);

	return (
		<div>
			{isLoading && <h3>Loading...</h3>}
			{error && <h3>Somethinf went wrong</h3>}
			{data && <h3>{data.name}</h3>}
		</div>
	);
}
