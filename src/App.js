import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login'; 
import SignupPage from './pages/signup'; 
import DashboardPage from './pages/dashboard'; 


const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route for the Login page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route for the Signup page */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected route for the Dashboard page */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        {/* Redirect all unknown paths to the Login page */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
