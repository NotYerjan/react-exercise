import React, { useRef } from "react";
import { useState } from "react";

export default function CarDetails({ initialData }) {
	const [data, setData] = useState([]);
	const modelRef = useRef();
	const yearRef = useRef();
	const colorRef = useRef();

	const resetForm = () => {
		modelRef.current.value = "";
		yearRef.current.value = 2010;
		colorRef.current.value = "#000";
	};

	const onSubmitHandler = () => {
		const newCar = {
			model: modelRef.current.value,
			year: yearRef.current.value,
			color: colorRef.current.value,
		};
		setData((curent) => [...curent, newCar]);
		resetForm();
	};

	return (
		<div>
			<input ref={modelRef} type="text" defaultValue={initialData.model} />
			<input type="number" ref={yearRef} defaultValue={initialData.year} />
			<input type="color" ref={colorRef} defaultValue={initialData.color} />
			<button onClick={onSubmitHandler}>Submit</button>
		</div>
	);
}
