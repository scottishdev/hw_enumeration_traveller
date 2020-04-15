const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((input) => {
    return input.startLocation;
})
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journeyObject) => {
    return journeyObject.endLocation; //This returns the Journey Object's endLocation property. It is not a method so we don't put in a ().
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journeyObject) => {
    return journeyObject.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (distance) {
  return this.journeys.filter((journeyObject) => {
    return journeyObject.distance >= distance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((accumulator, journey) => {
    return accumulator += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  //given I have a list of transports (train, aeroplane, car, ferry)
  //when I have an element which matches an existing element in the array
  //then do not add it.
  //add the other elements
  const transportArray = this.journeys.map((journey) => {
    return journey.transport;
  });
  const uniqueTransports = [...new Set(transportArray)]; //Create new array containing unique array elements
  return uniqueTransports;
};


module.exports = Traveller;
