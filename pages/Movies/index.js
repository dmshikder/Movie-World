import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";

export const getStaticProps = async () => {
  const res = await fetch("https://movie-task.vercel.app/api/popular?page=1");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
//   console.log(data.data.results);
  const newData = data.data.results;
  return (
    
    <div className="flex flex-row flex-wrap gap-8 items-center justify-center py-10 ">
        <Navbar/>
      {newData.map((u) => {
        return (
          <div key={u.id}>
            <div className="card w-96 glass ">
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/original/${u.backdrop_path}`}
                  alt="car!"
                />
              </figure>
              <div className="card-body cursor-pointer">
                <Link href={`/Movies/${u.id}`}>
                  <h2>{u.title}</h2>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default index;
