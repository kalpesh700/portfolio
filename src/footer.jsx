import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className="text-lg font-semibold text-black">
            Copyright © {new Date().getFullYear()} - All rights reserved by Kalpesh Koli Ltd
          </p>
          <p className="text-black mt-2">Email: <a href="mailto:kalpeshkoliwork@gmail.com" className="text-red-500">kalpeshkoliwork@gmail.com</a></p>
          <p className="text-black">Phone: <a href="tel:+919765390297" className="text-red-500">+919765390297</a></p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
