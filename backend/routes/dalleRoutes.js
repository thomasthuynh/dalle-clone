import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL-E!" });
});

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      // response_format: "b64_json"
    });

    const image = aiResponse.data[0].url;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: error });
  }
});

export default router;
