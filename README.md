# 👨‍💼 Employee Management API

A production-ready REST API built with **Node.js**, **Prisma ORM**, **PostgreSQL (Supabase)**, and **Docker**. Fully documented with Swagger and secured with JWT Authentication.

---

## 🚀 Tech Stack

| Technology | Usage |
|---|---|
| Node.js + Express | REST API framework |
| Prisma ORM | Database ORM |
| PostgreSQL (Supabase) | Cloud database |
| Docker + docker-compose | Containerization |
| JWT + bcryptjs | Authentication & Security |
| Swagger UI | API Documentation |

---

## ✨ Features

- ✅ JWT Authentication (Register & Login)
- ✅ Full CRUD for Employee Management
- ✅ Prisma ORM with PostgreSQL
- ✅ Dockerized application
- ✅ Swagger API documentation
- ✅ Secure password hashing with bcrypt
- ✅ Environment variable configuration

---

## 📁 Project Structure
```
employee-management-api/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── swagger.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── employeeController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── employeeRoutes.js
│   └── index.js
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v20+
- Docker Desktop
- PostgreSQL or Supabase account

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/employee-management-api.git
cd employee-management-api
```

### 2. Setup environment variables
```bash
cp .env.example .env
```
Fill in your `.env`:
```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:6543/DB?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://USER:PASSWORD@HOST:5432/DB"
JWT_SECRET="your_secret_key"
PORT=5000
```

### 3. Run with Docker
```bash
docker-compose up --build
```

### 4. Run without Docker
```bash
npm install
npx prisma db push
npm start
```

---

## 📖 API Documentation

Once running, open Swagger UI:

👉 **http://localhost:5000/api-docs**

---

## 🔐 Authentication Flow

1. **Register** → `POST /api/auth/register`
2. **Login** → `POST /api/auth/login` → copy the `token`
3. Click **Authorize** in Swagger UI → paste token
4. All Employee APIs are now accessible ✅

---

## 📋 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login & get JWT token |

### Employees (🔐 Protected)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get employee by ID |
| POST | `/api/employees` | Create employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |

---

## 🐳 Docker Commands
```bash
# Start
docker-compose up --build

# Stop
docker-compose down

# View logs
docker-compose logs -f
```

---

## 👨‍💻 Author

**Hari Haran**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- Email: hariram10121995@gmail.com