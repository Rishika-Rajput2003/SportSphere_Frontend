# SportSphere Frontend

Rishika Rajput - IIT2021117

## Description
This is the frontend application for the SportSphere project, a scheduling platform for sports facilities. Built with React and Vite, it offers a dynamic interface for scheduling, user management, and seamless booking functionality, delivering an intuitive user experience.

## Deployed Applications
- Frontend: https://sport-sphere-frontend.vercel.app/
- Backend: https://sportsphere-backend.onrender.com/
## Images
![image](https://github.com/user-attachments/assets/ffe361db-00a9-4137-9abf-346d457a3800)
![image](https://github.com/user-attachments/assets/cc3a3866-d698-475e-8fa4-afb92c010043)
![image](https://github.com/user-attachments/assets/ae4b9475-e026-415a-bc38-858aeaa88b83)
## Prerequisites
To run this project, you need to have the following installed:
- Node.js (version compatible with React 18.3.1)
- npm (comes with Node.js)

## Setup and Installation
1. Clone the repository:
   ```
   git clone [repo]
   ```
2. Navigate to the project directory:
   ```
   cd frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application
To run the application in development mode:

```
npm run dev
```

This will start the Vite development server.

## Building for Production
To build the application for production:

```
npm run build
```

This will generate a production-ready build in the `dist` directory.

## Linting
To run the linter:

```
npm run lint
```

## Preview Production Build
To preview the production build locally:

```
npm run preview
```

## Project Structure
The project consists of several key components:
- `BookingCard.jsx`: Displays individual booking information
- `BookingModal.jsx`: Handles the creation of new bookings
- `ScheduleTable.jsx`: Main component for displaying and managing the schedule
- `Sidebar.jsx`: Navigation component
- `Signup.jsx`: Handles new customer registration

## Technologies Used
- React 18.3.1
- Vite 5.4.8
- Tailwind CSS 3.4.14
- Axios for API requests
- React DatePicker for date selection
- React Toastify for notifications

## Assumptions and Limitations
- Build Tool: The project leverages Vite for faster builds and optimized configurations, differing from the typical Create React App setup. Familiarity with Vite’s configurations is recommended.
- Code Quality: ESLint is used for code linting. To enhance your development workflow, ensure you have compatible IDE plugins installed.
- Backend Integration: The application relies on a predefined data structure for centers, sports, and bookings provided by the backend API. Ensure consistency between frontend and backend data models for seamless operation.
