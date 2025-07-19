#  MediCamp - Medical Camp Management System

MediCamp is a full-stack MERN application designed to streamline the organization and participation process for medical camps. Organizers can create, manage, and monitor camps, while participants can easily find, join, and provide feedback on them.

---

##  Live Site

 [Visit the Live Site](https://medicamp-ce784.web.app)
 [Visit the Server Repo](https://github.com/Programming-Hero-Web-Course4/b11a12-server-side-Ibtisumraian)

---

---

##  Tech Stack

- **Frontend:** React, React Router DOM, React Hook Form, Tailwind CSS, ShadCN/UI
- **State Management:** TanStack Query
- **Authentication:** Firebase Auth (Email + Social Login)
- **Data Fetching:** Axios (with secure interceptors)
- **Charts & Visualization:** Recharts
- **UI Enhancements:** SweetAlert2, React Toastify, Framer Motion
- **Payment Gateway:** Stripe
- **Animations:** AOS (Animate on Scroll)

---

##  Key Features

-  **Secure Role-Based Authentication** for Organizers & Participants
-  **Join Medical Camps** with detailed info and real-time participant count
-  **Interactive Dashboard Analytics** using Recharts
-  **Stripe Payment Integration** with transaction history
-  **Submit Feedback & Ratings** after attending a camp
-  **Organizer Tools** to Add, Edit, and Manage Camps
-  **Participant Panel** to manage registrations and payments
-  **Search, Sort, and Paginate** all data tables and camp listings
-  **Modern UI** with animations and responsive design
-  **Fully Responsive** on mobile, tablet, and desktop
-  **JWT-Protected Routes** for secure data access

---

##  Pages Overview

###  Home
- Banner slider with past camp highlights
- Popular camps section with Join options
- Dynamic feedback & rating showcase

###  Available Camps
- Filterable and sortable camp list
- Switchable layout view
- Detailed view for every camp

###  Organizer Dashboard
- Profile Management
- Add A Camp Form
- Manage & Update Camps
- View Registered Participants & Manage Payments

###  Participant Dashboard
- Analytics (Lifetime registered camps)
- Profile Update
- Registered Camp List with Payment, Feedback, Cancellation
- Payment History Table

###  Authentication
- Login/Register with Email or Google
- React Hook Form with validation

---


##  Dependencies

| Package                    | Version     | Description                                      |
|----------------------------|-------------|--------------------------------------------------|
| `@stripe/react-stripe-js`  | ^3.7.0      | React bindings for Stripe.js                     |
| `@stripe/stripe-js`        | ^7.5.0      | Load Stripe.js as a module                       |
| `@tailwindcss/vite`        | ^4.1.11     | Tailwind CSS plugin for Vite                     |
| `@tanstack/react-query`    | ^5.83.0     | Server state management for React                |
| `axios`                    | ^1.10.0     | Promise-based HTTP client                        |
| `firebase`                 | ^11.10.0    | Firebase services for authentication & storage   |
| `formik`                   | ^2.4.6      | Form state management library                    |
| `lucide-react`             | ^0.525.0    | Icon set for modern React projects               |
| `react`                    | ^19.1.0     | Core React library                               |
| `react-dom`                | ^19.1.0     | React DOM renderer                               |
| `react-hook-form`          | ^7.60.0     | Performant form library for React                |
| `react-icons`              | ^5.5.0      | Popular icon packs as React components           |
| `react-router`             | ^7.6.3      | Declarative routing for React                    |
| `react-toastify`           | ^11.0.5     | Toast notifications for React                    |
| `recharts`                 | ^3.1.0      | Charting library for React                       |
| `sweetalert2`              | ^11.22.2    | Stylish alerts and modals                        |
| `swiper`                   | ^11.2.10    | Touch slider/swiper component                    |
| `tailwindcss`              | ^4.1.11     | Utility-first CSS framework                      |
| `yup`                      | ^1.6.1      | Schema builder for form validation               |

---


##  Folder Structure 

<pre lang="markdown"><code>### Folder Structure ``` src/ ├── assets/ # Images, logos, static files ├── components/ # Reusable UI components ├── context/ # React Contexts (e.g., AuthProvider) ├── hooks/ # Custom hooks (e.g., useAxiosSecure) ├── layouts/ # Layouts like Main, DashboardLayout ├── pages/ # All pages │ ├── Home/ # Homepage │ ├── Camps/ # AvailableCamps, CampDetails │ ├── Auth/ # Login, Register, PrivateRoute │ ├── Dashboard/ # All dashboard pages │ │ ├── Organizer/ # Organizer dashboard features │ │ └── Participant/ # Participant dashboard features ├── routes/ # Route definitions ├── utils/ # Helper functions ├── App.jsx ├── main.jsx └── index.css ``` </code></pre>

---


## 👤 Author

**Ibtisum Raian**  
Email: ibtisumraian@gmail.com  
GitHub: [Ibtisumraian](https://github.com/Ibtisumraian)

---
