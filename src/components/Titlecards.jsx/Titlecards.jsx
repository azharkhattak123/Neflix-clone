import React, { useEffect, useRef, useState } from "react";
import "./Titlecards.css";
import { Link } from "react-router";

const Titlecards = (props) => {
  const { title, category } = props;
  const [movieData, setMovieData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRlMWRlNjI5YjU1ZTQzMmNkOWUxYjIwMWU5NmY1NSIsIm5iZiI6MTczNTU1MzU1Mi4wNzgsInN1YiI6IjY3NzI3MjEwNWYxYzRmYTQ3MzYxNzViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CgYOKPRd9_2g1NUrHtpQvhz3bWp6rViadZg-Zb8TEp8",
    },
  };

  const handleScroll = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setMovieData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleScroll);
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cards-list" ref={cardsRef}>
        {movieData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Titlecards;
