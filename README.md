## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Getting Started

Follow the instructions below to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/2024-personal.git
   cd 2024-personal
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

To start the development server, run:
```bash
npm run dev
# or
yarn dev
```
This will start the Next.js development server on `http://localhost:3000`.

### Building for Production

To build the application for production, run:
```bash
npm run build
# or
yarn build
```
This will create an optimized production build of your application.

### Starting the Production Server

To start the production server, run:
```bash
npm start
# or
yarn start
```
This will start the Next.js server in production mode.

### Linting

To run ESLint to check for code quality issues, run:
```bash
npm run lint
# or
yarn lint
```

## Project Structure

- **`pages`**: Contains the application pages. Each file represents a route in the application.
- **`components`**: Contains the reusable UI components.
- **`public`**: Contains static assets such as images, fonts, etc.
- **`styles`**: Contains global CSS and Tailwind CSS configurations.

## Layout

The main layout of the site is defined in `layout.tsx`. This file sets up the global styles, metadata, and the overall structure of the site.
