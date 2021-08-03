import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const MovieDetails = ({ match: { params } }) => {
  const [data, setData] = useState('');
  const { state } = useLocation();
  const history = useHistory();
  const { id } = params;

  const handleGoBack = () => {
    history.push({
      pathname: state?.backUrl || '/movies',
      search: `query=${state.value}`,
    });
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d05f5f872f0f74667bcdb4179984cab2`,
    )
      .then((res) => res.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="movie-details">
      <h1>{data.title}</h1>
      <p>{data.overview}</p>
      <button onClick={handleGoBack}>back</button>
    </div>
  );
};

export default MovieDetails;
