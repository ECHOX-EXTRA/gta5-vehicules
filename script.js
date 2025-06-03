// Fonction pour afficher les véhicules
function afficherVehicules(liste) {
  const container = document.getElementById("vehicle-list");
  container.innerHTML = "";

  if (liste.length === 0) {
    container.innerHTML = "<p>Aucun véhicule trouvé.</p>";
    return;
  }

  liste.forEach(vehicle => {
    const card = document.createElement("div");
    card.className = "vehicle-card";

    card.innerHTML = `
      <img src="${vehicle.image}" alt="${vehicle.name}">
      <h2>${vehicle.name}</h2>
      <p><strong>Spawn :</strong> ${vehicle.spawn}</p>
      <p><strong>Vitesse max :</strong> ${vehicle.speed} km/h</p>
      <p><strong>Catégorie :</strong> ${vehicle.category}</p>
    `;

    container.appendChild(card);
  });
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  afficherVehicules(vehicles);

  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const resultats = vehicles.filter(v =>
      v.name.toLowerCase().includes(query) ||
      v.spawn.toLowerCase().includes(query) ||
      v.category.toLowerCase().includes(query)
    );
    afficherVehicules(resultats);
  });
});
