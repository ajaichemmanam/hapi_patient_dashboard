# hapi_patient_dashboard

The objective of this UI is to display a list of patients from the FHIR server.
View/ Update the patient information.
Support searching by patient name.

### FHIR - A Brief Introduction

As a healthcare organization, a lot of our work deals with storing and analyzing complex healthcare data. For this, we depend on the [FHIR](https://www.hl7.org/fhir/) standard. FHIR (Fast Health Interoperability Resources) is an HL7 specification for Healthcare Interoperability.

### FHIR Patient documentation

To make REST calls, you can start with:
GET http://hapi.fhir.org/baseDstu3/Patient?_format=json&name:missing=false&birthdate:missing=false

### Screenshots

![screen1](https://raw.githubusercontent.com/ajaichemmanam/hapi_patient_dashboard/main/screenshots/main.png)

![screen1](https://raw.githubusercontent.com/ajaichemmanam/hapi_patient_dashboard/main/screenshots/add.png)

![screen1](https://raw.githubusercontent.com/ajaichemmanam/hapi_patient_dashboard/main/screenshots/view.png)
