const express = require("express");
const router = express.Router();
const jobService = require("../services/job");

// create a new job
router.post("/create", async (req, res, next) => {
    try {
        await jobService.create(req.body);
        res.json({});
    } catch (err) {
        next(err);
    }
});

// get all jobs
router.get("/", async (req, res, next) => {
    try {
        const jobs = await jobService.getAll();
        res.json(jobs);
    } catch (err) {
        next(err);
    }
});

// find a job by id
router.get("/:id", async (req, res, next) => {
    try {
        const job = await jobService.getById(req.params.id);
        job ? res.json(job) : res.sendStatus(404);
    } catch (err) {
        next(err);
    }
});

// update a job by id
router.put("/:id", async (req, res, next) => {
    try {
        await jobService.update(req.params.id, req.body);
        res.json({});
    } catch (err) {
        next(err);
    }
});

// delete a job by id
router.delete("/:id", async (req, res, next) => {
    try {
        await jobService.delete(req.params.id);
        res.json({});
    } catch (err) {
        next(err);
    }
});

module.exports = router;
