function Thermostat() {
  this.temperature = 20;
  this.minimumTemp = 10;
  this.powersaver = true;
}

Thermostat.prototype.up = function() {
  this.temperature ++;
  return this.temperature;
}

Thermostat.prototype.down = function() {
  this.temperature --;
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
