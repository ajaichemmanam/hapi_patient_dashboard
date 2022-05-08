import { React } from "react";
import { useEffect, useState } from "react";
import PatentModal from "../components/PatentModal";
function PatientTable(props) {

    const [patientList, setPatientList] = useState([]);
    const [patientListInView, setPatientListInView] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const [numItemsPerPage, setNumItemsPerPage] = useState(5);

    const [totalPages, setTotalPages] = useState(props.patientList.length / numItemsPerPage);

    useEffect(() => {
        setPatientListInView(props.patientList.slice(currentPage * numItemsPerPage, currentPage * numItemsPerPage + numItemsPerPage));
    }, [currentPage]);

    useEffect(() => {
        setTotalPages(props.patientList.length / numItemsPerPage);
        setPatientListInView(props.patientList.slice(currentPage * numItemsPerPage, currentPage * numItemsPerPage + numItemsPerPage));
    }, [props.patientList]);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        const filteredList = props.patientList.filter(patient => {
            return patient.resource.name[0].given[0].toLowerCase().includes(searchTerm.toLowerCase());
        }
        );
        setPatientListInView(filteredList.slice(currentPage * numItemsPerPage, currentPage * numItemsPerPage + numItemsPerPage));
    }

    const [showModal, setShowModal] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const handleModalClose = () => {
        setShowModal(false);
    }

    const handleSave = (patient, updatedPatientData) => {
        console.log(patient)
        console.log(updatedPatientData)

        // 

        setShowModal(false);
        setSelectedPatient(null);
    }



    return (
        <div>
            <PatentModal isOpen={showModal} patient={selectedPatient} onClose={handleModalClose} handleSave={handleSave} />
            <div className="bg-white p-8 rounded-md w-full" data-testid="ptable">
                <div className=" flex items-center justify-between pb-6">
                    <div>
                        <h2 className="text-gray-600 font-semibold">Patient List</h2>
                        {/* <span className="text-xs">All products item</span> */}
                    </div>
                    <div className="flex items-center justify-evenly">
                        <div className="flex bg-gray-50 items-center p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd" />
                            </svg>
                            <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." onChange={handleSearch} />
                        </div>
                        <div className="lg:ml-40 ml-10 space-x-8">
                            <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" onClick={() => {
                                setSelectedPatient(null);
                                setShowModal(true);
                            }}>Add Patient</button>
                            {/* <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Patient ID
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Gender
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Date of Birth
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Address
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {patientListInView.map((patient, index) => {
                                        return (
                                            <tr key={index} onClick={() => {

                                                // Add patientImage to patient object
                                                const patientImage = patient.resource.gender === "male" ? "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80";
                                                patient.patientImage = patientImage;


                                                setSelectedPatient(patient);

                                                setShowModal(true)
                                            }} className="cursor-pointer">
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" data-testid={`patient-${patient.resource.id}-id`}>
                                                    <p className="text-gray-900 whitespace-no-wrap">{patient.resource.id}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-10 h-10">
                                                            <img className="w-full h-full rounded-full"
                                                                src={patient.resource.gender === "male" ? "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"}
                                                                alt="" />
                                                        </div>
                                                        <div className="ml-3" data-testid={`patient-${patient.resource.id}-name`}>
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {patient.resource.name[0].given[0]}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" data-testid={`patient-${patient.resource.id}-gender`}>
                                                    <p className="text-gray-900 whitespace-no-wrap">{patient.resource.gender}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" data-testid={`patient-${patient.resource.id}-birthdate`}>
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {patient.resource.birthDate}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" data-testid={`patient-${patient.resource.id}-address`}>
                                                    <p className="text-gray-900 whitespace-no-wrap">{
                                                        patient.resource.address ? patient.resource.address[0].city + " " + patient.resource.address[0].state + " " + patient.resource.address[0].postalCode : "No Address Found"
                                                    }</p>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <div
                                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span className="text-xs xs:text-sm text-gray-900">
                                    Showing {currentPage * numItemsPerPage + 1} to {currentPage * numItemsPerPage + numItemsPerPage} of {props.patientList.length} Entries
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button
                                        className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
                                        onClick={() => {
                                            if (currentPage > 0) {
                                                setCurrentPage(currentPage - 1);
                                            }
                                        }}
                                    >
                                        Prev
                                    </button>
                                    &nbsp; &nbsp;
                                    <button
                                        className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                                        onClick={() => {
                                            if (currentPage < totalPages - 1) {
                                                setCurrentPage(currentPage + 1);
                                            }
                                        }}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
export default PatientTable;