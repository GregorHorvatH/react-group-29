import { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import qs from 'query-string';

const query = {
  image_type: 'photo',
  orientation: 'horizontal',
  page: 3,
};

console.log('query:', `?${qs.stringify(query)}`);

const Movies = () => {
  const { pathname, search } = useLocation();
  const history = useHistory();
  const [list, setList] = useState([]);
  const [value, setValue] = useState(qs.parse(search)?.query || '');

  const handleChangeInput = (e) => {
    setValue(e.target.value);
    history.push({
      pathname,
      search: `?query=${e.target.value}`,
    });
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=d05f5f872f0f74667bcdb4179984cab2',
    )
      .then((res) => res.json())
      .then(({ results }) => {
        // console.log(results);
        setList(results);
      });
  }, []); // did mount

  return (
    <div className="movies">
      <h1>Movies</h1>

      <input type="text" onChange={handleChangeInput} value={value} />

      <ul>
        {list.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `${pathname}/${id}`,
                state: {
                  backUrl: pathname,
                  value,
                },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
