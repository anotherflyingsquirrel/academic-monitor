const express = require('express');
const Grade = require('../models/Grade');
const router = express.Router();

router.get('/summary', async (req, res) => {
  try {
    const summary = await Grade.aggregate([
      {
        $group: {
          _id: '$subjectId',
          averageMarks: { $avg: '$marks' },
        }
      },
      {
        $lookup: {
          from: 'subjects',
          localField: '_id',
          foreignField: '_id',
          as: 'subject'
        }
      },
      { $unwind: '$subject' },
      {
        $project: {
          _id: 0,
          subjectName: '$subject.name',
          subjectCode: '$subject.code',
          averageMarks: { $round: ['$averageMarks', 2] }
        }
      }
    ]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
