export const prerender = false;

export async function POST({ request }) {
  const { question } = await request.json().catch(() => ({ question: '' }));
  if (typeof question !== 'string' || !question.trim() || question.length > 500) {
    return new Response(JSON.stringify({ error: 'Please enter a shorter question.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const prompt = `You are Joyal Varghese's portfolio assistant. Always speak about Joyal in the third person. Never say "I am Joyal" or answer as if you are Joyal; say "Joyal is..." or "He...". Answer briefly using only this information. Joyal is a full-stack software developer in Sharjah, UAE. Skills: React, Next.js, TypeScript, NestJS, PostgreSQL, Prisma, Docker, AWS S3, GitHub, Linux, Jira and CI/CD. Experience: Software Developer & IT Support at Erick Trading LLC, UAE (FEB 2026 / NOW); MERN Stack Developer at Reon Technologies, India (JUN 2024 / OCT 2025); MERN Stack Developer Intern at Luminar Technolab, Kochi, India (JUL 2023 / FEB 2024). He builds ERP systems, dashboards, APIs, responsive websites and business tools. Contact: joyalvarghese458@gmail.com, +971 56 845 0406, LinkedIn https://linkedin.com/in/joyal-varghese-68aa6a243, GitHub https://github.com/joyalvarghese458, Instagram https://www.instagram.com/joyal__11/. Question: ${question}`;
  try {
    const result = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${import.meta.env.GEMINI_API_KEY}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) });
    const data = await result.json();
    if (!result.ok) return new Response(JSON.stringify({ error: data.error?.message || 'Gemini request failed.' }), { status: 502, headers: { 'Content-Type': 'application/json' } });
    return new Response(JSON.stringify({ answer: data.candidates?.[0]?.content?.parts?.[0]?.text || 'I could not find an answer for that.' }), { headers: { 'Content-Type': 'application/json' } });
  } catch {
    return new Response(JSON.stringify({ error: 'AI service unavailable.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
