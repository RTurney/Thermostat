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
});
