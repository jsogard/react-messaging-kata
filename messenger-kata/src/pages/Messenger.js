import React from 'react';
import { GetAllGuests } from '../data/GuestService';
import { GetAllCompanies } from '../data/CompanyService';
import Message from '../components/Message';
import ListSelect from '../components/ListSelect';
import '../static/Messenger.css';
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
				<span className='title' > Send a Message </span> 
				<Row>
					<Message guest={this.state.selectedGuest} company={this.state.selectedCompany} />
				</Row>
				<Row>
					<Col>
						<h4> Guests </h4> 
						<ListSelect title="Select Guest" items={this.state.guests} getItemText={this.getGuestFullName} onSelect={(g) => this.setState({selectedGuest: g})} /> 
					</Col>
					<Col>
						<h4> Company </h4>
						<ListSelect title="Select Company" items={this.state.companies} getItemText={(c) => c.company} onSelect={(c) => this.setState({selectedCompany: c})} />
					</Col>
				</Row>
			</Container>
		);
	}

	
}