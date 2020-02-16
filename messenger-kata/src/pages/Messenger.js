import React from 'react';
import { GetAllGuests } from '../data/GuestService';
import { GetAllCompanies } from '../data/CompanyService';
import Message from '../components/Message';
import DropdownSelect from '../components/DropdownSelect';
import {
	Container, Row, Col,
} from 'react-bootstrap';


export default class Messenger extends React.Component {

	state = {
		guests: GetAllGuests(),
		selectedGuest: null,
		companies: GetAllCompanies(),
		selectedGuest: null
	}

	getGuestFullName = (guest) => {
		return `${guest.firstName} ${guest.lastName}`;
	}


	render() {
		return (
			<Container>
				<h3> Send a Message </h3> 
				<Row>
					<Message guest={this.state.selectedGuest} company={this.state.selectedCompany} />
				</Row>
				<Row>
					<Col>
						<h4> Guest </h4> 
						<DropdownSelect title="Select Guest" items={this.state.guests} getItemText={this.getGuestFullName} onSelect={(g) => this.setState({selectedGuest: g})} /> 
					</Col>
					<Col>
						<h4> Company </h4>
						<DropdownSelect title="Select Company" items={this.state.companies} getItemText={(c) => c.company} onSelect={(c) => this.setState({selectedCompany: c})} />
					</Col>
				</Row>
			</Container>
		);
	}

	
}