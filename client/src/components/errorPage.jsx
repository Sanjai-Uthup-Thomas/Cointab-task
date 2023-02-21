import React from 'react';
import './errorPage.css';

function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error-title">Error</h1>
      <p className="error-message">Sorry, something went wrong.</p>
      <p className="error-message">Please try again later.</p>
    </div>
  );
}

export default ErrorPage;