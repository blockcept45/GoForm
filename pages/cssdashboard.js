import { getSession, signOut } from "next-auth/react";

export default function cssdashboard({ user }) {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>MyApp</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Dashboard</li>
          <li style={styles.navItem}>Profile</li>
          <li style={styles.navItem}>Settings</li>
        </ul>
        <button onClick={() => signOut()} style={styles.logoutBtn}>Logout</button>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <h1 style={styles.welcome}>Welcome, {user.name} 👋</h1>
        {/* <div style={styles.profileCard}>
          <img src={user.image} alt="User" style={styles.profileImage} />
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        </div> */}
        <div style={styles.box}> 
          <div style={styles.box1}>
    <h4 style={styles.heading}>
     📘 1. Introduction to CSS
    </h4>
 <a href="https://docs.google.com/document/d/1MWkibhNB-ozIv36sqwi6mMfeE_H-CMfkpskPQgRG_8c/edit?tab=t.0#heading=h.sx9i1gzcxnnl" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
  </div>
        </div>
          <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🎨 2. CSS Selectors</h4> 
           <a href="https://docs.google.com/document/d/1mo75698lwuEbVGOxqU-uC4Q0uA_B1-wTy6Onc-RQ8EY/edit?tab=t.0#heading=h.44vz4b4ggo0k" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
          <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📏 3. CSS Colors, Units, and Values</h4>
           <a href="https://docs.google.com/document/d/1PIvdjw8WOO__vpHUy-YE0kpHHPKBvq_kgpISaJ0olak/edit?tab=t.0#heading=h.9iw87wcszxpp" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
          
            <div style={styles.box1}><h4 style={styles.heading}>🧱 4. CSS Box Model</h4>
           <a href="https://docs.google.com/document/d/14VTkcBZmcP3ongcpX16oN_95HJ8pTEJTcppvJoGhI7c/edit?tab=t.0#heading=h.hsurv9yynqrz" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>💅 5. Styling Text & Fonts</h4>
            <a href="https://docs.google.com/document/d/1uC5O8yZ1-bddDSmuI6yJjpdCSbNsuyX7_YqIKLCYo1Y/edit?tab=t.0#heading=h.uq2nbtbj6f2" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4  style={styles.heading}>🎯 6. CSS Backgrounds & Borders</h4>
           <a href="https://docs.google.com/document/d/1uC5O8yZ1-bddDSmuI6yJjpdCSbNsuyX7_YqIKLCYo1Y/edit?tab=t.0#heading=h.uq2nbtbj6f2" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📐 7. CSS Display and Positioning</h4>
            <a href="https://docs.google.com/document/d/1h8NcsX117XG7qGa6-Weue9YGntGWLltJ9Xl0A67ILHU/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📦 8. CSS Layout Techniques</h4>
            <a href="https://docs.google.com/document/d/1QR4hcKR4oz2Nubwjg84CUVLE2bXuIIISGMCjeTrmnRk/edit?tab=t.0#heading=h.ghkaiheqoqjz" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🧩 9. CSS Lists, Tables, Forms </h4>
          <a href="https://docs.google.com/document/d/1XKwt1XQ4HLebxRHPFCB2VRFeXunXThTV86VN4rrK6wk/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🌐 10. CSS Media Queries (Responsive Design)</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
      </div>
    </div>
  );
}

// Styles
const styles = {
     box: {
    padding: "10px",
    border: "1px solid #ccc",
    margin: "10px"
  },
  box1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  heading: {
    margin: 0
  },
  view: {
    color: "blue",
    cursor: "pointer"
  },
    // ---------------
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f7fa',
  },
  sidebar: {
    width: '220px',
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    flexGrow: 1,
  },
  navItem: {
    marginBottom: '15px',
    cursor: 'pointer',
    color: '#cbd5e1',
  },
  logoutBtn: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  content: {
    flex: 1,
    padding: '40px',
  },
  welcome: {
    fontSize: '28px',
    marginBottom: '30px',
    color: '#1e293b',
  },
  profileCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    maxWidth: '500px',
  },
  profileImage: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    objectFit: 'cover',
  }
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
}
