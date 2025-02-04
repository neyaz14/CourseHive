
# 📚 CourseHive  

**CourseHive** is an online learning marketplace where users can buy and sell courses. The platform provides role-based functionalities for admins, teachers, and students, ensuring a secure and responsive learning environment.  

🚀 Live Demo: [CourseHive](https://simple-firebase-4327b.web.app)  

🔗 **Repositories:**  
- **Client Side**: [GitHub Repo](https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-neyaz14)  
- **Server Side**: [GitHub Repo](https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-neyaz14)  

---

## 📖 Table of Contents  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Key Functionalities](#key-functionalities)  
- [User Roles](#user-roles)  
- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  

---

## ✨ Features  
✔️ **Responsive Design** – Works seamlessly on all devices.  
✔️ **Role-Based Routing** – Different roles for admins, teachers, and students.  
✔️ **Course Management** – Teachers submit courses for approval by admins.  
✔️ **Stripe Payment Integration** – Secure payment system for course purchases.  
✔️ **Personalized Dashboards** – Users can manage their activities easily.  

---

## 🛠 Technologies Used  

### **Frontend:**  
- HTML, CSS, Tailwind CSS  
- React, React Router  

### **Backend:**  
- Firebase (Authentication)  
- JWT (Token-based authentication)  
- Express.js, MongoDB  

### **Payment Integration:**  
- Stripe for secure transactions  

---

## 🔑 Key Functionalities  

### **📌 Role-Based System**  
🔹 **Admin**  
- Approves courses submitted by teachers.  
- Manages users and course content.  

🔹 **Teacher**  
- Applies for a teacher role.  
- Posts and manages courses after admin approval.  
- Views launched courses and enrolled students.  

🔹 **Student**  
- Registers and logs in automatically.  
- Purchases courses using Stripe.  
- Views enrolled courses and manages profile.  

---

## 🛠 Installation  

1️⃣ Clone the repositories:  
```bash
git clone https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-neyaz14.git
git clone https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-neyaz14.git
```

2️⃣ Install dependencies:  
```bash
# Client Side
cd b10a12-client-side-neyaz14
npm install

# Server Side
cd ../b10a12-server-side-neyaz14
npm install
```

3️⃣ Set up environment variables:  
- Create a `.env` file in the server directory and add:  
  ```env
  PORT=5000
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  STRIPE_SECRET_KEY=your_stripe_key
  ```

4️⃣ Start the development servers:  
```bash
# Client Side
npm run dev

# Server Side
npm start
```

---

## 🚀 Usage  

👨‍💼 **Admin**: Log in to manage courses and users.  
👨‍🏫 **Teacher**: Apply for a role, post courses, and track student engagement.  
👨‍🎓 **Student**: Browse, purchase courses, and access them via the dashboard.  

---

## 📜 License  
This project is licensed under the **MIT License**.  

---

Let me know if you'd like any modifications or additional details! 🚀
