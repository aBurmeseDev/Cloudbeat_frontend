import React, { Component } from "react";
import Search from "../Search/Search";
import ShowSongs from "../ShowSongs/Showsongs";

class Post extends Component {
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
      <div>
        <h1>Search songs</h1>
        <Search search={this.songHandler} />
        <ShowSongs tracks={this.state.search} />
      </div>
    );
  }
}

export default Post;
