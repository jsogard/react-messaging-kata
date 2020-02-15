import React from 'react';
import data from './Companies.json';


function GetAllCompanies() {
	return data;
}

function GetCompanyById(id) {
	return data.find(c => c.id == id);
}


export { GetAllCompanies, GetCompanyById };