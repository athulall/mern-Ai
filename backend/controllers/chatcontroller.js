import { askAI } from "../services/aiservices.js";
export const chatcontroller =async(req,res)=>{
    try {
        const {message}=req.body
        const reply=await askAI(message)
        res.json({ reply });
    } catch (error) {

           console.log(error.message);

    res.status(500).json({
      error: "AI request failed"
    });
        
    }
}