import React, { useEffect, useState } from "react";

export default function ClickCounter({ onCounterChange }) {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount((currentCount) => currentCount + 1);
	};

	useEffect(() => {
		onCounterChange(count);
	}, [count]);

	return (
		<>
			<div>count: {count}</div>
			<button onClick={incrementCount}>+</button>
		</>
	);
}
