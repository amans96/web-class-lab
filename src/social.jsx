//social.jsx
import Profile from "./profile.jsx";
import './social.css';

export default function Social(){
    return (
        <div className={"social"}>
            <Profile name={"Harry Kane"} email={"harrykane@gmail.com"} profile_picture={"https://ichef.bbci.co.uk/news/2048/cpsprodpb/8e53/live/5f993350-38f6-11ee-ba67-4973c23bf2d1.jpg"}/>
            <Profile name={"Lionel Messi"} email={"messi@gmail.com"} profile_picture={"https://assets.khelnow.com/news/uploads/2025/06/Lionel-Messi-Argentina-GettyImages-2177987340-1-scaled.jpg"} />
            <Profile name={"Cristiano Ronaldo"} email={"ronaldo@gmail.com"} profile_picture={"https://wallpapers.com/images/hd/cristiano-ronaldo-pictures-ihxnkv4161en8iyp.jpg"}/>
        </div>
    )
}