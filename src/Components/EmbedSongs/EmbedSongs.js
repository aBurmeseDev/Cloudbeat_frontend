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
    <div>
      {(props.tracks || []).map(t => (
        <div style={{ display: "inline-block", padding: "1rem" }}>
          <span
            style={{
              textAlign: "center",
              color: "#fffff",
              marginBottom: "2rem"
            }}
          >
            {t.album.release_date} <br />
            Popularity:{t.popularity}
          </span>
          <br />
          <iframe
            title={t.name}
            src={embedHandler(t.external_urls.spotify)}
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            style={{ paddingTop: "1rem" }}
          />
        </div>
      ))}
    </div>
  );
};

export default SongsList;
