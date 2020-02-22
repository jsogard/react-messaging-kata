import React, { useState } from 'react';
import { GetAllGuests } from '../data/GuestService';
import { GetAllCompanies } from '../data/CompanyService';
import Message from '../components/Message';
import ListSelect from '../components/ListSelect';
import '../static/Messenger.css';
import {
	Container, Row, Col,
	Button, Modal,
} from 'react-bootstrap';


export default function Messenger(props) {

	const [show, setShow] = useState(false);
	const [guests] = useState(GetAllGuests());
	const [companies] = useState(GetAllCompanies());
	const [selectedGuest, selectGuest] = useState(null);
	const [selectedCompany, selectCompany] = useState(null);

	const getGuestFullName = (guest) => {
		return guest == null ? '' : `${guest.firstName} ${guest.lastName}`;
	}

	const handleClose = () => setShow(false);
	const handleOpen = () => setShow(true);


	return (
		<Container>
			<span className='title' > Send a Message </span> 
			<Row>
				<Message guest={selectedGuest} company={selectedCompany} />
			</Row>
			<Row>
				<Col></Col>
				<Col sm={2}> 
					<Button variant="outline-primary" onClick={handleOpen} >Send</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4> Guests </h4> 
					<ListSelect title="Select Guest" items={guests} getItemText={getGuestFullName} onSelect={(g) => selectGuest(g)} /> 
				</Col>
				<Col>
					<h4> Company </h4>
					<ListSelect title="Select Company" items={companies} getItemText={(c) => c.company} onSelect={(c) => selectCompany(c)} />
				</Col>
			</Row>
			<Modal show={show} onHide={handleClose}>
		        <Modal.Header closeButton>
		        <Modal.Title>Message sent!</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        	Message successfully sent to {getGuestFullName()}
		        </Modal.Body>
		        <Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Ok
					</Button>
		        </Modal.Footer>
		      </Modal>
		</Container>
	);

	
}