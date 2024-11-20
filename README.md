# Tertiary-Care
<h2 align="left">Introduction:</h2>

The Tertiary Care System leverages modern technological models to enhance healthcare delivery by streamlining appointments, improving doctor-patient interactions, optimizing location mapping, and ensuring a seamless user experience.

<h2 align="left">Key Features:</h2>

- **Appointments Model**:
    
    This feature simplifies the scheduling process, enabling patients to book, modify, or cancel appointments efficiently. The system reduces wait times and ensures optimal utilization of healthcare resources.
    
- **Doctor Management Model**:
    
    A comprehensive database of doctors categorized by specialties, availability, and expertise helps patients connect with the right professionals quickly. This fosters better patient-doctor matching and enhances treatment outcomes.
    
- **Location Mapping Model**:
    
    Integrating geolocation technology, this feature allows patients to find nearby healthcare facilities, clinics, or tertiary care centers. It ensures accessibility and reduces the logistical barriers to seeking quality care.
    
- **User-Centric Model**:
    
    Designed for an intuitive user experience, the platform prioritizes ease of navigation, personalized recommendations, and data security. It caters to diverse user needs, from first-time patients to recurring visitors.
    

<h2 align="left"> Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)

<h2 align="left"> Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)

<h2 align="left">Library:</h2>

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- jsonwebtoken
- mongoose
- nodemon
- validator
- nodemailer

<h2 align="left">Database Structure</h2>

The platform will require a relational database to manage Users,Doctor-Location,Appointment,Location. Below is a proposed database structure with the key tables.

### **Tables**:

---

### a) **Users**

| **Field Name** | **Type** |
| --- | --- |
| userid | string |
| username | String |
| googleid | String |
| thumbnail | String |
| category | String |
| name | String |
| dob | String |
| gender | String |
| qua | String |
| spec | String |
| mailid | String |
| phoneno | String |
| password | password |
| totalrating | Number |
| totalperson | Number |
| desc | String |

### b) Location

| **Field Name** | **Type** |
| --- | --- |
| touristid | String |
| locationname | String |
| lat | Number |
| lng | Number |

### c) Doctor Location

| **Field Name** | **Type** |
| --- | --- |
| doctorid | String |
| location | String |
| time | String |
| day | String |
| free | String |

### d) appointment

| **Field Name** | **Type** |
| --- | --- |
| doctorid | Ref. Object → Product |
| doctorname | Ref. Object → Users |
| patentname | String |
| patentid | String |
| location | String |
| phonenumber | String |

<h2 align="left">Modules and Components:</h2>



<h3 align="left">Modules:</h3>

1. **Appointment Management Module**
    - Schedule, reschedule, and cancel appointments
    - Appointment reminders and notifications
    - Priority and emergency appointment handling
    - Integration with doctors’ availability
2. **Doctor Management Module**
    - Doctor profiles (specialty, qualifications, availability)
    - Real-time availability updates
    - Search and filter by specialization or expertise
    - Reviews and ratings for doctors
3. **Location Mapping Module**
    - GPS-enabled facility locator
    - Route guidance and navigation
    - Integration with nearby services like pharmacies
    - Distance-based doctor recommendations
4. **User Management Module**
    - User registration and profile creation
    - Role-based access (patients, doctors, admins)
    - Data security and privacy management
    - Personalized dashboards
5. **Admin Management Module**
    - System monitoring and maintenance
    - User activity tracking
    - Reporting and analytics
    - Role and access control

<h2 align="left">Components:</h2>

<h3 align="left">Backend Components:</h3>

- **Database Management**: Centralized storage for users, doctors, and appointments.
- **API Services**: RESTful APIs for frontend-backend communication.
- **Authentication Service**: Secure login and token-based authentication.

<h2 align="left">Development with ZenDevx:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>

<h2 align="left">🐦 Connect With Me:</h2>
<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://x.com/IamZenDevX" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>

I hope you like the project. Thanks for reading :)
