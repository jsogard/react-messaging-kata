import React from 'react';
import { GetAllGuests } from '../data/GuestService';
import { GetAllCompanies } from '../data/CompanyService';
import Message from '../components/Message';


export default function Messenger() {

	const guests = GetAllGuests();
	const guestList = guests.map(g => <span> {g.firstName} </span>);
	let selectedGuest = guests[0];

	const companies = GetAllCompanies();
	const companyList = companies.map(c => <span> {c.company} </span>);
	let selectedCompany = companies[0];

	return (
		<div class="container"> 
			<h3> Send a Message </h3>
			<Message guest={selectedGuest} company={selectedCompany} />
		</div>
	);
}