import "./Moviecard.css";
export default function MovieCard(props) {
  const adstr = props.adstr;
  const delStars = props.delStars;
  const handlefav = props.handlefav;
  const handlecart = props.handlecart;
  const { title, plot, poster, rating, price, star, fav, isInCart } =
    props.movi;

  return (
    <div className="main">
      <div className="movie-card">
        <div className="left">
          <img src={poster} alt="Poster" />
        </div>

        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot} </div>
          <div className="price">{price}</div>
          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">
              <img
                className="str-btn"
                src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                alt="minus"
                onClick={() => delStars(props.movi)}
              />
              <img
                className="stars"
                src="https://cdn-icons-png.flaticon.com/512/477/477406.png"
                alt="star"
              />
              <img
                className="str-btn"
                src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                alt="add"
                onClick={() => adstr(props.movi)}
              />
              <span>{`   ${star}`}</span>
            </div>
            <button
              className={fav ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => handlefav(props.movi)}
            >
              {fav ? "Unfavourite" : "Favourite"}
            </button>
            <button
              className={isInCart ? "unfavourite-btn" : "cart-btn"}
              onClick={() => handlecart(props.movi)}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
