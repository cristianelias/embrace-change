class Percentage {
  constructor(percentage) {
    if (percentage === undefined || percentage === null) {
      this.percentage = 0;
    } else {
      this.percentage = percentage;
    }
  }

  format() {
    if (isNaN(this.percentage)) {
      return false;
    }

    return this.percentage.toFixed(2);
  }
}

export default Percentage;
