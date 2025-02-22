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
import { jwtDecode } from "jwt-decode";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: 'user',
  });
  const [error, setError] = useState("");
  const [isProvider, setIsProvider] = useState(false); // Checkbox state
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
      if (response.token) {
        const decodedToken: { id: string } = jwtDecode(response.token);
        console.log(decodedToken);
        dispatch(setUser({ token: response.token, id: decodedToken.id }));
        navigate("/dashboard");
      } else {
        setError("Token not found");
      }
    } catch (err) {
      console.log(err, "err");
      setError("Registration failed. Try again.");
    }
  };
  const handleRoleChange = () => {
    setIsProvider(!isProvider);
    setFormData({ ...formData, role: isProvider ? "user" : "provider" });
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

          <div className="checkbox-group">
            <input type="checkbox" id="providerCheckbox" checked={isProvider} onChange={handleRoleChange} />
            <label htmlFor="providerCheckbox">I am a service provider <br /> (Ignore this if you're normal user)</label>
          </div>
          <Button type="submit" disabled={isLoading} className="register-btn">
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/">Login</a>
        </p>
      </Card>
    </div>
  );
};

export default Register;
