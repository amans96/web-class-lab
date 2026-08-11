//main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Social from "./social.jsx";

function ListFoods({Favourite}){
    return(
        <div>
            <h1>Foods</h1>
            <ul>
                <li>{Favourite}</li>
                <li>Chicken</li>
            </ul>
        </div>
    )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Social />
  </StrictMode>,
)