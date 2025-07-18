# Login + Dashboard Application

A React application that implements a simple login system with a dashboard that displays Pokémon data from the PokeAPI.

## Features

- **Login Screen**: Dummy authentication that accepts any non-empty email and password
- **Dashboard**: Displays Pokémon data in a beautiful card layout
- **Authentication**: Uses localStorage to persist login status
- **Responsive Design**: Modern UI with hover effects and smooth transitions
- **Error Handling**: Proper error handling for API calls and form validation

## Requirements Met

✅ **Login Screen**
- Dummy authentication (accepts any non-empty email/password)
- Saves login status using localStorage
- Redirects to dashboard after successful login

✅ **Dashboard Screen**
- Fetches data from PokeAPI (Pokémon list)
- Displays items in a card layout
- Includes logout option that clears login state and returns to login screen

## Installation

1. Make sure you have Node.js installed on your system
2. Clone or download this project
3. Open a terminal in the project directory
4. Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Usage

1. **Login**: Enter any non-empty email and password to access the dashboard
2. **Dashboard**: View Pokémon data fetched from PokeAPI
3. **Logout**: Click the logout button to return to the login screen

## Project Structure

```
src/
├── components/
│   ├── Login.js          # Login component with form validation
│   └── Dashboard.js      # Dashboard component with Pokémon data
├── App.js                # Main app component with routing
├── App.css               # Styles for main app components
├── index.js              # Application entry point
└── index.css             # Global styles
```

## Technologies Used

- **React 18**: Modern React with hooks
- **React Router**: For navigation between screens
- **PokeAPI**: Public API for Pokémon data
- **CSS3**: Modern styling with flexbox and grid
- **localStorage**: For persisting login state

## API Integration

The application fetches data from the PokeAPI:
- Fetches the first 20 Pokémon
- Displays detailed information including:
  - Pokémon ID and name
  - Image
  - Types
  - Height and weight
  - Abilities

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development Notes

- The application uses dummy authentication for demonstration purposes
- Login state is persisted using localStorage
- The dashboard automatically fetches Pokémon data on component mount
- Error handling is implemented for both API calls and form validation
- The UI is responsive and works on different screen sizes

## Future Enhancements

- Add search functionality for Pokémon
- Implement pagination for more Pokémon
- Add detailed Pokémon view
- Implement real authentication system
- Add loading animations
- Implement offline support #   V a r i y a s - L a b s - P v t - L t d  
 