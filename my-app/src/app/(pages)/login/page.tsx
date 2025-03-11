import Link from 'next/link';
import './login.css';

const LoginPage = () => {
  return (
    <div className="login-container fade-in">
      <div className="login-card scale-in">
        <h1>Welcome Back</h1>
        <p className="subtitle">Sign in to continue to Virtual Gallery</p>
        
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="input-field" 
              placeholder="Enter your email"
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="input-field" 
              placeholder="Enter your password"
              required 
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <Link href="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn login-btn">
            Sign In
          </button>
        </form>

        <div className="register-prompt">
          <p>Don&apos;t have an account? <Link href="/register">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 