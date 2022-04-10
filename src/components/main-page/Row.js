import React, { useEffect, useState, useRef } from "react";
import "./Row.css";
import axios from "../../axios";
import { motion } from "framer-motion";

const Row = ({ title, fetchUrl, isPosterImage = false }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([{}]);
  const [width, setWidth] = useState(0);

  const imagesRow = useRef();

  useEffect(() => {
    const fetchMovies = async () => {
      const requestMovies = await axios.get(fetchUrl);
      setMovies(requestMovies.data.results);
      return requestMovies;
    };

    setWidth(imagesRow.current.scrollWidth - imagesRow.current.offsetWidth);

    fetchMovies();
  }, []);

  console.log(imagesRow.current.scrollWidth - imagesRow.current.offsetWidth);

  return (
    <div className="row">
      <h3>{title}</h3>
      <motion.div
        ref={imagesRow}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="row__imageRow"
      >
        {movies.map(
          (movie) =>
            // To ensure all the pictures to be shown
            ((isPosterImage && movie.poster_path) ||
              (!isPosterImage && movie.backdrop_path)) && (
              <motion.img
                transition={{ duration: 0.1 }}
                whileHover={{ scale: 1.3 }}
                key={movie.id}
                className={`row__image ${isPosterImage && "row__imagePoster"}`}
                src={`${baseUrl}${
                  isPosterImage ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.title || movie?.name || movie?.original_name}
              />
            )
        )}
      </motion.div>
    </div>
  );
};

export default Row;
