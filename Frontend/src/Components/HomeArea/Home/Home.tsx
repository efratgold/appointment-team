import "./Home.css";
import appoint from "../../../Assets/images/appointment.jpg"

function Home(): JSX.Element {
    return (
        <div className="Home">
			<img src={appoint} />
        </div>
    );
}

export default Home;
