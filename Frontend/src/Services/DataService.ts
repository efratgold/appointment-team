import axios from "axios";
import AppointmentModel from "../Models/AppointmentModel";
import TeamModel from "../Models/TeamModel";
import appConfig from "../Utils/AppConfig";

class DataService {
    public async getAllteams():Promise<TeamModel[]> {
        const response = await axios.get<TeamModel[]>(appConfig.teamsUrl)
        const teams = response.data;
        return teams;
        
    }

    public async getAppointmentByTeam(id: number):Promise<AppointmentModel[]> {
        const response = await axios.get<AppointmentModel[]>(appConfig.appointmentByTeamUrl + id);
        const appointments = response.data;
        return appointments;
        
    }

    public async addAppointment(appointment:AppointmentModel):Promise<void> {
        const response = await axios.post<AppointmentModel>(appConfig.appointmentUrl,appointment);
        const newAppointment = response.data;
        console.log(newAppointment);
        
        
    }
}

const dataService = new DataService();

export default dataService;
