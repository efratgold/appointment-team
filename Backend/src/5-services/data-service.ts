import dal from "../4-utils/dal";
import { OkPacket } from "mysql";
import TeamModel from "../2-models/team-model";
import AppointmentModel from "../2-models/appointment-model";

async function getAllteams():Promise<TeamModel[]> {
    const sql ="SELECT * FROM team";
    const teams = await dal.execute(sql);
    return teams

}
async function getAppointmentByTeam(teamId: number):Promise<AppointmentModel[]> {
    const sql ="SELECT appointment.*,team.teamName FROM appointment INNER JOIN team ON appointment.teamId = team.teamId WHERE appointment.teamId =? ";
    const appointment = await dal.execute(sql,[teamId]);
    return appointment;

}

async function addAppointment(appointment: AppointmentModel):Promise<AppointmentModel> {
    const sql ="INSERT INTO appointment VALUES(DEFAULT,?,?,?,?,?) "
    const result:OkPacket = await dal.execute(sql,[appointment.teamId,appointment.startDateTime,appointment.endDateTime,appointment.description,appointment.room]);
    appointment.appointmentId = result.insertId;
    return appointment;
}


export default {
    getAllteams,
    getAppointmentByTeam,
    addAppointment
};

