# 🎓 Campus Connect — Backend API

The backend service for a student-focused social and academic platform where university students can share lecture notes, past papers, and everyday campus moments (Canopy).

---

## ✨ Core Features (Planned)

* **Student Authentication:** Secure registration and login restricted to verified student emails
* **Academic Notes Hub:** Upload, categorize (by course/unit), search, and download lecture notes and revision materials (PDFs, docs).
* **Campus Moments Feed:** Share photos, short updates, and campus life highlights with fellow students.
* **Community Interactions:** Like, comment, and bookmark helpful study resources and posts.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** *(PostgreSQL)*
* **Authentication:** JSON Web Tokens (JWT) & bcrypt
* **Media & File Storage:** Cloudinary / AWS S3 + Multer

---

## 📂 Project Structure

```text
campus-app-backend/
├── src/
│   ├── config/          # Environment, DB, and cloud storage setups
│   ├── modules/         # Feature-based modules (auth, notes, moments, interactions)
│   ├── middlewares/     # Auth guards, file uploaders, and error handlers
│   ├── utils/           # Reusable helper functions
│   ├── app.js           # Express application setup
│   └── server.js        # Entry point and server initialization
├── .env.example         # Template for required environment variables
├── .gitignore
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org) (v18+ recommended)
* npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd campus-app-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory based on `.env.example`:
   ```env
   PORT=5000
   DATABASE_URL=your_database_connection_string
   JWT_SECRET=your_super_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

---

## 🗺️ Roadmap

- [x] Initialize repository and project structure
- [ ] Set up Express server and database connection
- [ ] Implement student authentication & email verification
- [ ] Build Notes upload and course filtering endpoints
- [ ] Build Campus Moments feed and media upload endpoints
- [ ] Add likes, comments, and bookmarks

---

## 📄 License

This project is licensed under the MIT License.
