require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const path = require("path");
const cors = require("cors");
const User = require("./models/User");

const app = express();

// ✅ ENABLE CORS BEFORE ROUTES
app.use(cors({
    origin: "https://log-in-auth.onrender.com",
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ✅ FIXED: MATCH env variable name
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ---------- ROUTES ----------
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.json({ success: false, message: "Email already exists" });

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashed });

  return res.json({ success: true });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ success: false, message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ success: false, message: "Incorrect password" });

  return res.json({ success: true });
});

// ✅ FIXED: Required for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
