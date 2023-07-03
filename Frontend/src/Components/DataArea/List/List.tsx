import { error } from "console";
import { ChangeEvent, useEffect, useState } from "react";
import AppointmentModel from "../../../Models/AppointmentModel";
import TeamModel from "../../../Models/TeamModel";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";
import Card from "../Card/Card";
import "./List.css";

function List(): JSX.Element {

    const [teams, setTeams] = useState<TeamModel[]>([]);
    const [appointment, setAppointment] = useState<AppointmentModel[]>([]);

    useEffect(()=> {
        dataService.getAllteams()
        .then(dbTeams => setTeams(dbTeams))
        .catch(err =>notifyService.error(err) )
    },[])

    async function getAppointment(args: ChangeEvent<HTMLSelectElement>):Promise<void> {
        const id = +args.target.value;
        await dataService.getAppointmentByTeam(id)
        .then(dbAppointment => setAppointment(dbAppointment))
        // .catch{(err) => notifyService.error(err)}
        

    }

    return (
        <div className="List">
			<select defaultValue="" onChange={getAppointment}>
                <option disabled value="">Select team from options:</option>
                {teams.map(t=> <option key={t.teamId} value={t.teamId}>{t.teamName}</option>)}
            </select>
            <br />
            <br />
            <br />
            {appointment.map(a => <Card key={a.appointmentId} appointment={a}/>)}

        </div>
    );
}

export default List;
