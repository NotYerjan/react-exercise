import CarDetails from "./CarDetails";

function App() {
	return (
		<>
			<CarDetails
				initialData={{ model: "Renault", year: 2019, color: "#aaaaaa" }}
			/>
		</>
	);
}

export default App;
