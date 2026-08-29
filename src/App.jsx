import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import UserProfile from "./UserProfile.jsx";

function App() {
    const [name, setName] = useState("abc");
    const [islogged, setIslogged] = useState(false);
    const [isON, setIsON] = useState(false);

    function Login() {
        setIslogged(true);
        setName("abc");
    }

    function Logout() {
        setIslogged(false);
        setName("user x");
    }

    return (
        <div 
            style={{ 
        
                backgroundColor: isON ? "#222222" : "#ffffff", 
                color: isON ? "#ffffff" : "#000000",
                minHeight: "100vh", 
                width: "100vw",
                padding: "20px"
            }}
        >
            {islogged ? (
                <>
                    <p>Welcome {name}</p>
                    <button onClick={Logout}>Logout</button>
                </>
            ) : (
                <>
                    <p>user please login </p>
                  <UserProfile/>
                </>
            )}
            
            <hr style={{ borderColor: isON ? "#444" : "#ccc", margin: "20px 0" }} />
            
            <div>
                <button onClick={() => setIsON(!isON)}>
                    {isON ? "Dark Mode ON " : "Light Mode OFF "} 
                </button>
            </div>
        </div>
    );
}

export default App;
