import { useState, useEffect } from "react";

export function useGithubUser(username) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`https://api.github.com/users/${username}`)
			.then((response) => {
				setLoading(true);
				return response.json();
			})
			.then((json) => {
				setData(json);
			})
			.catch((e) => setError(e))
			.finally(() => setLoading(false));
	}, [username]);

	return { data, loading, error };
}
