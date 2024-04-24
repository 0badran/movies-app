

function Footer() {
  return (
    // <!-- Footer -->
    <footer className="text-center text-lg-start bg-body-dark text-light">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between mt-3 p-4 border-top">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Welcome you in my app</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="https://www.facebook.com/0ahmedbadran" className="me-4 text-reset">
            <i className="bi bi-facebook" />
          </a>
          <a href="mailto:badran7299@gmail.com" className="me-4 text-reset">
            <i className="bi bi-google" />
          </a>
          <a href="https://www.linkedin.com/in/ahmedbadran72" className="me-4 text-reset">
            <i className="bi bi-linkedin" />
          </a>
          <a href="https://www.github.com/0badran" className="me-4 text-reset">
            <i className="bi bi-github" ></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <p><i className="bi bi-gem"></i> About us</p>
              </h6>
              <p>
                bla!bla!bla!
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" className="text-reset">React</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Flask</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Nodejs</a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="bi bi-house-door-fill me-3" /> Egypt, Mansoura</p>
              <p>
                <i className="bi bi-envelope-fill me-3" />
                ahmedbadran_@outlook.com
              </p>
              <p><i className="bi bi-phone-fill me-3" /> 01063806110</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div className="text-center p-4 text-bg-dark">
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">This footer from MDB bootstrap</a>
      </div>
      {/* Copyright */}
    </footer>

    // <!-- Footer -->
  )
}

export default Footer
