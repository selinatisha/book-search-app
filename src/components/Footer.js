import React from "react";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col-sm">
          <h3>
            <ul>
              <a href="about.html" className="link" title="Link to about page">
                About
              </a>
            </ul>
            <ul>
              <a
                href="contact.html"
                className="link"
                title="Link to contact page"
              >
                Contact
              </a>
            </ul>
            <ul>
              <a
                href="contact.html#FAQ"
                className="link"
                title="Link to FAQ section on contact page"
              >
                FAQ
              </a>
            </ul>
          </h3>
        </div>
        <div className="col-sm">
          <div className="follow-me">
            <a
              href="https://www.instagram.com/selina_studio2_/"
              target="_blank"
              rel="noreferrer"
              title="Instagram page"
            ></a>
            <a
              href="https://www.linkedin.com/in/selina-andersson-38835023b/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn profile"
            ></a>
            <a href="mailto:selinaandersson1@gmail.com" title="Email"></a>
          </div>
        </div>
        <a
          href="https://github.com/selinatisha/portfolio-website"
          className="open-source"
          title="Link to GitHub repository"
          rel="noreferrer"
          target="_blank"
        >
          Open Source
        </a>
      </div>
    </footer>
  );
}
export default Footer;
