import React from "react";
import { useMemo } from "react";

export default function FilteredList({ people }) {
	const filteredPeopleList = useMemo(
		() => people.filter((person) => person.age > 18),
		[people],
	);
	return (
		<div>
			{filteredPeopleList.map((person) => (
				<h3 key={person.id}>{person.name}</h3>
			))}
		</div>
	);
}
