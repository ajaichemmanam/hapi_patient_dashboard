import axios from 'axios';

const endpoints = {
    getPatientList: () => axios.get('https://hapi.fhir.org/baseDstu3/Patient?_sort=-_lastUpdated&_format=json&name:missing=false&birthdate:missing=false'),
    updatePatient: (id, data) => axios.put(`http://hapi.fhir.org/baseDstu3/Patient/${id}?_format=json&_pretty=true`, data),
    createPatient: (data) => axios.post(`http://hapi.fhir.org/baseDstu3/Patient/?_format=json&_pretty=true`, data),
};

export default endpoints;
