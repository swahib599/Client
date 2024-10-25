
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Nav from './Components/Nav/Nav';  

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Nav />
        <main className="main-content">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;