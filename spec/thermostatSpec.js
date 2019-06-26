describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("has a default temperature of 20", function() {
    expect(thermostat.temperature).toBe(20);
  });

  it(".up increase thermostat by 1", function() {
    expect(thermostat.up()).toBe(21);
  });

  it(".down decrease thermostat by 1", function() {
    expect(thermostat.down()).toBe(19);
  });

  it("has a default minimum temperature", function() {
    expect(thermostat.minimumTemp).toBe(10);
  });

  it("has a max temperature of 25 when on powersaver mode", function() {
    thermostat.powersaver = true
    expect(thermostat.maximumTemp()).toBe(25);
  });

  it("has a max temperature of 32 when powersaver mode is off", function() {
    thermostat.powersaver = false
    expect(thermostat.maximumTemp()).toBe(32);
  });

  it("has a default powersaver value of true", function() {
    expect(thermostat.powersaver).toBe(true);
  })

  it("has a reset function which sets the temperature at 20", function() {
    thermostat.up()
    thermostat.up()
    expect(thermostat.reset()).toBe(20)
  });

});
