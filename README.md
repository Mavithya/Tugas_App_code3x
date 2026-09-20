# Firebase App with React & TypeScript

A web application built with React and TypeScript that demonstrates user authentication using Firebase. Users can sign in with their Google account and view their profile information on a dedicated token page.

## Features

- **Google Authentication**: Secure sign-in using Google OAuth
- **User Profile**: Display user details (email, profile picture) after successful login
- **Token Page**: Dedicated page to view session tokens (both client-side and Firebase generated)
- **Responsive Design**: Modern UI with Material UI components


## Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Firebase Project**: A Firebase project with **Google Sign-In** enabled
- **Firebase CLI** (optional, for deployment): `npm install -g firebase-tools`

## Installation

1. **Clone the repository** (or copy the project files)
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Firebase**:
   - Create a Firebase project if you don't have one
   - Enable **Google Sign-In** in the Firebase Console Authentication section
   - Download the Firebase configuration file:
     ```bash
     firebase login
     firebase projects:list
     firebase use <your-project-id>
     ```
   - Copy the Firebase configuration to `tugas-login_page/src/services/firebase.ts`
     ```typescript
     // tugas-login_page/src/services/firebase.ts
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_BUCKET.firebasestorage.app",
       messagingSenderId: "YOUR_SENDER_ID",
       appId: "YOUR_APP_ID"
     };
     ```

## Usage

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build

Build the application for production:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Firebase Hosting

Deploy the application to Firebase Hosting:

```bash
npm run deploy
```

This command will build the app and deploy the contents of the `dist/` directory to your Firebase project.

## Project Structure

```
Tugas_App_code3x/
├── tugas-login_page/
│   ├── public/
│   │   ├── favicon.svg            # App favicon
│   │   └── illustration.svg       # Illustration asset
│   ├── src/
│   │   ├── assets/                # Static assets (images, fonts, etc.)
│   │   ├── components/
│   │   │   ├── IllustrationPanel.tsx  # Left-side illustration panel
│   │   │   ├── LoginForm.tsx          # Email/password login form
│   │   │   └── SocialButtons.tsx      # Google sign-in button component
│   │   ├── pages/
│   │   │   ├── LoginPage.tsx          # Main login page
│   │   │   └── TokenPage.tsx          # Token/profile display page
│   │   ├── routes/
│   │   │   └── AppRoutes.tsx          # React Router route definitions
│   │   ├── services/
│   │   │   ├── auth.ts                # Firebase authentication functions
│   │   │   └── firebase.ts            # Firebase app initialisation & config
│   │   ├── App.css                    # Global app styles
│   │   ├── App.tsx                    # Root React component
│   │   ├── index.css                  # Base CSS reset / global styles
│   │   └── main.tsx                   # React entry point
│   ├── .env                           # Environment variables (not committed)
│   ├── .firebaserc                    # Firebase project alias config
│   ├── .gitignore
│   ├── eslint.config.js               # ESLint configuration
│   ├── firebase.json                  # Firebase Hosting configuration
│   ├── index.html                     # Main HTML entry (Vite)
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts                 # Vite build configuration
└── README.md
```

## Environment Variables

VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

## License

MIT