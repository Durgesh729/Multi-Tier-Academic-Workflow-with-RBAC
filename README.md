<div align="center">

<!-- Animated Header Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=6366F1&height=200&section=header&text=Multi-Tier%20Academic%20Workflow&fontSize=40&fontColor=ffffff&animation=fadeIn&subtext=Project%20Review%20%26%20Governance%20Platform%20%E2%80%A2%204-Tier%20RBAC%20%E2%80%A2%20Supabase%20RLS&subfontSize=16&subfontColor=e0e7ff" alt="Header Waving Banner" />

<br />

<!-- Animated Typing Subtitle -->
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Outfit&weight=600&size=24&pause=1000&color=818CF8&center=true&vCenter=true&width=800&height=50&lines=Automating+Academic+Capstone+Evaluations;Role-Based+Access+Control+(Mentee+%7C+Mentor+%7C+Coordinator+%7C+HOD);Real-Time+WebSockets+%2B+Offline-First+Synchronization;Zero-Trust+PostgreSQL+Row-Level+Security+(RLS)" alt="Typing Subtitle" />
</p>

<!-- Animated Shields & Badges Row -->
<p align="center">
  <a href="https://github.com/Durgesh729/Multi-Tier-Academic-Workflow-with-RBAC/stargazers">
    <img src="https://img.shields.io/github/stars/Durgesh729/Multi-Tier-Academic-Workflow-with-RBAC?style=for-the-badge&logo=github&color=6366F1" alt="Stars" />
  </a>
  <a href="https://github.com/Durgesh729/Multi-Tier-Academic-Workflow-with-RBAC/network/members">
    <img src="https://img.shields.io/github/forks/Durgesh729/Multi-Tier-Academic-Workflow-with-RBAC?style=for-the-badge&logo=github&color=8B5CF6" alt="Forks" />
  </a>
  <a href="https://github.com/Durgesh729/Multi-Tier-Academic-Workflow-with-RBAC/issues">
    <img src="https://img.shields.io/github/issues/Durgesh729/Multi-Tier-Academic-Workflow-with-RBAC?style=for-the-badge&logo=github&color=EC4899" alt="Issues" />
  </a>
  <a href="https://github.com/Durgesh729/Multi-Tier-Academic-Workflow-with-RBAC/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Durgesh729/Multi-Tier-Academic-Workflow-with-RBAC?style=for-the-badge&logo=opensourceinitiative&color=10B981" alt="License" />
  </a>
</p>

<!-- Technology Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite_5-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

<br />

<!-- Quick Navigation Bar -->
<p align="center">
  <a href="#-system-overview">Overview</a> •
  <a href="#-key-features--role-capabilities">Key Features</a> •
  <a href="#-system-architecture">Architecture</a> •
  <a href="#-academic-review-workflow">Workflow</a> •
  <a href="#-rbac-permission-matrix">RBAC Matrix</a> •
  <a href="#-quick-start--installation">Quick Start</a> •
  <a href="#-api-documentation-catalog">API Catalog</a>
</p>

</div>

<br />

---

## 💡 System Overview

The **Multi-Tier Academic Workflow with RBAC** is a modern, enterprise-ready academic governance engine designed to automate the lifecycle of student capstone projects. 

By replacing messy spreadsheets and manual email chains with a unified **4-tier operational structure**, the platform provides transparent evaluation rubrics, automated mentor allocations, real-time WebSocket notifications, and executive HOD oversight—all backed by database-enforced **Row Level Security (RLS)**.

```
                  ┌──────────────────────────────────────────────┐
                  │    ACADEMIC PROJECT GOVERNANCE PLATFORM      │
                  └──────────────────────┬───────────────────────┘
                                         │
       ┌───────────────────┬─────────────┴─────────────┬───────────────────┐
       ▼                   ▼                           ▼                   ▼
 🎓 MENTEE           👨‍🏫 MENTOR                 📋 COORDINATOR       🏛️ HOD EXECUTIVE
┌──────────────┐    ┌──────────────┐          ┌──────────────┐     ┌──────────────┐
│ Submit Code  │    │ Grade Rubric │          │ Allocate     │     │ Final Audit  │
│ Deliverables │ ──►│ Provide Feed │ ───────► │ Mentors      │ ──► │ Executive    │
│ Live Status  │    │ Phase Status │          │ Batch Insights│    │ Sign-Off     │
└──────────────┘    └──────────────┘          └──────────────┘     └──────────────┘
```

---

## ✨ Key Features & Role Capabilities

<div align="center">
  <!-- Animated Typing Indicator for Key Features -->
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&pause=1000&color=34D399&center=true&vCenter=true&width=750&height=40&lines=%E2%9A%A1+Live+Interactive+Feature+Showcase;%F0%9F%94%92+Zero-Trust+RBAC+%2B+Postgres+RLS;%F0%9F%94%84+Offline-First+Synchronization+Engine" alt="Feature Animation Indicator" />
</div>

<br />

### 🎓 1. Mentee Workspace (Student Portal)
- 📤 **Deliverable Management**: Upload project abstracts, github repositories, PDF documentation, and demo videos.
- 👥 **Team Formation Engine**: Form project groups and invite peers with validation checks.
- 🔄 **Offline-First Synchronization**: Built-in `OfflineSyncProvider` caches submissions locally and syncs automatically when connection restores.
- ⚡ **Realtime Feedback Tracker**: Instant push notifications via Supabase WebSockets whenever review feedback or status updates occur.

### 👨‍🏫 2. Mentor Evaluation Suite (Faculty Guide)
- 📊 **Assigned Teams Control Center**: View and manage all assigned student project groups in one clean interface.
- 📝 **Structured Rubric Grading**: Evaluate preliminary proposals, mid-term milestones, and final defenses against standardized rubrics.
- 💬 **Contextual Action-Item Feedback**: Provide actionable feedback and request targeted revisions.
- 🚦 **Lifecycle State Machine**: Progress project statuses through `Draft` ➔ `Submitted` ➔ `Under Review` ➔ `Revision Required` ➔ `Approved`.

### 📋 3. Project Coordinator Dashboard
- 🗓️ **Academic Cycle Management**: Configure academic years, deadlines, and evaluation milestone calendars.
- 🔀 **Smart Mentor Allocation**: Balance faculty workloads and match domain expertise with student team topics.
- 🔗 **Dynamic Feedback Links**: Generate unique, secure submission links (`coordinator_feedback_links`) with instant real-time sync.
- 📈 **Batch Level Compliance**: Track department-wide submission rates, pending reviews, and evaluation timelines.

### 🏛️ 4. HOD Executive Suite (Head of Department)
- 📊 **Executive Analytics Hub**: Gain high-level visibility into project pass rates, domain breakdown, and evaluation velocity.
- 🛡️ **RPC Status Override**: Execute `SECURITY DEFINER` RPC functions (`update_project_status`) for emergency overrides and final approvals.
- 📄 **Accreditation Reporting**: Export comprehensive audit reports for academic accreditation bodies (e.g., NAAC / NBA).

---

## 🏗️ System Architecture

<br />

```mermaid
flowchart TD
    subgraph Client ["💻 Client Layer (Vite 5 + React 18)"]
        direction TB
        UI["Tailwind CSS & React Router v6"]
        AuthCtx["Auth Context Provider"]
        OfflineSync["Offline Sync Engine"]
        Toast["React Hot Toast Notifications"]
    end

    subgraph API ["⚙️ API Gateway (Node.js + Express)"]
        direction TB
        Server["Express REST API Server"]
        AuthMW["JWT & RBAC Middleware"]
        Routes["Project / Mentor / HOD Routes"]
    end

    subgraph DB ["⚡ Cloud Database (Supabase PostgreSQL)"]
        direction TB
        AuthService["Supabase Auth Service"]
        Postgres[("PostgreSQL Database")]
        RLS["Row Level Security Policies"]
        RPC["Security Definer RPCs"]
        Realtime["WebSocket Realtime Engine"]
    end

    UI --> AuthCtx
    AuthCtx --> Server
    Server --> AuthMW
    AuthMW --> Routes
    Routes --> RPC
    RPC --> Postgres
    Postgres --> RLS
    Postgres --> Realtime
    Realtime -.-> UI

    classDef clientStyle fill:#1e1b4b,stroke:#6366f1,stroke-width:2px,color:#fff;
    classDef apiStyle fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#fff;
    classDef dbStyle fill:#4c1d95,stroke:#a855f7,stroke-width:2px,color:#fff;

    class UI,AuthCtx,OfflineSync,Toast clientStyle;
    class Server,AuthMW,Routes apiStyle;
    class AuthService,Postgres,RLS,RPC,Realtime dbStyle;
```

---

## 🗺️ Academic Review Workflow

```mermaid
sequenceDiagram
    autonumber
    actor Mentee as 🎓 Mentee
    actor Mentor as 👨‍🏫 Mentor
    actor Coord as 📋 Coordinator
    actor HOD as 🏛️ HOD
    participant DB as ⚡ Supabase DB (RLS)

    Mentee->>DB: 1. Submit Project Abstract & Deliverables
    Note over DB: Status: PENDING_REVIEW
    DB-->>Mentor: 2. Realtime WebSocket Alert Triggered
    Mentor->>DB: 3. Evaluate Rubrics & Record Scores
    alt Revision Required
        Mentor->>DB: 4a. Mark Status: REVISION_REQUIRED
        DB-->>Mentee: Live Notification to Resubmit
    else Recommended
        Mentor->>DB: 4b. Mark Status: MENTOR_APPROVED
        DB-->>Coord: Forward to Coordinator
    end
    Coord->>DB: 5. Verify Team Allocation & Batch Compliance
    Coord->>DB: 6. Forward to HOD (Status: COORDINATOR_VERIFIED)
    HOD->>DB: 7. Execute update_project_status RPC (Final Sign-Off)
    Note over DB: Status: FULLY_APPROVED
    DB-->>Mentee: Final Approval Realtime Alert
```

---

## 🎭 RBAC Permission Matrix

<div align="center">

| Operational Capability | 🎓 Mentee | 👨‍🏫 Mentor | 📋 Coordinator | 🏛️ HOD |
| :--- | :---: | :---: | :---: | :---: |
| **Submit Proposal & Upload Artifacts** | ✅ | ❌ | ❌ | ❌ |
| **View Assigned Projects** | ✅ *(Own)* | ✅ *(Mentees)* | ✅ *(All)* | ✅ *(All)* |
| **Evaluate & Grade Rubrics** | ❌ | ✅ | ✅ | ✅ |
| **Allocate Faculty Mentors** | ❌ | ❌ | ✅ | ✅ |
| **Manage Academic Calendars** | ❌ | ❌ | ✅ | ✅ |
| **RPC Status Override** | ❌ | ❌ | ❌ | ✅ |
| **Department Audit Analytics** | ❌ | ❌ | ✅ | ✅ |

</div>

---

## 🛠️ Technology Ecosystem

| Component | Technology | Role in Architecture |
| :--- | :--- | :--- |
| **Frontend Framework** | `React 18` + `Vite 5` | Ultra-fast single page application with Hot Module Replacement |
| **Styling & UI Components** | `Tailwind CSS` + `Lucide Icons` | Glassmorphic, responsive design system with clear visual hierarchy |
| **State & Offline Sync** | `Context API` + `Custom Hooks` | Local caching & offline synchronization engine |
| **Backend Runtime** | `Node.js` + `Express.js` | RESTful API gateway handling RBAC verification & email triggers |
| **Database & Security** | `Supabase` (PostgreSQL) | Managed database with strict Row Level Security (RLS) policies |
| **RPC Functions** | `PL/pgSQL` | `SECURITY DEFINER` functions for safe status overrides |

---

## 📂 Repository Layout

```
project-review-system/
├── 📁 backend/
│   ├── 📁 lib/                   # Supabase client singletons
│   ├── 📁 middleware/            # JWT authentication & RBAC middleware
│   ├── 📁 routes/                # REST API route handlers
│   │   ├── authRoutes.js         # User registration & role selection
│   │   ├── projectRoutes.js      # Project proposals & deliverables
│   │   ├── mentorRoutes.js       # Faculty evaluation & rubrics
│   │   ├── hodRoutes.js          # Executive analytics & RPC overrides
│   │   ├── contact.js            # Automated email notifications
│   │   └── files.js              # File attachment handlers
│   ├── database_setup.sql        # Supabase RLS policies, tables & RPC functions
│   └── server.js                 # Express application entry point
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/        # Role dashboards (Mentee, Mentor, HOD, Coordinator)
│   │   ├── 📁 contexts/          # Auth, AcademicYear & OfflineSync Contexts
│   │   ├── 📁 hooks/             # Custom React hooks
│   │   ├── App.jsx               # Main router & role guards
│   │   └── main.jsx              # Application bootstrap
│   ├── tailwind.config.js        # Design tokens
│   └── vite.config.js            # Vite build setup
```

---

## 🚀 Quick Start & Installation

### 📋 Prerequisites
* [Node.js](https://nodejs.org/) `>= 18.x`
* [npm](https://www.npmjs.com/) `>= 9.x`
* A free [Supabase Account](https://supabase.com/)

---

### 1️⃣ Clone & Install Dependencies
```bash
git clone https://github.com/Durgesh729/Multi-Tier-Academic-Workflow-with-RBAC.git
cd Multi-Tier-Academic-Workflow-with-RBAC
```

---

### 2️⃣ Database Setup (Supabase)
1. Create a project in [Supabase](https://app.supabase.com/).
2. Go to the **SQL Editor** tab.
3. Run the SQL script from [`backend/database_setup.sql`](file:///c:/Users/DURGESH%20PADVAL/Documents/project%20review%20system/backend/database_setup.sql) to create tables, RLS policies, and RPC functions.

---

### 3️⃣ Backend Launch
```bash
cd backend
npm install
```

Configure `.env` in `backend/`:
```env
PORT=5000
SUPABASE_URL=https://your-supabase-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
JWT_SECRET=your-secret-jwt-key
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

Start backend:
```bash
npm run dev
```

---

### 4️⃣ Frontend Launch
```bash
cd ../frontend
npm install
```

Configure `.env` in `frontend/`:
```env
VITE_SUPABASE_URL=https://your-supabase-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_API_BASE_URL=http://localhost:5000/api
```

Start frontend:
```bash
npm run dev
```

---

## 🔌 API Documentation Catalog

<details>
<summary><b>🔍 Click to Expand API Route Details</b></summary>

<br />

### 🔐 Authentication (`/api/auth`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/signup` | Public | Register new account |
| `POST` | `/login` | Public | Authenticate user & receive session token |
| `POST` | `/select-role` | Authenticated | Assign primary role |

### 📁 Projects (`/api/projects`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Authenticated | List role-accessible projects |
| `POST` | `/` | Mentee | Create new project proposal |
| `PATCH` | `/:id/status` | Mentor / Coord / HOD | Update project status |
| `POST` | `/:id/deliverables` | Mentee | Upload project deliverables |

### 👨‍🏫 Mentor (`/api/mentor`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/assigned-teams` | Mentor | View assigned student groups |
| `POST` | `/feedback` | Mentor | Submit rubric scores & feedback |

### 🏛️ HOD & Coordinator (`/api/hod`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/analytics` | HOD / Coordinator | Get department metrics |
| `POST` | `/allocate-mentor` | Coordinator | Assign faculty mentor to team |
| `POST` | `/override-status` | HOD | Execute RPC status override |

</details>

---

## 🔒 Security & Row Level Security (RLS)

The system relies on Postgres RLS for absolute security:

```sql
-- RLS Policy: Coordinator full access
CREATE POLICY "Coordinator full access" ON coordinator_feedback_links
  FOR ALL USING (
    auth.uid() IN (
      SELECT id FROM users WHERE role = 'project_coordinator'
    )
  );

-- RPC Function: Safe status updates bypassing direct table mutations
CREATE OR REPLACE FUNCTION update_project_status(p_project_id UUID, p_status TEXT)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE projects SET status = p_status WHERE id = p_project_id;
END;
$$;
```

---

## 🤝 Contributing & License

Contributions are welcome! Please feel free to open a Pull Request.

Distributed under the **MIT License**.

<br />

<div align="center">

<p align="center">
  Crafted with ❤️ by <a href="https://github.com/Durgesh729"><b>Durgesh Padval</b></a>
</p>

<p align="center">
  <a href="#top"><b>⬆ Back to Top</b></a>
</p>

</div>
