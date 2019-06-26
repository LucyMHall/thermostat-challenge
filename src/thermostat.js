function Thermostat() {
  this.temperature = 20;
  this.minimumTemp = 10;
  this.powersaver = true;
}

Thermostat.prototype.up = function() {
  if (this.temperature < this.maximumTemp()){
      this.temperature ++;
  }
  return this.temperature;
}

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature --;
  }
  return this.temperature;
}

Thermostat.prototype.maximumTemp = function() {
  if (this.powersaver) {
    return 25;
  } else {
    return 32;
  }
}

Thermostat.prototype.reset = function() {
  return this.temperature = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return "low-usage"
  }else if (this.temperature < 25) {
    return "medium-usage"
  }else if (this.temperature >= 25) {
    return "high-usage"
  }
}
