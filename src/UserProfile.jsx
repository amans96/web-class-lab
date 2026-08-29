import React, { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

   return (
<div>
   <form>
      <label>Enter your name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
      <label>Enter your email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
      <label>Enter your password:</label>
      <input type="password" /><br/><br/>
      <button  onClick={(e) => e.preventDefault()}>Submit</button>
   </form>
</div>
   
  );
}
