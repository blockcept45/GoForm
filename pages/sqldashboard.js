import { getSession, signOut } from "next-auth/react";

export default function reactjsdashboard({ user }) {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>MyApp</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Dashboard</li>
         <li style={styles.navItem}>
  <a href="https://forms.gle/qs6iJUo3MTkpS2Di8" style={{ textDecoration: "none", color: "inherit" }}>
    Google Docs Link Upload
  </a>
</li>

<li style={styles.navItem}>
  <a href="https://docs.google.com/spreadsheets/d/1k7SkB8VwOLi7WmKVyKAgmg9AFl72djWQaQSMWRf5SdM/edit?usp=sharing" style={{ textDecoration: "none", color: "inherit" }}>
    Assignment Score
  </a>
</li>
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
      ✅ 1. SQL Basics
    </h4>
 <a href="https://saarthilms.com/sql/1" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
  </div>
        </div>
          <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>✅ 2. Table Operations (DDL)</h4> 
           <a href="https://saarthilms.com/sql/2" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
          <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>✅ Upcomming Soon </h4>
            {/*3. Data Insertion (DML)  */}
           <a href="#" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
          
            <div style={styles.box1}><h4 style={styles.heading}>✅  Upcomming Soon</h4>
            {/* 4. Data Modification (DML) */}
           <a href="#" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>✅ Upcomming Soon </h4>
            {/* 5. Querying Data (DQL) */}
            <a href="#" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4  style={styles.heading}>✅ Upcomming Soon</h4>
            {/* 6. String Functions */}
           <a href="#" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>✅ Upcomming Soon</h4>
            {/* 7. Aggregate Functions */}
            <a href="#" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>✅ Upcomming Soon </h4>
            {/* 8. Subqueries */}
            <a href="#" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>✅ Upcomming Soon </h4>
            {/* 9. Grouping & Aggregation */}
          <a href="#" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>✅Upcomming Soon </h4>
            {/* 10. Sorting & Pagination */}
            <a href="#" target="_blank" rel="noopener noreferrer">
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
