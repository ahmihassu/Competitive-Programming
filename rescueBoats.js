var numRescueBoats = function (people, limit) {
  let boats = 0;
  let p1 = 0,
    p2 = people.length - 1;
  people.sort((a, b) => a - b);
  while (p1 <= p2) {
    if (people[p2] + people[p1] <= limit) {
      p1++;
      p2--;
    } else {
      p2--;
    }
    boats++;
  }
  return boats;
};
