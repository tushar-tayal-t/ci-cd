import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

const quotes = [
  "Success is not final, failure is not fatal...",
  "Don’t watch the clock; do what it does. Keep going.",
  "The future depends on what you do today.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t come to you, you go to it.",
  "Hard times don’t create heroes...",
  "Believe you can and you’re halfway there.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Work hard in silence, let success make the noise.",
  "The harder you work for something...",
  "Dream bigger. Do bigger.",
  "Stay focused and never give up.",
  "Small steps every day lead to big results.",
  "You are stronger than you think.",
  "Failure is not the opposite of success...",
  "Keep going. Everything you need will come...",
  "Your only limit is your mind.",
  "Do something today that your future self will thank you for.",
  "Discipline is the bridge between goals and success.",
  "Don’t quit. Suffer now and live like a champion.",
  "Success starts with self-discipline.",
  "Make yourself proud.",
  "Be stronger than your excuses.",
  "Doubt kills more dreams than failure ever will.",
  "Wake up with determination, go to bed with satisfaction.",
  "You don’t have to be great to start...",
  "It always seems impossible until it’s done.",
  "Keep learning, keep growing, keep going."
];

app.get("/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  res.json({
    quote: quotes[randomIndex],
    message: "Tushar Tayal"
  });
});

app.get("/route1", (req, res) => {
  res.json({
    message: "This is route 1 message",
    author: "Tushar Tayal"
  });
});

app.get("/route2", (req, res) => {
  res.json({
    message: "This is route 2 message",
    author: "Tushar Tayal"
  });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));