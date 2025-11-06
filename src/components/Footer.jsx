const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__brand">
          <span className="logo">Aegis</span>
          <p>Continuous security assurance for modern engineering teams.</p>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#value">Product</a>
          <a href="#showcase">Docs</a>
          <a href="#workflow">Support</a>
        </nav>
        <div className="footer__meta">
          <div className="footer__social">
            <a href="https://github.com" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="mailto:hello@aegis.io" aria-label="Email">
              Email
            </a>
          </div>
          <p className="footer__legal">
            © {year} Aegis Labs. By joining the list you consent to receive product communications. You can unsubscribe
            anytime.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
