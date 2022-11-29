import React, { useState, useEffect } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount((currentCount) => currentCount + 1);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [count]);

	return <h1>{count}</h1>;
}

// export default class Counter extends Component {
//   state = {
//     count: 0,
//   };
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return <h1>{this.state.count}</h1>;
//   }
// }
