import { getSession, signOut } from "next-auth/react";

export default function jsdashboard({ user }) {
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
     🟢1. Hello World
    </h4>
 <a href="https://docs.google.com/document/d/1bIIsaopUkuqhNoQ59AN8qTGLPvorPeoCxwiGONL9nng/edit?tab=t.0#heading=h.lekebhdva41p" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
  </div>
        </div>
          <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 2. Add Two Numbers</h4> 
           <a href="https://docs.google.com/document/d/1cUOFmmk9B7PnF9cZWmg3bfWOso3hSrAWn3OHnxq7QFA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
          <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🔵 3. Check Even or Odd</h4>
           <a href="https://docs.google.com/document/d/1Oqp18lhynAjpPF7kaMmTxT-7eI0yXqitBz4Xo0BGAT4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
          
            <div style={styles.box1}><h4 style={styles.heading}>🟣4. Find Maximum of Two Numbers</h4>
           <a href="https://docs.google.com/document/d/1ausoEVKoN5TI1KsotMf8wOZ0uwRIy4uusI1VKF9W2Xc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟠 5. Print Numbers 1 to 10</h4>
            <a href="https://docs.google.com/document/d/1TrOD2tn-dgluV4ECI1UmH-mqQN5uFXb6WlSenAusNRQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
          <div style={styles.box}> 
            <div style={styles.box1}><h4  style={styles.heading}>🔵 Pseudocode_Test-1</h4>
           <a href="https://blockcept45.github.io/sudomcq1-5/" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4  style={styles.heading}>🔵 6. Sum of First N Natural Numbers</h4>
           <a href="https://docs.google.com/document/d/1jcYFIrVmkwcCWHZ5OSVRgcY5WhUUTh_qbGCuAAuj2YM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 7. Reverse a Numbers</h4>
            <a href="https://docs.google.com/document/d/1c7yiPbXIVkI57yFxE5KROlcV9wuI86kNa8waYmDsi10/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🔴 8. Find Factorial of a Number</h4>
            <a href="https://docs.google.com/document/d/1OIWfaHRCWINji2LHyOhNColEdxtcF5fj4cOkcx5pQPg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟢 9. Check Prime Number</h4>
          <a href="https://docs.google.com/document/d/1LXhAQ1Tx7hTBCohDQ4mFqRrWojfjvgknCQwqoHbwsfg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
        
        <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟣 10. Fibonacci Series up to N Terms</h4>
            <a href="https://docs.google.com/document/d/1LWTDTCEDU7ouZ2zph9bCB-mTKslCwHUUXKW910GeHsU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4  style={styles.heading}>🔵 Pseudocode_Test-2</h4>
           <a href="https://blockcept45.github.io/sudomcq_5-10/" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         {/* <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟠 11. Find Smallest of Three Numbers</h4>
            <a href="https://docs.google.com/document/d/1nVbGk5lcunKQc95ol5avPP8Tvo9quDYsd-lIEuITDao/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🔵 12. Calculate Simple Interest</h4>
            <a href="https://docs.google.com/document/d/1bQ-AZycuaADp9FvxwELe-z_wk7MGaKB1G01vLUbb_1U/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 13. Calculate Area of Circle</h4>
            <a href="https://docs.google.com/document/d/1kWZCYlRtS08ScV_gc51wDMXg61VlllRR3FZjmvI7cA0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟣 14. Swap Two Numbers (using temp)</h4>
            <a href="https://docs.google.com/document/d/1rp7kTHrw37YXb9VPxMeTHyhFn772G1AnJUg73AkBciM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟠 15. Swap Two Numbers (without temp)</h4>
            <a href="https://docs.google.com/document/d/1sZNgDy_LgoMHlDpUf0x9YuVOK49O9GyRFD2jaIVccNc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🔵 16. Check Positive, Negative or Zero</h4>
            <a href="https://docs.google.com/document/d/1Oc5k1la62WJUO9YuG9nf_EKJJeli7thto5BKjS9fy48/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟢 17. Count Digits in a Number</h4>
            <a href="https://docs.google.com/document/d/1PMpDVY2tvpU-WYiqMW4tb4FQ5AezBT5jIneaAyBWrAI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟣 18. Find Sum of Digits</h4>
            <a href="https://docs.google.com/document/d/1rhHexTsaWE65DLnjy48beib1sjA5DDaOC8bTvdsO-og/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟠 19. Check Palindrome Number</h4>
            <a href="https://docs.google.com/document/d/1TqFnU635tdzYdzISLZSCAgksD2V6bE9yn2PdA7no_hA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🔴 20. Print Multiplication Table</h4>
            <a href="https://docs.google.com/document/d/1YN6cuf2VhEv0qIXW2rmfFfM1qZNsxgZ_h8jCOmK7SMw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 22. Find Least Common Multiple (LCM)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 23. Check Leap Year</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 24. Find Power of a Number</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 25. Print ASCII Values of A–Z</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 26. Count Vowels in a String</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 27. Reverse a String</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 28. Check Palindrome String</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 29. Find Largest Element in an Array</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 30. Find Sum of Array Elements</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div> <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div>
         <div style={styles.box}> 
            <div style={styles.box1}><h4 style={styles.heading}>🟡 21. Find Greatest Common Divisor (GCD)</h4>
            <a href="https://docs.google.com/document/d/1VcCCDCrrWuz-myDrHWRps0vQxE9tFV85NdjkYm5LO14/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <span style={styles.view}>Click</span>
</a>
            </div>
        </div> */}
         
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
