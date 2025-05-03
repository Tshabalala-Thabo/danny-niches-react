import React from 'react';
import './App.css';

function App() {
  return (
    <div className="maintenance-container" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h1 style={{ color: '#343a40', marginBottom: '20px' }}>
        Oops! Website Temporarily Unavailable
      </h1>
      <p style={{
        color: '#6c757d',
        fontSize: '1.2rem',
        maxWidth: '600px',
        lineHeight: '1.6'
      }}>
        We apologize for any inconvenience.
      </p>
    </div>
  );
}

export default App;