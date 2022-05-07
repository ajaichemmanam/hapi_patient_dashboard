# hapi_patient_dashboard

A Brief Introduction to FHIR

### FHIR

As a healthcare organization, a lot of our work deals with storing and analyzing complex healthcare data. For this, we depend on the [FHIR](https://www.hl7.org/fhir/) standard. FHIR (Fast Health Interoperability Resources) is an HL7 specification for Healthcare Interoperability.

What does that mean to you right now? Probably not too much (unless it does, in which case bonus points for you). That being said, it's a long, relatively complicated set of documentation to read and learn, so for the sake of our technical test we are going to focus on one small part; the [patient](https://www.hl7.org/fhir/patient.html) object.

### FHIR Patient documentation

To make REST calls, you can start with:

GET http://hapi.fhir.org/baseDstu3/Patient?_format=json&name:missing=false&birthdate:missing=false

### Screenshots

![screen1](https://raw.githubusercontent.com/ajaichemmanam/hapi_patient_dashboard/main/screenshots/main.png)

![screen1](https://raw.githubusercontent.com/ajaichemmanam/hapi_patient_dashboard/main/screenshots/add.png)

![screen1](https://raw.githubusercontent.com/ajaichemmanam/hapi_patient_dashboard/main/screenshots/view.png)
