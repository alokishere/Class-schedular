# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


# ClassScheduler

A modern, responsive class scheduling web app for students and teachers. Built with React and Tailwind CSS, it features a clean UI, smooth animations, and intuitive navigation.

## Features
- **Landing Page**: Highlights the app's benefits, stats, and a call-to-action for sign up.
- **Login Screen**: Allows users to sign in to their dashboard. Includes hover effects and animations for a smooth experience.
- **Signup Screen**: Enables new users to create an account. Responsive for desktop and mobile, with animated transitions.
- **No Routing Required**: All screens (Home, Login, Signup) are rendered conditionally within the app, so navigation is instant and seamless.

## How Navigation Works
- **Login Button (Top Right)**: On the landing page, clicking the "Login" button opens the Login screen.
- **Sign Up Button (Landing Page)**: Enter your email and click "Get Started Free" to open the Signup screen (if implemented).
- **Forgot Password?**: On the Login screen, clicking "Forgot Password?" can be linked to a password recovery flow.
- **Signup Link (Login Screen)**: On the Login screen, clicking "Signup" opens the Signup screen.
- **Login Link (Signup Screen)**: On the Signup screen, clicking "Login" returns you to the Login screen.

## Code Structure
- `src/Home.jsx`: Main landing page with stats, hero section, and navigation bar.
- `src/Login.jsx`: Login form with animated card and transitions.
- `src/SingUp.jsx`: Signup form with full name, email, password, and confirm password fields.
- `src/App.jsx` & `src/main.jsx`: App entry point and rendering logic.
- `src/index.css`: Custom styles and Tailwind CSS setup.

## Technologies Used
- **React**: UI library for building interactive components.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **Vite**: Fast development server and build tool.

## Demo & Source
- **Live Site**: [https://class-five-blond.vercel.app/](https://class-five-blond.vercel.app/)
- **GitHub Repo**: [https://github.com/alokishere/Class-schedular](https://github.com/alokishere/Class-schedular)

## Getting Started
1. Clone the repo:
	```bash
	git clone https://github.com/alokishere/Class-schedular.git
	cd Class-schedular
	```
2. Install dependencies:
	```bash
	npm install
	```
3. Start the development server:
	```bash
	npm run dev
	```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization
- All UI elements are styled with Tailwind CSS and can be easily customized.
- Animations are handled via CSS keyframes and Tailwind transitions.
- To add new screens, create a new component and update the conditional rendering logic in `Home.jsx` or `App.jsx`.

## License
MIT

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
