class Thermostat {
  constructor() {
    this.MINIMUM = 10;
    this.temp = 20;
    this.powerSavingSwitch = true;
  }

  temperature() {
    return this.temp;
  }

  up() {
    this.temp++;
  }

  down() {
    if (this.temp > this.MINIMUM) this.temp--;
  }

  isPowerSaveMode() {
    return this.powerSavingSwitch;
  }

  turnOffPowerSavingMode() {
    this.powerSavingSwitch = false
  }
}
