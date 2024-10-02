import MovieList from "./MovieList";
import NavBar from "./NavBar";
import { Component } from "react";
import { movies } from "./MovieData";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }
  addStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].star < 5) {
      movies[movieId].star += 0.5; // updated already but to be rerendered
    }

    this.setState({
      movies, // Rerendered movies ===// movies: movies,
    });
  };
  delStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].star > 0) {
      movies[movieId].star -= 0.5; // updated already but to be rerendered
    }

    this.setState({
      movies, // Rerendered movies ===// movies: movies,
    });
  };
  handlefav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].fav = !movies[movieId].fav;
    this.setState({
      movies,
    });
  };
  handlecart = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].isInCart = !movies[movieId].isInCart;
    if (movies[movieId].isInCart) {
      this.state.cartCount += 1;
    } else {
      this.state.cartCount -= 1;
    }
    this.setState({
      movies,
    });
  };
  render() {
    return (
      <>
        <NavBar cartCount={this.state.cartCount} />
        <MovieList
          movi={movies}
          adstr={this.addStars}
          delStars={this.delStars}
          handlefav={this.handlefav}
          handlecart={this.handlecart}
        />
      </>
    );
  }
}
