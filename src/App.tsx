import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'; // Added imports for ThemeProvider and CssBaseline
import './App.css';
import Profile from './Profile/ProfileComponent';
import LoginForm from './Login/LoginFormComponent';

function App() {
  // Define the dark theme here
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#84b900',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: '#ffffff',
        secondary: '#aaaaaa',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> 
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/profile" element={
          <Profile userAvatar="avatar.png" 
          username="John Doe" 
          numberOfCalories={2000} cosumedCalories={1200} />} />
        <Route path="/about" />
        <Route path="*" />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
