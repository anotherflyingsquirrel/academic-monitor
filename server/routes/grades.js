const express = require('express');
const Grade = require('../models/Grade');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const grades = await Grade.find().populate('studentId').populate('subjectId');
    res.json(grades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const grade = new Grade(req.body);
    await grade.save();
    res.status(201).json(grade);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/student/:studentId', async (req, res) => {
  try {
    const grades = await Grade.find({ studentId: req.params.studentId }).populate('subjectId');
    res.json(grades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
