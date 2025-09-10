import { getSession, signOut } from "next-auth/react";

export default function cssdashboard({ user }) {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>MyApp</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
  <a href="https://forms.gle/8ZRaxvb4Pcsd3DYDA" style={{ textDecoration: "none", color: "inherit" }}>
    Data Science Link Upload
  </a>
</li>
          <li style={styles.navItem}>
  <a href="https://docs.google.com/spreadsheets/d/1Yzw6P2Jr3JyBYWSnzzbQp-bzRzUaW2mcUY4BYQmgz6E/edit?usp=sharing" style={{ textDecoration: "none", color: "inherit" }}>
    Assignment score Data Science
  </a>
</li>
 <li style={styles.navItem}>
  <a href="https://forms.gle/Ag18vehNL1t1ENoW8" style={{ textDecoration: "none", color: "inherit" }}>
    AIML Link Upload
  </a>
</li>
          <li style={styles.navItem}>
  <a href="https://docs.google.com/spreadsheets/d/1bXD6ZGQSUw8gET8MDHVojjBasPG1LZm5i_jsvs378AI/edit?usp=sharing" style={{ textDecoration: "none", color: "inherit" }}>
    Assignment score AIML
  </a>
</li>
 <li style={styles.navItem}>
  <a href="https://forms.gle/uA8xuYXWCsBmLMGa6" style={{ textDecoration: "none", color: "inherit" }}>
    EC/EX Link Upload
  </a>
</li>
          <li style={styles.navItem}>
  <a href="https://docs.google.com/spreadsheets/d/1JH7wClRBHZPIAalMXGCG-M2r4yS0mozDSh6JX1_F_8c/edit?usp=sharing" style={{ textDecoration: "none", color: "inherit" }}>
    Assignment score EC/EX
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
     📘1. Basics of C++ (Datatypes, Identifiers & Typecasting)
    </h4>
 <a href="https://saarthilms.com/cplus/1" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
  </div>
        </div>
          <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 2.Conditional Statements (if,if...else & nested if..else & switch)</h4> 
           <a href="https://saarthilms.com/cplus/2" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
          <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 3. Loops (while,do..while & for)</h4>
           <a href="https://saarthilms.com/cplus/3" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
          
            <div style={styles.box1}><h4 style={styles.heading}>📘 4. C++ Introduction of C++, cin, cout </h4>
           <a href="https://saarthilms.com/cplus/4" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 5. LeetCode Problem No 67,190,191</h4>
            <a href="https://saarthilms.com/cplus/5" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4  style={styles.heading}>📘 6.LeetCode Problem No 231,2595</h4>
           <a href="https://saarthilms.com/cplus/6" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 7.LeetCode Problem No 342,405</h4>
            <a href="https://saarthilms.com/cplus/7" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 8.LeetCode Problem no 29,78,287</h4>
            <a href="https://saarthilms.com/cplus/8" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 9.LeetCode Problem no 318,371 </h4>
          <a href="https://saarthilms.com/cplus/9" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 10.LeetCode Problem no 9,13,66</h4>
            <a href="https://saarthilms.com/cplus/10" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 11.LeetCode Problem no 1134,171</h4>
            <a href="https://saarthilms.com/cplus/11" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 12.LeetCode Problem no 231,258,268</h4>
            <a href="https://saarthilms.com/cplus/12" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 13.LeetCode Problem no 202,507,509</h4>
            <a href="https://saarthilms.com/cplus/13" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 14.LeetCode Problem no 7,12,279</h4>
            <a href="https://saarthilms.com/cplus/14" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 15.LeetCode Problem no 50,62</h4>
            <a href="https://saarthilms.com/cplus/15" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 16.Problem no 204,223</h4>
            <a href="https://saarthilms.com/cplus/16" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 17.LeetCode Problem no 1,35,66</h4>
            <a href="https://saarthilms.com/cplus/17" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 18. LeetCode Problem no 283,349</h4>
            <a href="https://saarthilms.com/cplus/18" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 19. LeetCode Problem no 31,33</h4>
            <a href="https://saarthilms.com/cplus/19" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 20.LeetCode Problem no 34,39</h4>
            <a href="https://saarthilms.com/cplus/20" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 21.LeetCode Problem no 217,414,287</h4>
            <a href="https://saarthilms.com/cplus/21" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 22.LeetCode Problem no 374,704,1351</h4>
            <a href="https://saarthilms.com/cplus/22" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 23.Array (i) Introduction of an Array,Types of an Array:-1-D Array</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 24.(ii)2-D Array</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 25.String:-Character Array, String built-in Functions(strlen(),strcmp(),strcat(), etc.)</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 26.Pointer Introduction of Pointer</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 27.Call by Value, Call by Reference</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 28.Oops, Features of Oops,Structure vs Class</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}> 📘 29.Class & Object:-
 Introduction of a Class & Object , Data Member & Member Function of a Class.
  
                      </h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 30. this pointer,Scope Resolution Operator(::) </h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 31. Constructor:- Introduction of a Constructor, Types of Constructor</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 32. Destructor</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 33. Array of Object in C++,Arrays inside Class</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 34. Intoduction of Inheritance</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 35. Types of Inheritance</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 36. Cons. & Desc with Inheritance</h4>
            <a href="https://docs.google.com/document/d/1zFKgxfDP-jd33P4ddraGWf3tubswYG8-HUuQfPT3vjQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>📘 37. Virtual Concept in C++</h4>
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
