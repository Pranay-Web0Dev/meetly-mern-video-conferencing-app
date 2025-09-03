# Meetly - MERN Video Conferencing App  

🚀 **Meetly** is a full-stack video conferencing application built with the **MERN stack**.  
It allows users to connect face-to-face with video calls, chat in real-time, and share screens — similar to Zoom, but lightweight and customizable.  

---

## ✨ Features  

- 🎥 Real-time video & audio calling (WebRTC + Socket.IO)  
- 💬 Live chat during calls  
- 🖥️ Screen sharing support  
- 👥 Create or join meeting rooms  
- 🔐 Secure communication with encrypted signaling  
- ⚡ Built with the MERN stack for scalability and performance  

---

## 🛠️ Tech Stack  

**Frontend (React)**  
- React 18  
- Material UI (MUI)  
- Axios  
- Socket.IO Client  
- React Router  

**Backend (Node.js + Express)**  
- Express.js  
- MongoDB + Mongoose  
- Socket.IO  
- Bcrypt (for password hashing)  
- CORS  

---

## 📂 Project Structure  

```
meetly/
│
├── frontend/         # React frontend (UI + client logic)
│   ├── public/
│   └── src/
│
├── backend/          # Node.js backend (API + socket server)
│   ├── src/
│   │   └── app.js
│   └── package.json
│
└── README.md         # Project documentation
```

---

## 📥 Download & Installation  

Follow these steps to set up the project locally:  

### 1. Clone the repository  
```bash
git clone https://github.com/Pranay-Web0Dev/meetly-mern-video-conferencing-app.git
cd meetly-mern-video-conferencing-app
```

### 2. Setup Backend  
```bash
cd backend
npm install
npm run dev
```

### 3. Setup Frontend  
Open a new terminal:  
```bash
cd frontend
npm install
npm start
```

---

## ⚡ Usage  

1. Start the backend server (`npm run dev` in backend).  
2. Start the frontend (`npm start` in frontend).  
3. Open the app in your browser at [http://localhost:3000](http://localhost:3000).  
4. Create a room or join an existing room to start video conferencing, chatting, and sharing screens.  

---

## 🔮 Future Improvements  

- Add user authentication (JWT / OAuth)  
- Meeting scheduling  
- Recording meetings  
- File sharing during calls  

---

## 🤝 Contributing  

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.  

---

## 📜 License  

This project is licensed under the [MIT License](LICENSE).  
