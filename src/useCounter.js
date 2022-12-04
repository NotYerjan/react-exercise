import { useCallback } from "react";
import { useState } from "react";

export function useCounter(initialValue) {
	const [count, setCount] = useState(initialValue);

	const onIncrement = useCallback(() => {
		setCount((curent) => curent + 1);
	}, []);

	const onDecrement = useCallback(() => {
		setCount((curent) => curent - 1);
	}, []);

	const onReset = useCallback(() => {
		setCount(0);
	}, []);

	return { count, onIncrement, onDecrement, onReset };
}
