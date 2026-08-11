
import './profile.css'

export default function Profile({name, email, profile_picture}){
    return (
        <div className="profile">
            <img className={"profile-picture"} src={profile_picture} alt={name}/>
            <div className={"additional-info"}>
                <p className={"name"}>{name}</p>
                <p className={"email"}>{email}</p>
            </div>
        </div>
    )
}