'use strict';

const filterByDistrict = (stations,query) => {
  const distri = stations.filter((e)=>{
    return e.district.toLowerCase().indexOf(query.toLowerCase())!= -1;
  });
  return distri;
}
