
import { useState } from "react";
import Profile from "./profile.jsx";
import "./social.css";

export default function Social() {
    const [search, setSearch] = useState("");

    
const users = [
    {
        name: "Rory McIlroy",
        email: "rory@gmail.com",
        profile_picture:
            "/assets/golf.png",
    },
    {
        name: "Tiger Woods",
        email: "tiger@gmail.com",
        profile_picture:
            "/assets/golf2.png",
    },
    {
        name: "Warren Buffett",
        email: "warren@gmail.com",
        profile_picture:
            "/assets/waren.png",
    },
    {
        name: "Elon Musk",
        email: "elon@gmail.com",
        profile_picture:
            "/assets/elon.jpg",
    },
    {
        name: "Phil Mickelson",
        email: "phil@gmail.com",
        profile_picture:
            "/assets/golf3.png",
    },
    {
        name: "Mark Cuban",
        email: "mark@gmail.com",
        profile_picture:
            "/assets/mark.png",
    },
];



    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="social-page">

            <section className="social-header">
                <div>
                    <h1>People</h1>
                    <p>Find and connect with your friends</p>
                </div>

                <div className="search-box">
                    <span>⌕</span>
                    <input
                        type="text"
                        placeholder="Search people..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </section>

            <section className="profiles-container">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <Profile
                            key={user.email}
                            name={user.name}
                            email={user.email}
                            profile_picture={user.profile_picture}
                        />
                    ))
                ) : (
                    <div className="no-results">
                        <h3>No people found</h3>
                        <p>Try searching with another name or email.</p>
                    </div>
                )}
            </section>

        </main>
    );
}

