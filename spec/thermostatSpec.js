describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe(".temperature", () => {
    it("starts at 20 degrees", () => {
      expect(thermostat.temperature()).toEqual(20);
    });

    it("will not go lower than 10 degrees", () => {
      for (let i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature()).toEqual(10);
    });
    it("will not go higher than 25 degrees when power saving mode is on", () => {
      thermostat.turnOnPowerSavingMode();
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature()).toEqual(25);
    });
    it("will not go higher than 32 degrees when power saving mode is off", () => {
      thermostat.turnOffPowerSavingMode();
      for (let i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature()).toEqual(32)
    })
  });

  describe(".up", () => {
    it("increases the temperature of the thermostat", () => {
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    });
  });

  describe(".down", () => {
    it("decreases the temperature of the thermostat", () => {
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19);
    });
  });

  describe(".powerSaveMode", () => {
    it("is on by default", () => {
      expect(thermostat.isPowerSaveMode()).toBe(true);
    });
    it("can be turned off", () => {
      thermostat.turnOffPowerSavingMode();
      expect(thermostat.isPowerSaveMode()).toBe(false);
    });
    it("can be turned off", () => {
      thermostat.turnOffPowerSavingMode();
      thermostat.turnOnPowerSavingMode();
      expect(thermostat.isPowerSaveMode()).toBe(true);
    });
  });
  describe(".reset", () => {
    it("resets the temperature of the thermostat", () => {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature()).toEqual(20);
    })
  })
  describe(".currentEnergyUsage", () => {
    describe("high-usage", () => {
      it("detects high energy usage when the temperature is more than 25 degrees", () => {
        thermostat.turnOffPowerSavingMode();
        for (let i = 0; i < 6; i++) {
          thermostat.up()
        }
        expect(thermostat.currentEnergyUsage()).toEqual("high-usage")
      })
    })
    describe("medium-usage", () => {
      it("detects medium energy usage when the temperature is in between 18 and 25 degrees", () => {
        thermostat.turnOffPowerSavingMode();
        for (let i = 0; i < 3; i++) {
          thermostat.up()
        }
        expect(thermostat.currentEnergyUsage()).toEqual("medium-usage")
      })
    })
    describe("low-usage", () => {
      it("detects low energy usage when the temperature is less than 18 degrees", () => {
        thermostat.turnOffPowerSavingMode();
        for (let i = 0; i < 6; i++) {
          thermostat.down()
        }
        expect(thermostat.currentEnergyUsage()).toEqual("low-usage")
      })
    })
  })
});
