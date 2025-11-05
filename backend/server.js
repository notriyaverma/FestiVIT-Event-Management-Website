import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 📥 POST /signup — Save participant or organizer info
app.post("/signup", (req, res) => {
  const data = req.body;

  if (!data.role) {
    return res.status(400).json({ message: "Role missing" });
  }

  // Save to a JSON file (you can later replace this with MongoDB)
  const file = "users.json";
  let users = [];

  if (fs.existsSync(file)) {
    users = JSON.parse(fs.readFileSync(file));
  }

  users.push(data);
  fs.writeFileSync(file, JSON.stringify(users, null, 2));

  console.log("✅ New signup received:", data);
  res.status(200).json({ message: "Signup successful!" });
});

// 🟢 Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
