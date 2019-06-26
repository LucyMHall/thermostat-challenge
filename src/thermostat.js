function Thermostat() {
  this.temperature = 20;
  this.defaultTemp = 20;
  this.minimumTemp = 10;
  this.maxTempPSOn = 25;
  this.maxTempPSOff = 32;
  this.powersaver = true;
  this.lowestMediumUsage = 18;
  this.highestMediumUsage = 25;
}

Thermostat.prototype.up = function() {
  if (this.temperature < this.maximumTemp()){
      this.temperature ++;
  }
  return this.temperature;
}

Thermostat.prototype.down = function() {
  if (this.temperature > this.minimumTemp) {
    this.temperature --;
  }
  return this.temperature;
}

Thermostat.prototype.maximumTemp = function() {
  if (this.powersaver) {
    return this.maxTempPSOn;
  } else {
    return this.maxTempPSOff;
  }
}

Thermostat.prototype.reset = function() {
  return this.temperature = this.defaultTemp;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.lowestMediumUsage) {
    return "low-usage"
  }else if (this.temperature < this.highestMediumUsage) {
    return "medium-usage"
  }else if (this.temperature >= this.highestMediumUsage) {
    return "high-usage"
  }
}
