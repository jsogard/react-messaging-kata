import React from 'react';
import { GetAllGuests } from '../data/GuestService.js';
import { GetAllCompanies } from '../data/CompanyService.js';


export default function Messenger() {

	const guests = GetAllGuests();
	const guestList = guests.map(g => <span> {g.firstName} </span>);

	const companies = GetAllCompanies();
	const companyList = companies.map(c => <span> {c.company} </span>);

	return (
		<div class="container"> 
			<h3> Send a Message </h3>
			{guestList}
			{companyList}
		</div>
	);
}