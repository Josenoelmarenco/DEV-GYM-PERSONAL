const model = require('../config/gemini');

const generateText3 = async (req, res) => {
  const { age, gender, healthGoal, dietPreference, workoutDays } = req.body;
  //validamos:
  if (!age || !gender || !healthGoal || !dietPreference || !workoutDays) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const prompt = `
        I am a ${age}-year-old ${gender} aiming to ${healthGoal}.
        My diet preference is ${dietPreference}, and I can work out ${workoutDays} days per week.
        Please provide a personalized weekly health and fitness plan, including exercise types, duration, and meal suggestions.
        `;
  //pasamos el mensaje a Gemini:
  try {
    const result = await model(prompt);
    res.json({ output: result.text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = generateText3;
