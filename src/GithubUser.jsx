import React from "react";
import { useGithubUser } from "./useGithubUser";

export default function GithubUser({ username }) {
	const { data, loading, error } = useGithubUser(username);
	return (
		<>
			{loading ? <div>Loading please wait</div> : <div>{data?.name}</div>}
			{error && <div>{error}</div>}
		</>
	);
}
