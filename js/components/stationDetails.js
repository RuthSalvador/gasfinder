'use strict';

const StationItem = (station, update ) => {
  const stationsDiv = $('<div class="stations"></div>');
  const iconMap = $('<i class="fa fa-map" aria-hidden="true"></i>');
  const nameStation = $('<h2>'+ station.name + '</h2>');
  const addressStation = $('<p>'+ station.address +'</p>');
  const districtStation = $('<p>'+ station.district +'</p>');

  stationsDiv.append(iconMap);
  stationsDiv.append(nameStation);
  stationsDiv.append(addressStation);
  stationsDiv.append(districtStation);

  stationsDiv.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = station;
    update();
  });

  return stationsDiv;
}

const StationContainer = (update) => {
  const contStation = $('<div class="container-station"></div>');
  state.stations.forEach((station) => {
    contStation.append(StationItem(station, update));
  });

  //return contStation;
}
