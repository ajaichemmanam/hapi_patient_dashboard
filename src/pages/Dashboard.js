import { React, useEffect, useState } from 'react';
import PatientTable from '../components/PatientTable';
import endpoints from '../connection/endpoints';
import NavigationBar from '../components/NavigationBar';

function Dashboard() {

    const [patientList, setPatientList] = useState([]);

    useEffect(() => {
        endpoints.getPatientList().then(res => {
            console.log(res.data);
            setPatientList(res.data.entry);
        }
        );
    }, []);


    return (
        <div>
            <NavigationBar />
            <PatientTable patientList={patientList} />
        </div>
    );
}

export default Dashboard;