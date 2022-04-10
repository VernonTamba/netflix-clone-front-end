import React, { useEffect, useState } from "react";
import "./Banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "../../axios";
import getMovies from "../../MoviesRequests";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const requestMovie = await axios.get(getMovies.fetchNetflixOriginals);
      setBannerMovie(
        requestMovie.data.results[
          Math.floor(Math.random() * requestMovie.data.results.length)
        ]
      );
      return requestMovie;
    };

    fetchMovie();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner--fadeTop" />
      <div className="banner__content">
        <h1>
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
        <p>{truncate(bannerMovie?.overview, 150)}</p>
        <button className="banner__buttonLeft">
          <PlayArrowIcon className="banner__buttonIcons" />
          Play
        </button>
        <button className="banner__buttonRight">
          <InfoOutlinedIcon className="banner__buttonIcons" />
          More Info
        </button>
      </div>
      <div className="banner--fadeBottom" />
    </div>
  );
};

export default Banner;
