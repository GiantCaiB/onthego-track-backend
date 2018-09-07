const db = require('../_helpers/db');
const Job = db.Job;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Job.find().select('-hash');
}

async function getById(id) {
    return await Job.findById(id).select('-hash');
}

async function create(jobParam) {
    const job = new Job(jobParam);
    // save job
    await job.save();
}

async function update(id, jobParam) {
    const job = await Job.findById(id);

    // validate
    if (!job) throw 'Job not found';

    // copy jobParam properties to job
    Object.assign(job, jobParam);

    await job.save();
}

async function _delete(id) {
    await Job.findByIdAndRemove(id);
}