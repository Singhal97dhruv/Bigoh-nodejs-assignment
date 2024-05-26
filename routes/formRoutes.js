const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');
const Form = require('../models/form');
const router = express.Router();

// Validation schema
const formSchema = Joi.object({
    id: Joi.string().guid({ version: 'uuidv4' }).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required()
});

// Route to create a form
router.post('/form', async (req, res) => {
    const { title } = req.body;
    try {
        const newForm = await Form.create({ id: uuidv4(), title });
        res.status(201).json(newForm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to fill the form data
router.post('/filldata', async (req, res) => {
    const { title, ...data } = req.body;
    try {
        await formSchema.validateAsync(data);
        const form = await Form.create({ ...data, title });
        res.status(201).json(form);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to get all filled data for a form title
router.get('/filldata', async (req, res) => {
    const { title } = req.query;
    try {
        const forms = await Form.findAll({ where: { title } });
        res.status(200).json(forms);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
