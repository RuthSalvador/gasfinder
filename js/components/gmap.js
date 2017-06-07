'use strict';

const StationDetails = (update) => {

  const gmapContainer = $('<div class="container-gmap"></div>');
  const gmap = $('<div id="map"></div>');
  const description = $('<div class="description"></div>');
  const titleStation = $('<h1> Grifo '+ state.selectedStation.name + '</h1>');
  const hr = $('<hr>');
  const adStation = $('<p class="line">'+ state.selectedStation.address + '</p>');
  const back = $('<button>Regresar</button>');

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


return gmapContainer;

}
