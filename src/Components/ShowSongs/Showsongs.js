import React from "react";

const SongsList = props => {
  //   const songsList = props.tracks.map((q, i) => <li key={i}>{q.album}</li>);

  const embedHandler = string => {
    let array = string.split("track/");
    let embedString = `https://open.spotify.com/embed/track/${array[1]}`;
    return embedString;
  };
  console.log(props);
  return (
    <div className="App-header">
      {(props.tracks || []).map(t => (
        <div style={{ display: "inline-block" }}>
          {t.name} - {t.artists[0].name} <br />
          <iframe
            title={t.name}
            src={embedHandler(t.external_urls.spotify)}
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </div>
      ))}
    </div>
  );
};

export default SongsList;
