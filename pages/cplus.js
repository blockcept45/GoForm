import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";

export default function HtmlLogin() {
  const [showPopup, setShowPopup] = useState(true);

  // Optional: prevent scrolling when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  return (
    <div style={styles.container}>
      {showPopup ? (
        <div style={styles.popupOverlay}>
          <div style={styles.popup}>
            <h2>Welcome!</h2>
            <p>
              How to View<br />

Click the “Open HTML Slides” button on this page.<br />

If prompted, click Request access (use your  email).<br />

Access is approved within 5 minutes—refresh the page after that.<br />

In Slides, click Present → it will auto-advance every few seconds.<br />

Pause/next: use Space / → / ← keys.
              
              
              
            </p>
            <button style={styles.closeBtn} onClick={() => setShowPopup(false)}>
              Continue
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() =>
              signIn("google", { callbackUrl: "/cplusdashboard" })
            }
            style={styles.button}
          >
            <img
              src="https://techdocs.akamai.com/identity-cloud/img/social-login/identity-providers/iconfinder-new-google-favicon-682665.png"
              alt="Google Logo"
              style={styles.icon}
            />
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}

// Styles
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    backgroundColor: "#fff",
    color: "#444",
    fontSize: "16px",
    padding: "10px 20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  popup: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "400px",
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
  },
  closeBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
