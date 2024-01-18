import { useEffect } from "react";

function Map() {
  useEffect(() => {
    // The value for 'accessToken' begins with 'pk...'
    mapboxgl.accessToken =
      "pk.eyJ1IjoianVsaWVuYm9uZXQiLCJhIjoiY2xxcWphMDZyM2dvYjJpczV2bnp6ajQxYiJ9.y27Enf6dWOxpPlWTQy9BbA";
    const map = new mapboxgl.Map({
      container: "map",
      // Replace YOUR_STYLE_URL with your style URL.
      style: "mapbox://styles/julienbonet/clrj46eej001201pbc9pqasej",
      center: [2.3627, 48.8559],
      zoom: 11,
    });
    /* 
    Add an event listener that runs
    when a user clicks on the map element.
    */
    map.on("click", (event) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(event.point, {
        layers: ["loreal-paris"], // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

      // Code from the next step will go here.
    });
    /* 
      Create a popup, specify its options 
      and properties, and add it to the map.
    */
    // const popup = new mapboxgl.Popup({ offset: [0, -15] })
      // .setLngLat(feature.geometry.coordinates)
    //   .setHTML(
    //     `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    //   )
    //   .addTo(map);
    // Code from the next step will go here.
  }, []);
  return (
    <div className="map-container">
      <div id="map"></div>
    </div>
  );
}

export default Map