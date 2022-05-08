import { render, screen, cleanup } from '@testing-library/react';

import Dashboard from '../pages/Dashboard';
import NavigationBar from '../components/NavigationBar';
import PatientTable from '../components/PatientTable';

// Cleanup after each test
afterEach(() => {
    cleanup();
})

// Test the Dashboard component
test('renders Dashboard Component', () => {
    render(<Dashboard />);
    const dashboard = screen.getByTestId('dashboard');
    expect(dashboard).toBeInTheDocument();
    expect(true).toBe(true);
});

// Test the NavigationBar component
test('renders NavigationBar Component', () => {
    render(<NavigationBar />);
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toHaveTextContent('Patient Dashboard');
    expect(true).toBe(true);
});

// Test the PatientTable component with patient list
test('renders PatientTable Component', () => {
    const patientList = [
        {
            "fullUrl": "http://hapi.fhir.org/baseDstu3/Patient/2332598",
            "resource": {
                "resourceType": "Patient",
                "id": "2332598",
                "meta": {
                    "extension": [{
                        "url": "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
                        "valueUri": "#1454d75295b33d33"
                    }],
                    "versionId": "1",
                    "lastUpdated": "2019-08-23T01:26:01.314+00:00"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\"> 33 khulbe </div><table class=\"hapiPropertyTable\"><tbody><tr><td>Address</td><td><span>Towerside </span><br/><span>San Francisco </span><span>CA </span><span>United States </span></td></tr><tr><td>Date of birth</td><td><span>05 July 2019</span></td></tr></tbody></table></div>"
                },
                "name": [{
                    "given": [" 33 khulbe"]
                }],
                "telecom": [{
                    "system": "phone",
                    "value": "biohoiho",
                    "use": "home"
                }],
                "gender": "male",
                "birthDate": "2019-07-05",
                "address": [{
                    "line": ["Towerside"],
                    "city": "San Francisco",
                    "state": "CA",
                    "postalCode": "94134",
                    "country": "United States"
                }]
            },
            "search": {
                "mode": "match"
            }
        }, {
            "fullUrl": "http://hapi.fhir.org/baseDstu3/Patient/2332599",
            "resource": {
                "resourceType": "Patient",
                "id": "2332599",
                "meta": {
                    "extension": [{
                        "url": "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
                        "valueUri": "#03b32856eea7b125"
                    }],
                    "versionId": "1",
                    "lastUpdated": "2019-08-23T01:26:01.338+00:00"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\"> khulbe </div><table class=\"hapiPropertyTable\"><tbody><tr><td>Address</td><td><span>dd </span><span>dd </span><span>Thailand </span></td></tr><tr><td>Date of birth</td><td><span>05 July 2019</span></td></tr></tbody></table></div>"
                },
                "name": [{
                    "given": ["  khulbe"]
                }],
                "telecom": [{
                    "system": "phone",
                    "value": "pgo",
                    "use": "home"
                }],
                "gender": "male",
                "birthDate": "2019-07-05",
                "address": [{
                    "city": "dd",
                    "state": "dd",
                    "postalCode": "10600",
                    "country": "Thailand"
                }]
            },
            "search": {
                "mode": "match"
            }
        }]
    render(<PatientTable patientList={patientList} />);
    const ptable = screen.getByTestId('ptable');
    expect(ptable).toBeInTheDocument();
    expect(ptable).toHaveTextContent('Patient List');
    expect(ptable).toContainHTML('<td>2332598</td>');

    const patientID = screen.getByTestId('patient-2332598-id');
    expect(patientID).toHaveTextContent('2332598');
    const patientName = screen.getByTestId('patient-2332598-name');
    expect(patientName).toHaveTextContent('33 khulbe');
    const patientGender = screen.getByTestId('patient-2332598-gender');
    expect(patientGender).toHaveTextContent('male');
    const patientBirthDate = screen.getByTestId('patient-2332598-birthdate');
    expect(patientBirthDate).toHaveTextContent('2019-07-05');
    const patientAddress = screen.getByTestId('patient-2332598-address');
    expect(patientAddress).toHaveTextContent('San Francisco CA 94134');
});

// Test the PatientTable component with empty patient list
test('renders PatientTable Component', () => {
    const patientList = [];
    render(<PatientTable patientList={patientList} />);
    const ptable = screen.getByTestId('ptable');
    expect(ptable).toBeInTheDocument();
    expect(ptable).toHaveTextContent('Patient List');
    expect(ptable).not.toContainHTML('<td>2332598</td>');

});