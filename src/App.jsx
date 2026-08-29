import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import UserProfile from "./UserProfile.jsx";
import Profile from "./profile.jsx";
import Social from "./social.jsx";
export default function App() {
    return(
        <div>
            <Profile/>
            <Social/>
        </div>
    );
}
