class Thermostat {
  constructor() {
    this.MINIMUM = 10;
    this.temp = 20;
    this.powerSavingSwitch = true;
  }

  temperature() {
    return this.temp;
  }

  maximumTemperature() {
    return this.isPowerSaveMode() ? 25 : 32;
  }

  up() {
    if (this.temp < this.maximumTemperature()) {
      this.temp++;
    }
  }

  down() {
    if (this.temp > this.MINIMUM) this.temp--;
  }

  isPowerSaveMode() {
    return this.powerSavingSwitch;
  }

  turnOffPowerSavingMode() {
    this.powerSavingSwitch = false;
  }

  turnOnPowerSavingMode() {
    this.powerSavingSwitch = true;
  }

  reset() {
    this.temp = 20;
  }
}
