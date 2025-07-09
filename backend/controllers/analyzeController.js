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

    const prompt = `You are an expert recruiter. Analyze the following resume against the job description. Return ONLY a raw JSON object without markdown formatting. It should contain: 1. "match_score": Number (0–100), 2. "missing_skills": Array of strings, 3. "feedback": A brief paragraph, 4. "time_to_read_resume": Total time read the resume by recruiter, 5. job_description_summary: A brief jd summary, 6. resume_summary: A brief resume summary. Resume: ${resumeText} Job Description: ${jobDescription}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-4"
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
    });

    const gptOutput = response.choices[0].message.content;

    // Try parsing response to JSON
    const cleanJson = gptOutput.replace(/```json|```/g, "").trim();
    const data = JSON.parse(cleanJson);

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
      time_to_read_resume: data.time_to_read_resume,
      job_description_summary: data.job_description_summary,
      resume_summary: data.resume_summary,
    });
  } catch (err) {
    console.error("OpenAI/Parsing error: ", err);
    res.status(500).json({ error: "Failed to analyze resume." });
  }
};
