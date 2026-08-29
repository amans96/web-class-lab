
import "./profile.css";

export default function Profile({ name, email, profile_picture }) {
    return (
        <article className="profile-card">

            <div className="image-wrapper">
                <img
                    src={profile_picture}
                    alt={`${name} profile`}
                    className="profile-picture"
                />
            </div>

            <div className="profile-details">
                <h2>{name}</h2>
                <span>{email}</span>

                <button className="connect-btn">
                    View Profile
                </button>
            </div>

        </article>
    );
}

