
module.exports = {
  round: (value, roundUp = 1) => {
    let rounded = Math.round(value * 100);
    const mod = rounded % roundUp;
    if (mod !== 0) {
      rounded += roundUp - mod;
    }
    return rounded / 100;
  },
};
