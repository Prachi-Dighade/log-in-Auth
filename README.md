"Login Authentication System"

A clean and secure Login + Signup Authentication System built using Node.js, Express, MongoDB, JWT cookies, and HTML/CSS frontend.
This project demonstrates complete user authentication flow for modern web apps.

🚀 Features

🔐 User Signup

🔑 User Login

🍪 JWT Cookie Authentication

👀 Password visibility toggle

🛡 Protected route: /api/me

🚪 Logout (clears authentication cookie)

⚡ Clean & responsive UI

🗂 Organized folder structure

❌ node_modules NOT included

🔒 .env protected via .gitignore



"🛠 Tech Stack"
Frontend

HTML5

CSS3 (responsive, clean UI)

Vanilla JavaScript

Backend

Node.js

Express.js

MongoDB + Mongoose

JSON Web Tokens (JWT)

bcrypt (password hashing)

📁 Project Structure

login-auth/
│── models/
│    └── User.js
│── public/
│    ├── login.html
│    ├── signup.html
│    ├── success.html
│    └── style.css
│── server.js
│── package.json
│── .env   (NOT uploaded)
│── .gitignore
└── README.md

⚙️ Environment Variables
Create a .env file and add:
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000

🔍 Screens You Get

✨ Signup Page

🔑 Login Page

🎉 Success Dashboard Page

❌ Error handling (invalid credentials, user already exists)


What I Learned

How authentication works (signup → hash → login → verify token)

Securing routes with JWT cookies

Structuring a full-stack project

Using Git/GitHub like a pro

Professional UI designing
