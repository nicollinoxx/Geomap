import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  addMarker(lng, lat, color, name) {
    new maplibregl.Marker({ color: color, scale: 1.5 })
      .setLngLat([lng, lat])
      .setPopup(new maplibregl.Popup().setHTML(`<h4>${name}</h4>`))
      .addTo(this.map);
  }

  mapControllers() {
    this.map.addControl(new maplibregl.NavigationControl());
    this.map.addControl(new maplibregl.FullscreenControl());
    this.map.addControl(new maplibregl.ScaleControl());
  }

  connect() {
    const dataElement = this.element.querySelector("[data-map-name]");
    const namePlace = `${dataElement.dataset.mapName}`;
    const latitude = parseFloat(dataElement.dataset.mapLatitude);
    const longitude = parseFloat(dataElement.dataset.mapLongitude);

    this.map = new maplibregl.Map({
      container: this.element.querySelector("#map"),
      style: "https://api.maptiler.com/maps/streets-v2-dark/style.json?key=sGjiyFIQZQ5cx6CA6dOy",
      center: [longitude, latitude],
      zoom: 6,
    });

    this.mapControllers();

    navigator.geolocation.getCurrentPosition((position) => {
      this.addMarker(position.coords.longitude, position.coords.latitude, "yellow", "Your location");
    });

    this.map.on("load", () => {
      this.addMarker(longitude, latitude, "blue", namePlace);
    });

    const places = document.querySelectorAll('[data-map-name]');
    places.forEach(place => {
      const name = place.dataset.mapName;
      const lat = parseFloat(place.dataset.mapLatitude);
      const lng = parseFloat(place.dataset.mapLongitude);
      this.addMarker(lng, lat, "green", name);
    });
  }
}
