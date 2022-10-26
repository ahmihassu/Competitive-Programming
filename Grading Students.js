const gradingStudents = (grades) => {
  for (let g of grades) {
    if (g < 38);
    else {
      let n = Math.floor(g / 5);
      let m = 5 * n;
      if (m < g) {
        m = m + 5;
      }
      if (m - g < 3) {
        grades[grades.indexOf(g)] = m;
      }
      console.log(n, m, g);
    }
  }
  return grades;
};
