const gradingStudents = (grades) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      grades[i] = grades[i];
      continue;
    }
    let n = Math.floor(grades[i] / 5) + 1;
    if (grades[i] < n * 5) {
      if (n * 5 - grades[i] < 3) grades[i] = n * 5;
    } else if (grades[i] > n * 5) {
      if ((n + 1) * 5 - grades[i] < 3) grades[i] = (n + 1) * 5;
    }
  }
  return grades;
};
