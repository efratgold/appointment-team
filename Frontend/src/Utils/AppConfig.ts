class AppConfig {
    public teamsUrl = "http://localhost:4000/api/teams/";
    public appointmentByTeamUrl = "http://localhost:4000/api/appointment-by-team/";
    public appointmentUrl = "http://localhost:4000/api/appointment/";
}

const appConfig = new AppConfig();

export default appConfig;
