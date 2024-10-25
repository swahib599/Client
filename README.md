Client
# Cocktail Application Frontend

## Overview
A React-based web application for managing and discovering cocktail recipes. Users can browse cocktails, view detailed recipes, create accounts, and manage their own cocktail collections.

## Features
- User authentication (login/register)
- Cocktail browsing with search functionality
- Detailed cocktail views with ingredients and instructions
- Create, edit, and delete cocktails (authenticated users)
- Review system for cocktails
- Responsive design for mobile and desktop

## Technology Stack
- React
- React Router for navigation
- Context API for state management
- HTML5/CSS3
- JWT for authentication

## Project Structure
```
src/
├── components/
│   ├── Alert/
│   ├── Auth/
│   ├── Cocktail/
│   └── Nav/
├── context/
├── styles/
└── App.jsx
```

## Key Components
- `Alert.jsx`: Reusable alert component for notifications
- `LoginForm.jsx`/`RegisterForm.jsx`: Authentication forms
- `CocktailList.jsx`: Main cocktail browsing interface
- `CocktailDetail.jsx`: Detailed view of individual cocktails
- `CocktailCard.jsx`: Card component for cocktail previews
- `ReviewForm.jsx`/`ReviewList.jsx`: Cocktail review functionality

## Setup and Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create `.env` file
   - Add `REACT_APP_API_URL=http://localhost:5000/api`

4. Start the development server:
   ```bash
   npm start
   ```

## Available Scripts
- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Runs the test suite

## Environment Variables
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Authentication
The application uses JWT tokens for authentication:
- Tokens are stored in localStorage
- Protected routes require authentication
- AuthContext provides user state throughout the app

## Styling
- CSS variables for consistent theming
- Responsive design using CSS Grid and Flexbox
- Mobile-first approach

## Error Handling
- Comprehensive error handling with alert system
- Form validation for user inputs
- API error handling with user feedback

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
MIT License