import React, { Component } from "react";
import { Slide, Slider, Caption } from "react-materialize";

class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: "4rem", paddingBottom: "5rem" }}>
        <h2 style={{ textAlign: "center", color: "white" }}>
          CloudBeat
          <i class="fas fa-headphones" />
        </h2>

        <Slider>
          <Slide image={<img />}>
            <Caption>
              <h3>Discover Any New Hits Music</h3>
              <h5 className="light grey-text text-lighten-3">
                CloudBeat lets you listen over 150 million tracks — and growing.
                All for free.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img />}>
            <Caption placement="left">
              <h3>Weekly Hip Hop Hit Songs</h3>
              <h5 className="light grey-text text-lighten-3">DJ Khaled...</h5>
            </Caption>
          </Slide>
          <Slide image={<img />}>
            <Caption placement="right">
              <h3>Bring your music along</h3>
              <h5 className="light grey-text text-lighten-3">
                Add up to 50,000 songs from your computer and stream them
                anywhere for free.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img />}>
            <Caption>
              <h3>All your favorite music. Best sound quality available.</h3>
              <h5 className="light grey-text text-lighten-3">
                With over 60 million tracks and tons of exclusive interviews and
                videos, CloudBeat is here to bring you closer to the artists you
                listen to.
              </h5>
            </Caption>
          </Slide>
        </Slider>
      </div>
    );
  }
}
export default Home;
