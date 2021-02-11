class Thermostat {

  constructor() {
    this.temp = 20
  }

  temperature() { return this.temp }

  up() { this.temp ++ }

  down() { this.temp -- }
}
