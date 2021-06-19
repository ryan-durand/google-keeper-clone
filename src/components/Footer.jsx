import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Ryan Durand {year}</p>
    </footer>
  );
}

export default Footer;
