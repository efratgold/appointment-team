import AppointmentModel from "../../../Models/AppointmentModel";
import "./Card.css";

interface CardProps {

    appointment: AppointmentModel;
	
}

function Card(props: CardProps): JSX.Element {

    function formatDate(dateStr:string) {
        const currentDate = new Date(dateStr);
        const formattedDate = currentDate.toLocaleString("en-GB");
       
        return `${formattedDate}`;
    }

    return (
        <div className="Card">

            name: {props.appointment.teamName} <br />
            Appointment Id: {props.appointment.appointmentId} <br />
            description: {props.appointment.description} <br />
            Start date time:{formatDate (props.appointment.startDateTime)} <br />
            End date time: {formatDate(props.appointment.endDateTime)} <br />
            Room: {props.appointment.room}
            
			
        </div>
    );
}

export default Card;
