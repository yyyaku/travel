const map = () => {
  const map = L.map('map').setView([59.9684, 30.3176], 17);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const iconOptions = {
    iconUrl: 'img/svg/map-cursor.svg',
    iconSize: [38, 50],
  }

  const customIcon = L.icon(iconOptions);

  let markerOptions = {
    icon: customIcon
  }

  const marker = L.marker({ lat: 59.9684, lng: 30.3176 }, markerOptions);

  marker.addTo(map);
}

export {map};
