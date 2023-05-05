window.onload = () => {
  let testEntityAdded = false;

  const el = document.querySelector("[gps-new-camera]");

  el.addEventListener("gps-camera-update-position", (e) => {
    if (!testEntityAdded) {
      alert(
        `Position détectée !: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`
      );
      // Add a box to the north of the initial GPS position
      const entity = document.createElement("a-entity");
      entity.id = "entity";
      entity.setAttribute("gltf-model", "/assets/dragon/scene.gltf");
      entity.setAttribute("scale", {
        x: 50,
        y: 50,
        z: 50,
      });
      entity.setAttribute("position", {
        x: 0,
        y: 1.5,
        z: 0,
      });
      entity.setAttribute("rotation", {
        x: 0,
        y: 0,
        z: 0,
      });
      entity.setAttribute("look-at", "[gps-new-camera]");
      entity.setAttribute("gps-new-entity-place", {
        latitude: e.detail.position.latitude + 0.0001,
        longitude: e.detail.position.longitude,
      });
      entity.setAttribute("animation-mixer");
      entity.setAttribute("distance");
      document.querySelector("a-scene").appendChild(entity);
    }

    testEntityAdded = true;
  });
};
