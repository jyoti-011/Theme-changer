Theme Changer Application
A React-based application that implements a global theme switcher using React Context API and localStorage. This allows users to toggle between light and dark themes, with their preferences persisted across sessions.

Features
1.Global Theme Switching
Users can switch between light, dark, solarized, retro themes seamlessly.
State Management with Context API
Theme state is managed globally using React Context.

2.Persistence with Local Storage
The user's selected theme is saved in localStorage and applied automatically when the app is reopened.

3.Customizable Theme Styles
Easily extendable to include more themes or customization options.

4.Responsive Design
Works perfectly across devices.

Tech Stack
React: For building the frontend UI.
Context API: For managing global theme state.
localStorage: For persisting theme preferences.

Setup Instructions
Prerequisites
Node.js and npm installed.
1. Download the zip file:
cd theme-changer-final
cd client

2. Install Dependencies
npm install

3. Run the Application
npm start
The app will be available at http://localhost:3000.

Usage
1.Switch Themes:
Click the theme toggle button to switch between light and dark themes.

2.Persistent Theme
Reload the application or open it in a new tab, and the previously selected theme will be applied automatically.
