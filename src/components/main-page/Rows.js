import React from "react";
import "./Rows.css";
import Row from "./Row";
import getMovies from "../../MoviesRequests";

const Rows = () => {
  return (
    <div className="rows">
      <Row title="Trending" fetchUrl={getMovies.fetchTrending} />
      <Row
        title="Netflix Originals"
        fetchUrl={getMovies.fetchNetflixOriginals}
        isPosterImage
      />
      <Row title="Top Rated" fetchUrl={getMovies.fetchTopRated} />
      <Row title="Action" fetchUrl={getMovies.fetchActionMovies} />
      <Row title="Adventure" fetchUrl={getMovies.fetchAdventureMovies} />
      <Row title="Sci-Fi" fetchUrl={getMovies.fetchScienceFictionMovies} />
      <Row title="Drama" fetchUrl={getMovies.fetchDramaMovies} />
      <Row title="Comedy" fetchUrl={getMovies.fetchComedyMovies} />
      <Row title="Romance" fetchUrl={getMovies.fetchRomanceMovies} />
      <Row title="Family" fetchUrl={getMovies.fetchFamilyMovies} />
      <Row title="Western" fetchUrl={getMovies.fetchWesternMovies} />
      <Row title="Fantasy" fetchUrl={getMovies.fetchFantasyMovies} />
      <Row title="Horror" fetchUrl={getMovies.fetchHorrorMovies} />
      <Row title="Thriller" fetchUrl={getMovies.fetchThrillerMovies} />
      <Row title="Mystery" fetchUrl={getMovies.fetchMysteryMovies} />
      <Row title="Crime" fetchUrl={getMovies.fetchCrimeMovies} />
      <Row title="War" fetchUrl={getMovies.fetchWarMovies} />
      <Row title="TV Movie" fetchUrl={getMovies.fetchTVMovie} />
      <Row title="History" fetchUrl={getMovies.fetchHistoryMovies} />
      <Row title="Music" fetchUrl={getMovies.fetchMusicMovies} />
      <Row title="Documentaries" fetchUrl={getMovies.fetchDocumentaries} />
    </div>
  );
};

export default Rows;
