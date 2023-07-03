import express, { Request, Response, NextFunction } from "express";
import AppointmentModel from "../2-models/appointment-model";
import dataService from "../5-services/data-service";

const router = express.Router();

router.get("/teams", async (request: Request, response: Response, next: NextFunction) => {
    try {
       const teams = await dataService.getAllteams();
       response.json(teams);
    }
    catch(err: any) {
        next(err);
    }
});

router.get("/appointment-by-team/:id([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
       const appointmentByTeam = await dataService.getAppointmentByTeam(id)
       response.json(appointmentByTeam);
    }
    catch(err: any) {
        next(err);
    }
});
router.post("/appointment", async (request: Request, response: Response, next: NextFunction) => {
    try {
       const appointment = new AppointmentModel(request.body);
       const add = await dataService.addAppointment(appointment)
       response.sendStatus(201).json(add);
    }
    catch(err: any) {
        next(err);
    }
});


export default router;
// response.sendStatus(201).json(appointmentByTeam);