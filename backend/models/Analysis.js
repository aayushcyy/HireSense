import mongoose from "mongoose";

const AnalysisSchema = new mongoose.Schema({
  resumeText: { type: String, required: true },
  jobDescription: { type: String, required: true },
  matchScore: { type: Number },
  missingSkills: [String],
  feedback: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Analysis", AnalysisSchema);
