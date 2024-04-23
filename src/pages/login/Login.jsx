import { useState } from "react"
import { useRef } from 'react';

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: ""
  });

  const handleValidation = (e) => {
    let ele = e.target;

    if (ele.name == "email") {
      setUser({ ...user, email: ele.value });
      setErrors({ ...errors, emailError: (ele.value.length == 0) ? "Email is required" : (/[a-z]{3,8}[0-9]@gmail|yahoo+.com/.test(ele.value)) ? "" : "Invalid Email" })
    }
    else if (ele.name == "password") {
      setUser({ ...user, password: ele.value });
      setErrors({ ...errors, passwordError: (ele.value.length == 0) ? "Password is required" : (ele.value.length < 8) ? "Password must have 8 characters or more" : "" })
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  const myRef = useRef(null);
  function showPassword() {
    myRef.current.type = (myRef.current.type == "password") ? "text" : "password";
  }


  return <div className="row vh-100" style={{ backgroundColor: "#F3EBE1", padding: "50px" }}>
    {/* login form */}
    <form className="col col-lg-5 col-sm-12" onSubmit={(e) => { handleSubmit(e) }} style={{ padding: "0 20px 0 20px", fontFamily: "-moz-initial" }}>
      <h1 className="display-5">Bla!Bla! <span className="text-danger">...Bla!</span></h1>
      <h1 className="mt-5 mb-3">Login</h1>
      <div className="form-floating mb-3">
        <input type="email" name="email" id="InputEmail" className="form-control border-0 border-bottom border-dark rounded-0" placeholder="" onChange={(e) => { handleValidation(e) }} value={user.email} />
        <label htmlFor="InputEmail" className="form-floating text-dark">Email address</label>
        <p className="text-danger">{errors.emailError}</p>
      </div>
      <div className="form-floating mb-3">
        <input type="password" name="password" id="InputPassword" className="form-control border-0 border-bottom border-dark rounded-0" placeholder="" ref={myRef} onChange={(e) => { handleValidation(e) }} value={user.password} />
        <label htmlFor="InputPassword" className="form-floating text-dark">Password</label>
        <p className="text-danger">{errors.passwordError}</p>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" onClick={() => { showPassword() }} style={{ backgroundColor: "#F3EBE1", color:"black" }} className="form-check-input border-1 border-dark rounded-0" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Show password</label>
      </div>
      <button type="submit" className="btn btn-danger w-100 rounded-0 mb-5">Submit</button>
      <figure>
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer mt-5">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </form>
    {/* image */}
    <section className="col col-lg-7 col-sm-12" style={{ backgroundImage: "url(/login_back.png)" }}></section>
  </div>
}



export default Login;