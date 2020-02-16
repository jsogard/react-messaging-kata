import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function DropdownSelect(props) {

	const items = props.items?.map(i => 
		<Dropdown.Item key={i.id} onClick={() => props.onSelect(i)} > {props.getItemText(i)} </Dropdown.Item>);

	return (
		<Dropdown>
			<Dropdown.Toggle>
				{ props.title }
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{ items }
			</Dropdown.Menu>
		</Dropdown>
	);
};