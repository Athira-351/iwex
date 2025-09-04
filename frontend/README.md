# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Setup

# step 1
npm create vite@latest frontend
- Choose React as the framework
- Choose JavaScript
cd my-react-app
npm install
# step 2
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## install packages

Run the following following packages in project root(/frontend):
1. npm install react-router-dom  <!-- Routing between pages -->
2. npm install react-phone-input-2 <!-- Phone input with country codes -->
3. npm install framer-motion <!-- Animations and transitions -->
4. npm install lucide-react <!-- Lightweight icons -->
5. npm install react-icons <!-- Font Awesome & other icons -->
6. npm install react-slick slick-carousel <!-- Carousels and sliders -->
7. npm install tailwind-scrollbar-hide <!--scrollbar hide-->
8. npm install nodemailer
9. npm install crypto




# Backend
## Backend Folder Structure
1. controllers/: Logic for handling requests (e.g., user, blog, product).
2. models/: Database schemas (e.g., User.js, Blog.js).
3. routes/: API endpoints (e.g., auth.js, blog.js).
4. middleware/: Functions for authentication, error handling, etc.
5. config/: Database and environment configs.
6. app.js/server.js: Entry point, sets up Express and routes.

## How Backend Works Step by Step
Step 1: API Endpoints
    The backend exposes RESTful endpoints for each feature:
        /api/auth/login, /api/auth/signup for authentication.
        /api/products for products.
        /api/blogs and /api/blog/:id for blogs.
        /api/career and /api/career/:id for jobs.
        /api/enquiry for contact/enquiry forms.
        /api/faq, /api/privacy-policy, etc.
Step 2: Request Handling
    The frontend (React) sends HTTP requests (using fetch or axios) to these endpoints.
    Example: When you visit /products, the frontend fetches product data from /api/products.
Step 3: Controllers & Business Logic
    Each route calls a controller function.
    Controllers validate input, interact with the database, and return responses.
Step 4: Database Operations
    Controllers use models to read/write data from a database (MongoDB, MySQL, etc.).
    Example: ProductController.getAll() fetches all products.
Step 5: Authentication
    For login/signup, the backend verifies credentials, creates users, and returns JWT tokens.
    Protected routes check for valid tokens using middleware.
Step 6: Response to Frontend
    Backend sends JSON responses (data, errors, status).
    Frontend updates UI based on the response.

## Example Flow: User Login
    User submits login form on /login.
    Frontend sends POST request to /api/auth/login with credentials.
    Backend checks credentials, returns user info and JWT token.
    Frontend stores token/user in localStorage.
    Navbar and other components use this info to show user state.



