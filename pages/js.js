import { signIn } from "next-auth/react";

export default function HtmlLogin() {
  return (
    <div style={styles.container}>
      <div >
        {/* <h1 style={styles.heading}>HTML Section Login</h1>
        <p style={styles.subtext}>Please login using your Google account to continue</p> */}
        <button onClick={() => signIn("google", { callbackUrl: "/jsdashboard" })} style={styles.button}>
          <img
            src="https://techdocs.akamai.com/identity-cloud/img/social-login/identity-providers/iconfinder-new-google-favicon-682665.png"
            alt="Google Logo"
            style={styles.icon}
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

// Styles
const styles = {
  body:{
   margin:'0',
   padding:'0',
  },
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '10px',
    color: '#333',
  },
  subtext: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#fff',
    color: '#444',
    fontSize: '16px',
    padding: '10px 20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  icon: {
    width: '20px',
    height: '20px',
  },
};
