class Percentage {
  constructor(percentage) {
    this.percentage = percentage;
  }

  format() {
    if (isNaN(this.percentage)) {
      return false;
    }

    return this.percentage.toFixed(2);
  }
}

export default Percentage;
