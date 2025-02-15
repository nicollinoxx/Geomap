import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["map"];

  addMarker(lng, lat, cityName) {
    new maplibregl.Marker({ color: "yellow", scale: 1.5 })
      .setLngLat([lng, lat])
      .setPopup(
        new maplibregl.Popup()
          .setHTML('<h3>Place name</h3>')
      )
      .addTo(this.map);
  }

  connect() {
    this.map = new maplibregl.Map({
      container: this.mapTarget,
      style: "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      center: [-46.6333, -23.5505],
      zoom: 14,
    });

    this.map.addControl(new maplibregl.NavigationControl());
    this.map.addControl(new maplibregl.FullscreenControl());
    this.map.addControl(new maplibregl.ScaleControl());

    this.map.on("load", () => {
      this.addMarker(-46.6333, -23.5505);
      this.addMarker(-47.9292, -15.7801);
      this.addMarker(-43.2096, -22.9035);
      this.addMarker(-48.0294, -16.3344);
    });
  }
}
