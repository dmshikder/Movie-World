import React from 'react';


export const getStaticPaths =async()=>{
    const res = await fetch('https://movie-task.vercel.app/api/popular?page=1');

    const data = await res.json();

    const paths = data.data.results.map((curElem)=>{
        return {
            params:{
                movieid: curElem.id.toString()
            },
        }
    })

    return{
        paths,
        fallback:false,
    }
}


export const getStaticProps = async (context) => {
    const ids = context.params.movieid;
    const res = await fetch(`https://movie-task.vercel.app/api/movie?movieId=${ids}`);
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  };

const moviedetails = ({data}) => {
  console.log(data.data);
  
  const newData = data.data;
  return (
    <>
      
          <div key={newData.id}>
            <h3>{newData.title}</h3>
          </div>
        
      
    </>
  )
}

export default moviedetails