

```markdown
🎓 EduPulse Hub — Next-Gen Student Management System
An ultra-modern, SaaS-style student management dashboard. This application features a Glassmorphism UI powered by React, with a robust Java Spring Boot backend and MySQL database for seamless CRUD operations.

---
📸 Project Showcase
<img width="1714" height="1236" alt="image" src="https://github.com/user-attachments/assets/d546dedb-e677-4787-8b09-818a283d6618" />

<img width="1241" height="1126" alt="image" src="https://github.com/user-attachments/assets/5c2d7ea8-6e50-481c-8fce-4148bcb97a7b" />

<img width="2742" height="1686" alt="image" src="https://github.com/user-attachments/assets/c734fdfa-98e8-46e5-a447-e056a832fb07" />

<img width="2860" height="1694" alt="image" src="https://github.com/user-attachments/assets/3cf0592c-741e-4300-b00e-5afda11d816e" />

<img width="2868" height="1796" alt="image" src="https://github.com/user-attachments/assets/2ca104a2-29bb-40fc-ad8d-6c0d905777b4" />


---
---



## 🚀 Key Features

- **⚡ Full CRUD Capability Matrix:** Real-time synchronization with external databases via Axios handlers (`GET`, `POST`, `PUT`, `DELETE`).
- **🔮 Modern Glassmorphism Aesthetic:** Translucent frosted containers, animated background glow gradients, and hardware-accelerated CSS hover transformations.
- **🌙 Dual Ambient Themes:** Fully decoupled dark/light mode engine using structural CSS properties with automatic local cache recovery.
- **🔍 Instant Vector Slicing:** Fluid, reactive front-end search engine filters items matching `Name`, `Email`, or `Program Track` instantaneously.
- **📄 Client-Side Pagination:** Bounded data chunk pagination restricted strictly to 5 entries per viewport segment for maximum screen cleanliness.
- **🔔 Premium Notifications System:** Integrated with `React-Toastify` to provide non-blocking alert prompts for application events.

---

## 📁 Repository Directory Structure

The components are modularized to separate layouts, data fetching layers, and UI templates:

```text
src/
├── components/
│   ├── StudentForm.jsx      # Modal layout supporting record registration & mutation
│   ├── StudentTable.jsx     # High-density responsive data mesh viewport 
│   ├── SearchBar.jsx        # Instant query-matching input string element
│   ├── StudentStats.jsx     # Live systemic counter computation module
│   ├── Pagination.jsx      # Sliding-window directory navigation interface
│   └── ThemeToggle.jsx     # Interface canvas profile selector switch
├── pages/
│   └── Dashboard.jsx        # Root orchestrator mapping local data streams
├── services/
│   └── studentService.js    # Decoupled HTTP Client network mapping layer
├── App.jsx                  # Root assembly wrapper containing aurora blur assets
├── App.css                  # Production-ready semantic style framework
└── main.jsx                 # Strict mode environment bootstrap mount

```

---

## 🛠️ API Contract Schema Architecture

The network transport driver communicates natively with your Spring Boot server. Ensure your backend matches the following mapping matrix:

| Action Class | HTTP Method | Route Endpoint Target | Payload Profile / Expectations |
| --- | --- | --- | --- |
| **Fetch Catalog** | `GET` | `/api/students` | Yields comprehensive index array of student objects |
| **Isolate Profile** | `GET` | `/api/students/{id}` | Targets unique system numerical indicator key |
| **Commit Registry** | `POST` | `/api/students` | Injects brand-new JSON object configuration |
| **Update Integrity** | `PUT` | `/api/students/{id}` | Mutates parameter data maps matching specific ID |
| **Purge Record** | `DELETE` | `/api/students/{id}` | Safely deletes the record from database tables |

### Expected Entity Object Shape

```json
{
  "id": 1,
  "name": "Mahesh Kumar",
  "email": "mahesh@gmail.com",
  "phone": "9876543210",
  "course": "Java Full Stack",
  "dob": "2004-06-15",
  "address": "Hyderabad"
}

```

---

## 💻 Local Setup & Execution Guide

Follow these steps to run a local instance of the application:

### 1. Environmental Requirements

Ensure you have **Node.js LTS** and **npm** configured locally.

### 2. Clone and Dependency Acquisition

```bash
# Clone this repository layout
git clone [https://github.com/YOUR_USERNAME/student-ui.git](https://github.com/YOUR_USERNAME/student-ui.git)

# Step into the working directory root
cd student-ui

# Install core development modules
npm install

```

### 3. Verify Server Base Endpoints

Open `src/services/studentService.js` and verify that the base target string perfectly addresses your backend API server:

```javascript
const API_URL = 'http://localhost:8080/api/students';

```

### 4. Fire up Development Bundler

```bash
npm run dev

```

Navigate to the running port (typically `http://localhost:5173`) in your preferred browser interface.

---

## 🎨 Theme Matrix Engine Details

The UI is built purely on highly efficient native standard CSS layout models inside `src/App.css` to prevent framework bloat:

* **Dark Profile:** Deep ocean navy backdrop spaces (`#090d16`) running frosted glass panels with custom text structures (`#f8fafc`).
* **Light Profile:** Sleek crisp grey space textures (`#f1f5f9`) displaying high-density deep gray typography structures (`#0f172a`).

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more details.

```

```
