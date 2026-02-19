# 🎓 VelTech University Portal — Spring Boot Backend

## Tech Stack
- **Java 17** + **Spring Boot 3.2**
- **Spring Security** + **JWT Authentication**
- **Spring Data JPA** + **MySQL**
- **Lombok**, **Multipart File Upload**

---

## ⚙️ Setup Instructions

### 1. Install Prerequisites
- Java 17+
- Maven 3.8+
- MySQL 8+

### 2. Create MySQL Database
```sql
CREATE DATABASE university_portal;
```

### 3. Configure Database
Edit `src/main/resources/application.properties`:
```
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
```

### 4. Run the Application
```bash
mvn spring-boot:run
```
Server starts at: **http://localhost:8080**

---

## 🔌 API Endpoints

### Auth (Public)
| Method | URL | Description |
|--------|-----|-------------|
| POST | `/api/auth/register` | Register student or faculty |
| POST | `/api/auth/login` | Login and get JWT token |

**Register Body:**
```json
{ "name": "John", "email": "john@gmail.com", "password": "pass123", "role": "STUDENT" }
```
**Login Body:**
```json
{ "email": "john@gmail.com", "password": "pass123" }
```
**Login Response:**
```json
{ "token": "eyJ...", "role": "STUDENT", "name": "John", "email": "john@gmail.com" }
```

---

### Attendance (Faculty Only) 🔒
| Method | URL | Description |
|--------|-----|-------------|
| POST | `/api/attendance/mark` | Save attendance for a date |
| GET | `/api/attendance/date/{date}` | Get attendance by date (e.g. 2026-02-18) |
| GET | `/api/attendance/dates` | List all recorded dates |
| GET | `/api/attendance/student/{name}` | Get attendance by student name |

**Mark Attendance Body:**
```json
{
  "date": "2026-02-18",
  "records": [
    { "studentName": "Rahul", "status": "Present" },
    { "studentName": "Priya", "status": "Absent" }
  ]
}
```

---

### Assignments (Student/Faculty) 🔒
| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/assignments` | Get all assignments |
| POST | `/api/assignments/{id}/submit` | Submit assignment file (multipart) |
| GET | `/api/assignments/submissions/mine` | Get logged-in student's submissions |

---

### Dashboard (Faculty Only) 🔒
| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/dashboard/stats` | Get dashboard statistics |

---

## 🔐 Authentication
All protected endpoints require:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## 📁 Database Tables (Auto-created by JPA)
- `users` — stores students & faculty
- `assignments` — assignment list (seeded on startup)
- `attendance` — daily attendance records
- `submissions` — file submissions per student
