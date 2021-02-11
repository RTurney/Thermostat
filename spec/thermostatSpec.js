describe('Thermostat', () => {

  let thermostat;

  beforeEach( () => {
    thermostat = new Thermostat();
  });

  describe('.temperature', () => {

    it('starts at 20 degrees', () => {
      expect(thermostat.temperature()).toEqual(20);
    });
  });

  describe('.up', () => {

    it('increases the temperature of the thermostat', () => {
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    });
  })
});
