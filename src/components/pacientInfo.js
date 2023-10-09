import React from "react";
import '../styles/pacientInfo.css';
import { Grid } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MasksIcon from '@mui/icons-material/Masks';


function PacientInfo() {
    return (
        <Grid container className="grid-container" >
            <Grid item className="grid-item">
                <div className="iconConten">
                    <LocalHospitalIcon className="icon" />
                </div>
                <div>Online Appointment</div>
                <div>Now making appointments at our service centers is much easier and faster</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Lab results</div>
                <div>Request your results via the web or consult them online</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <MedicalInformationIcon className="icon" />
                </div>
                <div>Medical Apt</div>
                <div>Obtain the certificate at the time or via email</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <MedicalServicesIcon className="icon" />
                </div>
                <div>Emergencies</div>
                <div>Consult the specialists</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <MasksIcon className="icon" />
                </div>
                <div>Covid</div>
                <div>News and information</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <VaccinesIcon className="icon" />
                </div>
                <div>Vaccination</div>
                <div>Flu, Covid, Hepatitis, etc.</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon"  />
                </div>
                <div>Blood donation</div>
                <div>Locations near your neighborhood</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Courses and Training</div>
                <div>More info...</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Visiting hours</div>
                <div>Schedules</div>
            </Grid>
        </Grid>
    );
}

export default PacientInfo;