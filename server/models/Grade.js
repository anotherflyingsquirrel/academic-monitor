const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  marks: { type: Number, required: true },
  grade: { type: String, required: true },
  semester: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Grade', gradeSchema);
