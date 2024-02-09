import Link from 'next/link';
import React from 'react';

const Error404 = () => {
  return (
    <div className="Error404-container">
      <div className="Error404-text">
        <h1>404</h1>
        <h2>OOPS! PAGE NOT FOUND</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed, name changed or is temporarily unavailable
        </p>
        <Link href="./">Back to HomePage</Link>
      </div>
    </div>
  );
};

export default Error404;
