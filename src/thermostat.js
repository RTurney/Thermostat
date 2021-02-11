class Thermostat {

  constructor() {
    this.MINIMUM = 10
    this.temp = 20
  }

  temperature() { return this.temp }

  up() { this.temp ++ }

  down() { if(this.temp > this.MINIMUM) this.temp -- }}
