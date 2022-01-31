import express from "express";
import * as helper from "../helpers/helpers.js";
import bodyParser from 'body-parser'
import cors from 'cors';


export const router = express.Router();
router.use(bodyParser());
router.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    origin: '*'
}))
// define all the api endpoints in the api router


// Endpoint to get all the activities 
router.get("/activities", (req, res) => {
    const data = helper.loadJsonFromFile();
    res.send(data)
});

// user Endpoints

// Endpoints get/post user activities
router
    .route("/userActivities/:userName/:date")
    .get((req, res) => {
        const myActvities = helper.loadJsonFromFile(req.params.userName, req.params.date);
        res.send(myActvities);

    }).post((req, res) => {
        const myActvities = helper.loadJsonFromFile(req.params.userName, req.params.date);
        const newEntry = {
            date: req.body.date,
            code: req.body.code,
            time: req.body.time,
            description: req.body.description
        }
        const added = helper.addElementToJson(myActvities, 'entries', newEntry);
        const saved = helper.saveJsonToFile(myActvities, req.params.userName, req.params.date);

        if (saved && added) { res.send(200) }
        else { res.send(500) }

    });

// Endpoints update(put)/delete user activity
router
    .route("/userActivities/:userName/:date/:id")
    .put((req, res) => {
        const updatedEntry = {
            date: req.body.date,
            code: req.body.code,
            time: req.body.time,
            description: req.body.description
        }
        const myActvities = helper.loadJsonFromFile(req.params.userName, req.params.date);
        helper.updateElementInJson(myActvities, 'entries', req.params.id, updatedEntry);
        const saved = helper.saveJsonToFile(myActvities, req.params.userName, req.params.date);
        if (saved) { res.send(200) }


    }).delete((req, res) => {

        const myActvities = helper.loadJsonFromFile(req.params.userName, req.params.date);
        console.log(myActvities)
        const updateActivities = helper.deleteElementFromJson(myActvities, 'entries', req.params.id);

        const saved = helper.saveJsonToFile(updateActivities, req.params.userName, req.params.date);

        if (saved) { res.send(200) }
    });










