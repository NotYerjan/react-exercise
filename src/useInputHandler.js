import { useState } from "react";

export function useInputHandler() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return { username, setUsername, password, setPassword };
}
