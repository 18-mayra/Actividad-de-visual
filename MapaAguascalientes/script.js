// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes
// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: '© OpenStreetMap'
}).addTo(map);

// Añadir un marcador en Aguascalientes capital
var marker = L.marker([21.88234, -102.28259]).addTo(map);
// Añadir un pop-up al marcador
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

// Marcador en la Plaza de la Patria
var plazaPatria = L.marker([21.88187, -102.29495]).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");
// Marcador en el Museo Nacional de la Muerte
var museoMuerte = L.marker([21.88417, -102.28878]).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.")

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
   }).addTo(map);
   feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

   var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
   ]).addTo(map);
   centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

   var baseMaps = {
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
   };
   var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico
   };
   L.control.layers(baseMaps, overlayMaps).addTo(map);
   // Icono 1
   var iconoAguascalientes = L.icon({
    iconUrl:"imagenes/aguas.jpg", // Reemplaza con la ruta de tu imagen
    iconSize: [38, 50], // Tamaño del ícono
    iconAnchor: [22, 50], // Punto donde se ancla el ícono
    popupAnchor: [-3, -50]
});
L.marker([21.88234, -102.28259], { icon: iconoAguascalientes }).addTo(map)
.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Con un ícono personalizado.")
.openPopup();

// Icono 2 
var iconoMuseo = L.icon({
    iconUrl: "imagenes/images.jpg", // Reemplaza con la ruta de tu imagen
    iconSize: [38, 50],
    iconAnchor: [22, 50],
    popupAnchor: [-3, -50]
});
L.marker([21.88417, -102.28878], { icon: iconoMuseo }).addTo(map)
    .bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.")
    .openPopup();

var iconoPlaza = L.icon({
    iconUrl: "imagenes/plaza.jpg", // Reemplaza con la ruta de tu imagen
    iconSize: [38, 50],
    iconAnchor: [22, 50],
    popupAnchor: [-3, -50]
});
L.marker([21.88187, -102.29495], { icon: iconoPlaza }).addTo(map)
    .bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.")
    .openPopup();
    