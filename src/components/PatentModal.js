import { React, useEffect, useState } from 'react';


function PatentModal(props) {
    const [nameValue, setNameValue] = useState(props.patient ? props.patient.resource.name[0].given[0] : "");
    const [dobValue, setDobValue] = useState(props.patient ? props.patient.resource.birthDate : "");
    const [genderValue, setGenderValue] = useState(props.patient ? props.patient.resource.gender : "");

    useEffect(() => {
        console.log("props.patient", props.patient)
        if (props.patient != null) {

            setNameValue(props.patient.resource.name[0].given[0])
            setDobValue(props.patient.resource.birthDate)
            setGenderValue(props.patient.resource.gender)
        }
    }, [props.patient]);

    return (
        props.isOpen ?
            <div>
                <div className="py-12 bg-gray-700/50 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                            <h1 className="text-gray-800 pt-4 h-10 font-lg font-bold tracking-normal leading-tight mb-4">Enter Patient Details</h1>
                            <img alt="..." src={props.patient && props.patient.patientImage ? props.patient.patientImage : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"} className="shadow-lg rounded-full mx-auto max-w-120-px" style={{ width: "200px" }}></img>
                            <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Patient Name</label>
                            <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter Full Name Here" value={nameValue} onChange={(e) => { setNameValue(e.target.value) }} />
                            <label for="gender" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Gender</label>
                            <div className="relative mb-5 mt-2">

                                <select className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border' onChange={(e) => { setGenderValue(e.target.value) }} value={genderValue}>
                                    <option value="male">Male</option>
                                    <option value="female" >Female</option>
                                    <option value="other" >Other</option>
                                    <option value="unknwon" >Unknown</option>
                                </select>
                            </div>

                            <label for="expiry" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Date of Birth</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x="4" y="5" width="16" height="16" rx="2" />
                                        <line x1="16" y1="3" x2="16" y2="7" />
                                        <line x1="8" y1="3" x2="8" y2="7" />
                                        <line x1="4" y1="11" x2="20" y2="11" />
                                        <rect x="8" y="15" width="2" height="2" />
                                    </svg>
                                </div>
                                <input id="expiry" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border datepicker" placeholder="YYYY-MM-DD" value={dobValue} onChange={(e) => { setDobValue(e.target.value) }} />
                            </div>
                            <div className="flex items-center justify-start w-full">
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" onClick={() => {

                                    var updatedPatientData = {
                                        name: nameValue,
                                        dob: dobValue,
                                        gender: genderValue
                                    }

                                    setNameValue("")
                                    setDobValue("")
                                    setGenderValue("")

                                    props.handleSave(props.patient, updatedPatientData);

                                }}>Save</button>
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={props.onClose}>Discard</button>
                            </div>
                            <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={props.onClose} aria-label="close modal" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div> : null
    );
}

export default PatentModal;