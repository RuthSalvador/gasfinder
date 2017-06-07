'use strict';

const StationDetails = (update) => {

  const gmapContainer = $('<div class="container-gmap"></div>');
  const gmap = $('<div id="map"></div>');
  const description = $('<div class="description"></div>');
  const titleStation = $('<h1> Grifo '+ state.selectedStation.name + '</h1>');
  const hr = $('<hr>');
  const adStation = $('<p class="line">'+ state.selectedStation.address + '</p>');
  const back = $('<button>Regresar</button>');
  const distance = $('<p></p>');

  gmapContainer.append(gmap);
  gmapContainer.append(description);
  description.append(titleStation);
  description.append(hr);
  description.append(adStation);

  state.selectedStation.products.forEach((e)=> {
    const productsStation = $('<span class="products-station">'+ e +'</span>');
    description.append(productsStation);
  })

  description.append(back);

  back.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  })

$(() => {
  const map = new GMaps({
    div: '#map',
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long,
    zoom: 12,
  });

  map.addMarker({
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long,
    title: state.selectedStation.name,
    infoWindow: {
    content: 'Grifo '+ state.selectedStation.name,
    }
  });

  var latitud, longitud;

  GMaps.geolocate({
    success: function(position) {
       latitud = position.coords.latitude;
       longitud = position.coords.longitude;

      map.addMarker({
        lat: latitud,
        lng: longitud,
        title: 'Mi ubicación',
        infoWindow: {
        content: 'Mi ubicación',
        }
      });
      map.drawRoute({
      origin: [latitud, longitud],
      destination: [state.selectedStation.lat, state.selectedStation.long],
      travelMode: 'driving',
      strokeColor: '#131540',
      strokeOpacity: 0.6,
      strokeWeight: 6
    });
    },
    error: function(error) {
      alert('Tenemos un problema con encontrar su ubicación');
    }
  });


});
return gmapContainer;

}
