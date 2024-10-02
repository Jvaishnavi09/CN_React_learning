import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => this.setState({ photos: data, loading: true }));
  }

  // Use the required lifecycle methods here

  render() {
    // Display loading status here
    return (
      <div className="App">
        {this.state.loading ? null : <h1>Loading....</h1>}
        {this.state.photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
}
