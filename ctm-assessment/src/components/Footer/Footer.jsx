import React from 'react';
import "./Footer.css";
import logo from "../../assets/ctm.svg";

const Footer = () => {
  const footerLinks = [
    { href: "https://www.comparethemarket.com/information/terms-and-conditions/?_gl=1*c3pb7a*_gcl_aw*R0NMLjE3MjM1ODkxNTguQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5CTGJLb1pDRVN6Tm5HYkVtanZMMVMyMThOZ2dOMC1Kb19jLUVybTdvQ2p6MVgyXzVtX1dDc2FBckxlRUFMd193Y0I.*_gcl_dc*R0NMLjE3MjM1ODkxNTguQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5CTGJLb1pDRVN6Tm5HYkVtanZMMVMyMThOZ2dOMC1Kb19jLUVybTdvQ2p6MVgyXzVtX1dDc2FBckxlRUFMd193Y0I.*_gcl_au*MTM5MjI2OTMzOS4xNzIzNTg1NzQ5*_ga*ODkzNDUxODQ1LjE3MjMxNDM4MTI.*_ga_EESV8NPC3W*MTcyNDAxMzQ4Mi43LjEuMTcyNDAxNTEyNy4wLjAuMA..", text: "Terms and conditions" },
    { href: "https://www.comparethemarket.com/information/privacy-policy/?_gl=1*nhsudi*_gcl_aw*R0NMLjE3MjM1ODkxNTguQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5CTGJLb1pDRVN6Tm5HYkVtanZMMVMyMThOZ2dOMC1Kb19jLUVybTdvQ2p6MVgyXzVtX1dDc2FBckxlRUFMd193Y0I.*_gcl_dc*R0NMLjE3MjM1ODkxNTguQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5CTGJLb1pDRVN6Tm5HYkVtanZMMVMyMThOZ2dOMC1Kb19jLUVybTdvQ2p6MVgyXzVtX1dDc2FBckxlRUFMd193Y0I.*_gcl_au*MTM5MjI2OTMzOS4xNzIzNTg1NzQ5*_ga*ODkzNDUxODQ1LjE3MjMxNDM4MTI.*_ga_EESV8NPC3W*MTcyNDAxMzQ4Mi43LjEuMTcyNDAxNTEyNy4wLjAuMA..", text: "Privacy policy" },
    { href: "https://www.comparethemarket.com/information/privacy-policy/privacy-policy-use-of-cookies/?_gl=1*nhsudi*_gcl_aw*R0NMLjE3MjM1ODkxNTguQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5CTGJLb1pDRVN6Tm5HYkVtanZMMVMyMThOZ2dOMC1Kb19jLUVybTdvQ2p6MVgyXzVtX1dDc2FBckxlRUFMd193Y0I.*_gcl_dc*R0NMLjE3MjM1ODkxNTguQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5CTGJLb1pDRVN6Tm5HYkVtanZMMVMyMThOZ2dOMC1Kb19jLUVybTdvQ2p6MVgyXzVtX1dDc2FBckxlRUFMd193Y0I.*_gcl_au*MTM5MjI2OTMzOS4xNzIzNTg1NzQ5*_ga*ODkzNDUxODQ1LjE3MjMxNDM4MTI.*_ga_EESV8NPC3W*MTcyNDAxMzQ4Mi43LjEuMTcyNDAxNTEyNy4wLjAuMA..", text: "Cookie policy" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content footer-details-container">
        <span>&copy; 2024 Compare the Market. All rights reserved.</span>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((link, index) => (
            <a key={index} target="_blank" rel="noopener noreferrer" href={link.href}>
              {link.text}
            </a>
          ))}
        </nav>
      </div>
      <img src={logo} alt="Compare the Market company logo" className="footer-logo" />
    </footer>
  );
};

export default Footer;
