import { useState } from "react"
import { useRef } from 'react';
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/user";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: ""
  });

  const handleValidation = (e) => {
    const ele = e.target;
    if (ele.name == "email") {
      setForm({ ...form, email: ele.value });
      setErrors({ ...errors, emailError: (ele.value.length == 0) ? "Username is required" : (/^[a-zA-Z0-9._%+-]{5,}$/.test(ele.value)) ? "" : "Username at latest 5 characters" })
    }
    else if (ele.name == "password") {
      setForm({ ...form, password: ele.value });
      setErrors({ ...errors, passwordError: (ele.value.length == 0) ? "Password is required" : (ele.value.length < 8) ? "Password must have 8 characters or more" : "" })
    }
  };

  function handleSubmit() {
    dispatch(setUser(form));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  }

  const myRef = useRef(null);
  function showPassword() {
    myRef.current.type = (myRef.current.type == "password") ? "text" : "password";
  }


  return <div className="row vh-100" style={{ backgroundColor: "#F3EBE1", padding: "30px" }}>
    {/* login form */}
    <form className="col-12 col-md-5" onSubmit={(e) => { handleSubmit(e.preventDefault()); }} style={{ padding: "0 20px 0 20px", fontFamily: "-moz-initial" }}>
      <h1 className="display-5">Bla!Bla! <span className="text-danger">...Bla!</span></h1>
      <h1 className="mt-5 mb-3">Login</h1>
      <div className="form-floating mb-3">
        <input type="text" required name="email" id="InputEmail" autoComplete="off" autoFocus className="form-control border-0 border-bottom border-dark rounded-0" placeholder="" onChange={(e) => { handleValidation(e) }} value={form.email} />
        <label htmlFor="InputEmail" className="form-floating text-dark">Username</label>
        <p className="text-danger">{errors.emailError}</p>
      </div>
      <div className="form-floating mb-3">
        <input type="password" required name="password" id="InputPassword" className="form-control border-0 border-bottom border-dark rounded-0" placeholder="" ref={myRef} onChange={(e) => { handleValidation(e) }} value={form.password} />
        <label htmlFor="InputPassword" className="form-floating text-dark">Password</label>
        <p className="text-danger">{errors.passwordError}</p>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" onClick={() => { showPassword() }} style={{ backgroundColor: "#F3EBE1", color: "black" }} className="form-check-input border-1 border-dark rounded-0" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Show password</label>
      </div>
      <button type="submit" className="btn btn-danger w-100 rounded-0 mb-md-5">
        {
          loading ? <><span className="spinner-grow spinner-grow-sm" aria-hidden="true" />
            <span role="status"> Loading...</span></> : <span role="status">Submit</span>
        }
      </button>
      <figure>
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer m-0 mt-md-5">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </form>
    {/* image */}
    <section className="col d-none d-md-block" style={{ backgroundImage: "url(/login_back.png)" }}></section>
  </div>
}



export default Login;