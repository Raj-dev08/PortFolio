import { NextRequest, NextResponse } from "next/server";
import { userData } from "@/data/data";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.HF_API_KEY,
  baseURL:  "https://integrate.api.nvidia.com/v1"
});


export async function POST(req: NextRequest) {
  try {
    const { message , previousContext } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: "No message provided" }, { status: 400 });
    }

    let contextText

    if(message==="Greet the visitor" && previousContext===""){
      contextText=`
        You are ${userData.name}'s personal ai assistant.
        Greet the visitor in a
        nice way and introduce yourself as Souptiks's personal AI assistant 
        this is be a default message, it is auto generated
        not sent by the user
        You dont have any name
        so introduce yourself accordingly but dont say something its auto generated or anything .
        `
    }
    else{
      contextText=`
        You are ${userData.name}'s personal ai assistant.
        The user will have a conversation with you, and you should assist them based on the context of the conversation.
        Here is the previous conversation context:
        ${previousContext}
        Raj is the nickname of ${userData.name}
        You have no name.
        You are just an assistant to ${userData.name} and you are here to assist the user in any way possible based on the information you have about ${userData.name} and the context of the conversation.
        Here is the details of ${userData.name} that might be useful for you to assist the user better:
        ${userData.context}
        projects:
        ${userData.projects.map(p=>`- ${p.name}: ${p.description ?? "No description"} `).join("\n")}    
        skills:
        ${Object.entries(userData.skills).map(([cat, skills])=>`- ${cat}: ${skills.map(s=>s.name).join(", ")}`).join("\n")}
        Outside of tech:
        ${userData.name} is a sports person he likes to play all kind of sports.
        He played cricket for 5+ years in academy level and also played football and badminton for fun ( not academy level).
        He is interested in science as well, he likes to read about space and quantum physics and all that stuff.
        Likes to explore New things and learn about them.
        Wants to learn video editing in future alongside guitar.
        Use markdown to answer so that it looks good in the frontend, and also use emojis where appropriate to make the conversation more lively.
        Dont invent any information about ${userData.name} that is not provided here, and if you dont know the answer to something just say you dont know instead of making something up.
        `
    }
    
    
    
    
    const response = await openai.chat.completions.create({
        model: "meta/llama-3.1-8b-instruct",
        messages: [
            {
                role: "system",
                content: contextText
            },
            {
                role: "user",
                content: message
            }
        ]
    });  

    const reply = response?.choices?.[0]?.message?.content ?? "Sorry, I couldn't respond.";

    return NextResponse.json({ reply });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ reply: "AI service error" }, { status: 500 });
  }
}
