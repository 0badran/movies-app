import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-body-dark text-light">
      {/* Section: Social media */}
      <motion.section
        className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between p-4 border-top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left */}
        <motion.div
          className="me-5 d-none d-lg-block"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <span>Welcome you in my app</span>
        </motion.div>
        {/* Right */}
        <motion.div
          className="d-flex justify-content-center gap-4 mt-3 mt-lg-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { href: "https://www.facebook.com/0ahmedbadran", icon: "bi bi-facebook" },
            { href: "mailto:badran7299@gmail.com", icon: "bi bi-google" },
            { href: "https://www.linkedin.com/in/ahmedbadran72", icon: "bi bi-linkedin" },
            { href: "https://www.github.com/0badran", icon: "bi bi-github" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-reset"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <i className={link.icon} style={{ fontSize: "1.5rem" }} />
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* Section: Links */}
      <motion.section
        className="container text-center text-md-start mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="row mt-3">
          {/* About Us */}
          <motion.div
            className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h6 className="text-uppercase fw-bold mb-4">
              <p><i className="bi bi-gem" /> About us</p>
            </h6>
            <p>bla!bla!bla!</p>
          </motion.div>

          {/* Products */}
          <motion.div
            className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            {["Angular", "React", "Flask", "Nodejs"].map((product, index) => (
              <motion.p
                key={index}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <a href="#!" className="text-reset">{product}</a>
              </motion.p>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div
            className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="bi bi-house-door-fill me-3" /> Egypt, Mansoura</p>
            <p><i className="bi bi-envelope-fill me-3" /> ahmedbadran_@outlook.com</p>
            <p><i className="bi bi-phone-fill me-3" /> 01063806110</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Copyright */}
      <motion.div
        className="text-center p-4 text-bg-dark"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          This footer from MDB bootstrap
        </a>
      </motion.div>
    </footer>
  );
}

export default Footer;