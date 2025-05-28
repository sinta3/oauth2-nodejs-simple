# OAuth Google Login Node.js App

## Overview

This application is a Node.js backend service that implements Google OAuth 2.0 authentication using Passport.js. It allows users to log in using their Google accounts, managing user sessions securely. The app includes a basic user management mechanism via a `findOrCreateUser` service to handle user data from Google.

## Goals

- **Enable Google OAuth 2.0 Authentication:** Allow users to authenticate with their Google accounts.
- **User Session Management:** Serialize and deserialize user information securely for session handling.
- **User Data Handling:** Find or create users in the system based on Google profile information.
- **Maintain Clean Code Standards:** Use Prettier for code formatting to ensure maintainability and readability.
- **Error Handling:** Provide proper error handling in authentication flow, with simple log.

## Technologies Used

- **Node.js** with **Express.js** for server setup
- **Passport.js** for authentication middleware
- **passport-google-oauth20** strategy for Google OAuth 2.0
- **Prettier** for consistent code formatting

## Project Structure

- `config/passport.js` – Passport Google OAuth strategy setup
- `services/auth.js` – Logic to find or create a user based on Google profile data
- `routes/auth.js` – Authentication routes including `/auth/google`
- `config/database.js` – Database connection setup (assumed)
- `index.js` – Express app initialization and route mounting

## Usage

### Environment Variables

Set the following environment variables in your `.env` file or environment based on .env.example

### Running the App

1. Install dependencies:

```bash
npm install
```

2. Run the app:

```bash
npm start
```

3. Navigate to:

```
http://localhost:5000/auth/google
```

to initiate Google authentication.

### Code Quality

- Run Prettier formatting:

```bash
npx prettier --write "**/*.js"
```

## Notes

- The app currently uses sessionless authentication (`session: false` in Passport).
- User creation logic should be customized inside `findOrCreateUser` to fit your database schema.
- Prettier configured to enforce a consistent and maintainable code style based on Prettier’s formatting rules.