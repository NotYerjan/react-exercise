import ClickCounter from "./ClickCounter";
function App() {
	const onCounterChange = (value) =>
		console.log(`Current count value ${value}`);
	return (
		<>
			<ClickCounter onCounterChange={onCounterChange} />
		</>
	);
}

export default App;
