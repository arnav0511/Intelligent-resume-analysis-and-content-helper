"use server";
import { model } from '@/lib/GenAI';




export async function resume(formData) {
  const parsedText = formData.get("parsedText");
  const role = formData.get("role");

  if (!parsedText || !role) {
    return { error: "Missing required fields" };
  }


  const prompt = `Optimize the following resume for ATS compatibility based on the specified job role:\n\n${parsedText}\n\nJob Role: ${role}\n\nProvide detailed optimization tips in bullet points. Ensure they are crisp, precise, and professional. Avoid general commentary and directly list improvements related to structure, keywords, and ATS optimization. Use an extra space between points and "-" to differentiate subpoints within the same point.`


  


  try {
    const response = await model.generateContent(prompt);
    const generatedText = response?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No caption generated";
    return { result: generatedText };
  }catch(err){
    return {err}
  }

}


export async function linkedin(formData){
  const parsedText = formData.get('parsedText');


  if(!parsedText){
    return {error : 'Missing field'}
  }

  const prompt = `Optimize the following LinkedIn profile for increased visibility, keyword relevance, and professional appeal:\n\n${parsedText}\n\nProvide detailed optimization tips in bullet points. Ensure they are crisp, precise, and professional. Avoid general commentary and directly list improvements related to structure, keywords, and profile impact. Use an extra space between points and "-" to differentiate subpoints within the same point.`


  try{
    const response = await model.generateContent(prompt);
    const generatedText = response?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No caption generated";
    return {result : generatedText}
  }catch(err){
    return {err}
  }

}


export async function caption(formData) {
  const userInput = formData.get("userInput");
  const tone = formData.get("tone");

  if (!userInput || !tone) {
    return { error: "Missing fields" };
  }

  const prompt = `Generate a professional LinkedIn post caption based on: ${userInput}, in a ${tone} tone. Return only one option as the output.`;


  try {
    // ✅ Ensure the AI response is awaited
    const response = await model.generateContent(prompt);

    // ✅ Extract the generated text from the response
    const generatedText = response?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No caption generated";

    return { result: generatedText }; // ✅ Return only the extracted text
  } catch (error) {
    console.error("Error generating caption:", error);
    return { error: "Failed to generate caption" };
  }
}
