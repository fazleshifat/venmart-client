# 🛒 Venmart - Modern eCommerce Platform

![Venmart Screenshot](https://venmart.netlify.app/preview.png)

**Venmart** is a modern eCommerce platform where users can browse products, manage their cart, and place orders. Built with the MERN stack, it provides seamless performance, secure authentication, and a user-friendly interface. Firebase Authentication and JWT are implemented to ensure robust user access control.

---

## 🚀 Technologies Used

- **Frontend:** React.js, Tailwind CSS, DaisyUI, Framer Motion, Swiper.js
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication, JWT (JSON Web Token)
- **Deployment:** Netlify (Frontend), Render (Backend)
- **Other Tools:** Axios, React Hook Form, React Router DOM

---

## ✨ Key Features

- 🔐 Secure Authentication (Firebase + JWT)
- 🛍 Product Catalog with Category Filtering
- 🛒 Cart Management (Add, Remove, Quantity Control)
- 🧾 Order Placement System
- 📦 Backend CRUD for Products, Users & Cart Items
- 📱 Fully Responsive Design
- 🎨 Smooth Animations with Framer Motion
- 📸 Image Slider with Swiper.js
- 🔄 Realtime Form Validation (React Hook Form)

---

## 📦 Project Dependencies

### Frontend
- `react`
- `react-router-dom`
- `axios`
- `firebase`
- `framer-motion`
- `swiper`
- `react-hook-form`
- `daisyui`
- `tailwindcss`

### Backend
- `express`
- `cors`
- `dotenv`
- `mongodb`
- `firebase-admin`
- `jsonwebtoken`
- `body-parser`

---

## 🖥️ How to Run the Project Locally

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/venmart.git
cd venmart

cd client
npm install
npm run dev

cd server
npm install
# Create a .env file and configure the following:
# MONGODB_URI=
# FIREBASE_SERVICE_ACCOUNT=
# ACCESS_TOKEN_SECRET=
node index.js
