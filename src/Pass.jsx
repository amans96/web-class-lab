import React from "react";
export default function Pass(){
const names =[{id:1,name:"aman",age:4},
  {id:2,name:"chala",age:3},
  {id:3,name:"kebede",age:8}];


  return(<>
 {names.map(({id,name,age})=>(
  <div key={id}>
    <p>{name}</p>
    <p>{age}</p>
  </div>
 )
 )}

  </>)
}