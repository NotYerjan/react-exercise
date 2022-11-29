import React, { useState } from "react";

export default function ClickCounter() {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount((currentCount) => currentCount + 1);
	};

	return (
		<>
			<div>count: {count}</div>
			<button onClick={incrementCount}>+</button>
		</>
	);
}

// export default class ClickCounter extends Component {
//   state = {
//     count: this.props.count,
//   };

//   render() {
//     return (
//
//     );
//   }
// }
