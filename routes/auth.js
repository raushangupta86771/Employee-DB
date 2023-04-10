const express = require('express');
const router = express.Router();
const Employee = require('../models/users');


// CREATE Employee
router.post('/employees', async (req, res) => {
    const employee = new Employee(req.body);
    try {
        await employee.save();
        res.status(201).send(employee);
    } catch (err) {
        res.status(400).send(err);
    }
});

// LIST Employees (with pagination)
router.get('/employees', async (req, res) => {
    const pageSize = parseInt(req.query.pageSize) || 10;
    const page = parseInt(req.query.page) || 1;
    try {
        const employees = await Employee.find()
            .skip((page - 1) * pageSize)
            .limit(pageSize);
        res.send(employees);
    } catch (err) {
        res.status(500).send(err);
    }
});

// GET Employee
router.get('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).send();
        }
        res.send(employee);
    } catch (err) {
        res.status(500).send(err);
    }
});

// UPDATE Employee
router.patch('/employees/:id', async (req, res) => {
    const allowedUpdates = ['fullName', 'jobTitle', 'phoneNumber', 'email', 'address', 'city', 'state', 'primaryEmergencyContact', 'secondaryEmergencyContact'];
    const updates = Object.keys(req.body);
    const isValidUpdate = updates.every(update => allowedUpdates.includes(update));
    if (!isValidUpdate) {
        return res.status(400).send({ error: 'Invalid update' });
    }
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).send();
        }
        updates.forEach(update => employee[update] = req.body[update]);
        await employee.save();
        res.send(employee);
    }
    catch (err) {
        res.status(400).send(err);
    }
});


// DELETE Employee
router.delete('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).send();
        }
        res.send(employee);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;