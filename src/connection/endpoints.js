import axios from 'axios';

const endpoints = {
    getPatientList: () => axios.get('https://hapi.fhir.org/baseDstu3/Patient?_format=json&name:missing=false&birthdate:missing=false'),
};

export default endpoints;
