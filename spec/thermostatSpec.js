describe('Thermostat', () => {

  let thermostat;

  beforeEach( () => {
    thermostat = new Thermostat();
  });

  describe('.temperature', () => {

    it('starts at 20 degrees', () => {
      expect(thermostat.temperature()).toEqual(20);
    });

    it('will not go lower than 10 degrees', () => {
      for(let i = 0; i < 11; i ++){
        thermostat.down();
      }
      expect(thermostat.temperature()).toEqual(10);
    });
  });

  describe('.up', () => {

    it('increases the temperature of the thermostat', () => {
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    });
  });

  describe('.down', () => {

    it('decreases the temperature of the thermostat', () => {
      thermostat.down()
      expect(thermostat.temperature()).toEqual(19);
    });
  });

  describe('.powerSaveMode', () => {

    it('is on by default', () => {
      expect(thermostat.isPowerSaveMode()).toBe(true)
    });
    it("can be turned off", () => {
      thermostat.turnOffPowerSavingMode()
      expect(thermostat.isPowerSaveMode()).toBe(false)
    }) 
  });
});
