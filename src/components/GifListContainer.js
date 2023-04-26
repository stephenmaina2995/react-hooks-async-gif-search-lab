import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = "trending") => {
    // Fetch data from Giphy API
    const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key
    const url = `https://api.giphy.com/v1/gifs/${query}?api_key=${API_KEY}&limit=3`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gifs: data.data });
      })
      .catch((error) => console.error(error));
  }

  handleSearchSubmit = (query) => {
    this.fetchGifs(query);
  }

  render() {
    return (
      <div>
        <GifSearch onSearchSubmit={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
