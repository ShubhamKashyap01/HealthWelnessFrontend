import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import "./Login.scss"; // Import SCSS styles
import { useLoginUserMutation } from "@/services/authService";
import { setUser } from "@/features/authSlice";
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const response = await loginUser({ email, password }).unwrap();
            if (response.token) {
                const decodedToken: { id: string } = jwtDecode(response.token);
                console.log(decodedToken);
                dispatch(setUser({ token: response.token, id: decodedToken.id }));
                navigate("/dashboard");
            } else {
                setError("Token not found");
            }
        } catch (err) {
            setError("Invalid email or password");
            console.error(err);
        }
    };

    return (
        <div className="login-container">
            <div className="welcome">
                <h1>Welcome to Health & Wellness</h1>
                <p className="subtitle">Login to your account to get started</p>
            </div>
            <Card className="login-card">
                <h2>Login</h2>
                <p className="subtitle">Enter your email below to login to your account</p>

                {error && <p className="error">{error}</p>}

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Email</label>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="m@example.com" />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <Button type="submit" disabled={isLoading} className="login-btn">
                        {isLoading ? "Logging in..." : "Login"}
                    </Button>


                </form>

                <p className="signup-link">
                    Don't have an account? <a href="/register">Sign up</a>
                </p>
            </Card>
        </div>
    );
};

export default Login;
