import { Component } from "react";
import "./Moviecard.css";
export default class Moviecard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers!",
      plot: "Supernatural powers",
      price: "rs. 199/-",
      rating: 8.9,
      stars: 0,
      fav: true,
      cart: true,
    };
    this.handlecart = this.handlecart.bind(this);
  }
  addOne = () => {
    if (this.state.stars >= 10) {
      return;
    }
    this.setState({
      stars: this.state.stars + 0.5,
    });
  };
  delOne = () => {
    if (this.state.stars === 0) {
      return;
    }
    this.setState({
      stars: this.state.stars - 0.5,
    });
  };
  handleFav() {
    this.setState({
      fav: !this.state.fav,
    });
  }
  handlecart() {
    this.setState({
      cart: !this.state.cart,
    });
  }
  render() {
    const { title, plot, price, rating, stars, fav, cart } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src="https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg"
              alt="Poster"
            />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot"> {plot} </div>
            <div className="price">{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                  alt="minus"
                  onClick={this.delOne}
                />
                <img
                  className="stars"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8s5vbqIuFNeCj3zMo5H5ZV9J6qORPSgtSriLkFTkMX3tgJKmW3LhaLF35Pg1Gv3M7Oo&usqp=CAU"
                  alt="star"
                />
                <img
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                  alt="add"
                  onClick={this.addOne}
                />
                <span>{stars}</span>
              </div>
              <button
                className={fav ? "favourite-btn" : "unfavourite-btn"}
                onClick={this.handleFav.bind(this)}
              >
                {fav ? "Favourite" : "Unfavourite"}
              </button>
              <button
                className={cart ? "cart-btn" : "unfavourite-btn"}
                onClick={this.handlecart}
              >
                {cart ? "Add to Cart" : "Remove from Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
