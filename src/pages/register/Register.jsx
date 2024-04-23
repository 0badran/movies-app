import { useForm } from "react-hook-form";


function Register() {

  const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: "onChange" });
  return <>
    <form className="w-50 m-auto mt-5" onSubmit={handleSubmit()}>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label text-light">Name</label>
        <input type="text" name="name" className="form-control" id="exampleInputName" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail" className="form-label text-light">Email</label>
        <input {...register("email", { required: true, pattern: /[a-z]{3,8}[0-9]@gmail|yahoo+.com/ })} type="email" className="form-control" id="exampleInputEmail" />
        {errors.email && <p className="text-danger">Invalid Email</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputUsername" className="form-label text-light">Username</label>
        <input {...register("username", { required: true, pattern: /^\S+$/ })} type="text" className="form-control" id="exampleInputUsername" />
        {errors.username && <p className="text-danger">Username No Have Any Spaces</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
        <input {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{8,20}$/ })} type="text" className="form-control" id="exampleInputPassword1" />
        {errors.password && <p className="text-danger">Password Invalid</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword2" className="form-label text-light">Confirm Password</label>
        <input {...register("password2", { required: true })} type="password" className="form-control" id="exampleInputPassword2" />
        <p className="text-danger">{(errors.password2) ? "Is Required" : (watch("password") !== watch("password2")) ? "No Matches" : ""}</p>
      </div>
      <button type="submit" className="btn btn-outline-light rounded-0">Submit</button>
    </form>
  </>
}

export default Register