import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import '../static/ListSelect.css';

export default function ListSelect(props) {

	const [selectedId, setSelectedId] = useState(null);

	const onItemSelect = (i) => {
		setSelectedId(i.id);
		props.onSelect(i);
	}

	const items = props.items?.map(i => 
		<tr key={i.id} onClick={() => onItemSelect(i)} > <td className={'selectable ' + (i.id == selectedId ? 'selected' : '')}> {props.getItemText(i)} </td> </tr>);

	return (
		<Table>
			<tbody>
				{items}
			</tbody>
		</Table>
	);
};