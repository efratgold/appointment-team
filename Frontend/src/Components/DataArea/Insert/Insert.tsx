import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AppointmentModel from "../../../Models/AppointmentModel";
import TeamModel from "../../../Models/TeamModel";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";
import "./Insert.css";

function Insert(): JSX.Element {

    const [teams, setTeams] = useState<TeamModel[]>([]);
   
    const {register, handleSubmit} = useForm<AppointmentModel>();

    const navigate = useNavigate();


    useEffect(()=> {
        dataService.getAllteams()
        .then(dbTeams => setTeams(dbTeams))
        .catch(err =>notifyService.error(err) )
    },[])

    function add(appointment: AppointmentModel): void {
        dataService.addAppointment(appointment)
        .then(()=> {
            notifyService.success("The Appointment has been successfully added");
            navigate("/list");
        })
        .catch(err =>notifyService.error(err))
        
    }

    return (
        <div className="Insert">
			<form onSubmit={handleSubmit(add)}>
            <select defaultValue=""{...register("teamId")}  required>
                <option disabled value="">Select team from options:</option>
                {teams.map(t=> <option key={t.teamId} value={t.teamId}>{t.teamName}</option>)}
            </select>

                <label>Start Date Time:</label>
                <input type="datetime-local"{...register("startDateTime")} required/>

                <label>End Date Time:</label>
                <input type="datetime-local"{...register("endDateTime")} required/>

                <label>Description:</label>
                <input type="text"{...register("description")} required />

                <label>Room:</label>
                <input type="text"{...register("room")} required/>

                <br />
                <button>Add</button>



            </form>
        </div>
    );
}

export default Insert;
