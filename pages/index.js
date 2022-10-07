import React from 'react';
import Navbar from '../components/Navbar';

export const getStaticProps =async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props:{
      data,
    }
  }
}

const index = ({data}) => {
  return (
    <>
    {/* navbar  */}
    <Navbar/>
    
    
    {
      data.map((u)=>{
        return(
          <div key={u.id}>
            <h3>{u.name}</h3>
          </div>
        )
      })
    }
    

      {/* Home  */}

      {/* footer  */}



    </>
  )
}

export default index