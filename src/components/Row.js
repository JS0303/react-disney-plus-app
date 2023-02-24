import React from "react";
import axios from "../api/axios";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const response = await axios.get(fetchUrl);
    console.log("response", response);
    setMovies(response.data.results);
  };

  return <div>Row</div>;
};

export default Row;
