import React from 'react';

const GFooter: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-2">© 2025 Gaming App. All Rights Reserved.</p>
        <div>
          <a href="#" className="text-light me-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-light me-3">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-light me-3">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default GFooter;
