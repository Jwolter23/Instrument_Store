import { useState } from "react";
import { RegisterUser } from "../services/Auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await RegisterUser({
      username: formValues.username,
      password: formValues.password,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
    });

    setFormValues({
      username: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      email: "",
    });
    navigate("/signin");
  };

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="firstname">First Name</label>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="John"
              value={formValues.firstName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last Name</label>
            <input
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Smith"
              value={formValues.lastName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="John Smith"
              value={formValues.username}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
