const countingValleys = (steps, path) => {
  let valley = false,
    valcount = 0;
  let sealevel = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] == "D") sealevel--;
    if (path[i] == "U") sealevel++;
    if (sealevel < 0) valley = true;
    if (sealevel > 0) valley = false;
    if (valley && sealevel == 0) valcount++;
  }
  return valcount;
};
