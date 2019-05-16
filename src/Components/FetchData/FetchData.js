import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import EmbededSongs from "../EmbedSongs/EmbedSongs";

class FetchData extends Component {
  state = {
    search: []
  };

  songHandler = async song => {
    console.log("seraching");
    const query = await fetch(`/api/v1/${song}`);
    const parsedSong = await query.json();
    console.log(parsedSong.data.tracks.items);
    this.setState({
      search: parsedSong.data.tracks.items
    });
  };

  render() {
    return (
      <div style={{ marginTop: "7rem" }}>
        <h4>search songs</h4>
        <SearchBar search={this.songHandler} />
        <EmbededSongs tracks={this.state.search} />
      </div>
    );
  }
}

export default FetchData;
