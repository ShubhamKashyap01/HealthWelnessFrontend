import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useRegisterUserMutation } from "../services/authApi";
import { useDispatch } from "react-redux";
// import { setUser } from "../features/authSlice";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import "./Register.scss"; // Import SCSS styles
import { useRegisterUserMutation } from "@/services/authService";
import { setUser } from "@/features/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await registerUser(formData).unwrap();
      dispatch(setUser({ email: formData.email, token: response.token }));
      navigate("/dashboard");
    } catch (err) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="register-container">
      <Card className="register-card">
        <h2>Sign Up</h2>
        <p className="subtitle">Create an account to get started</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Name</label>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="m@example.com" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <Button type="submit" disabled={isLoading} className="register-btn">
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>

          <Button variant="outline" className="google-btn">
            Sign up with Google
          </Button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </Card>
    </div>
  );
};

export default Register;
