import React from 'react';
import data from './Guests.json';


function GetAllGuests() {
	return data;
}

function GetGuestById(id) {
	return data.find(g => g.id == id);
}


export { GetAllGuests, GetGuestById };