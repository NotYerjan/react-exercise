import { useState } from "react";

export function useCounter(initialValue) {
	const [count, setCount] = useState(initialValue);

	const onIncrement = () => {
		setCount((curent) => curent + 1);
	};

	const onDecrement = () => {
		setCount((curent) => curent - 1);
	};

	const onReset = () => {
		setCount(0);
	};

	return { count, onIncrement, onDecrement, onReset };
}
