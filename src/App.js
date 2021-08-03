import { Route, Switch, NavLink as Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Page404 from './components/404';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  active: {
    color: '#FF0000',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Link exact to="/" activeClassName={classes.active}>
        home
      </Link>
      <br />
      <Link to="/about" activeClassName={classes.active}>
        about
      </Link>
      <br />
      <Link to="/movies" exact activeClassName={classes.active}>
        movies
      </Link>
      <br />
      <Link to="/movies/345" activeClassName={classes.active}>
        batman
      </Link>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

export default App;
