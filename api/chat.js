export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' });
  const question = typeof request.body?.question === 'string' ? request.body.question.trim() : '';
  if (!question || question.length > 500) return response.status(400).json({ error: 'Please enter a shorter question.' });
  const prompt = `You are Joyal Varghese's portfolio assistant. Answer briefly using only this information. Joyal is a full-stack software developer in Sharjah, UAE. Skills: React, Next.js, TypeScript, NestJS, PostgreSQL, Prisma, Docker, AWS S3, GitHub, Linux, Jira and CI/CD. Experience: Software Developer & IT Support at Erick Trading LLC, UAE (FEB 2026 / NOW); MERN Stack Developer at Reon Technologies, India (JUN 2024 / OCT 2025); MERN Stack Developer Intern at Luminar Technolab, Kochi, India (JUL 2023 / FEB 2024). He builds ERP systems, dashboards, APIs, responsive websites and business tools. Contact: joyalvarghese458@gmail.com, +971 56 845 0406, LinkedIn https://linkedin.com/in/joyal-varghese-68aa6a243, GitHub https://github.com/joyalvarghese458, Instagram https://www.instagram.com/joyal__11/. Question: ${question}`;
  try {
    const result = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) });
    const data = await result.json();
    if (!result.ok) return response.status(502).json({ error: 'Gemini request failed.' });
    return response.status(200).json({ answer: data.candidates?.[0]?.content?.parts?.[0]?.text || 'I could not find an answer for that.' });
  } catch { return response.status(500).json({ error: 'AI service unavailable.' }); }
}
