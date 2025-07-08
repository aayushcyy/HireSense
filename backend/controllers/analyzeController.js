// controllers/analyzeController.js
import openai from "../utils/openai.js";
import Analysis from "../models/Analysis.js";

export const analyzeResume = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    if (!resumeText || !jobDescription) {
      return res
        .status(400)
        .json({ error: "Missing resume or job description" });
    }

    const prompt = `You are an expert recruiter. Analyze the following resume against the job description. Return a JSON object with: 1. "match_score": A number out of 100. 2. "missing_skills": An array of skills missing or weak in the resume. 3. "feedback": One paragraph of professional advice to improve the resume. Resume:${resumeText} and Job Description:${jobDescription}`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4"
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
    });

    const gptOutput = response.choices[0].message.content;

    // Try parsing response to JSON
    const data = JSON.parse(gptOutput);

    // Save to MongoDB
    const newAnalysis = new Analysis({
      resumeText,
      jobDescription,
      matchScore: data.match_score,
      missingSkills: data.missing_skills,
      feedback: data.feedback,
    });

    await newAnalysis.save();

    res.status(200).json({
      matchScore: data.match_score,
      missingSkills: data.missing_skills,
      feedback: data.feedback,
    });
  } catch (err) {
    console.error("OpenAI/Parsing error: ", err);
    res.status(500).json({ error: "Failed to analyze resume." });
  }
};
