const jsonData = {
  student: [
    { id: 1, name: "Alice", scores: { maths: 85, english: 92 } },
    { id: 2, name: "Bob", scores: { maths: 78, english: 88 } },
    { id: 3, name: "Charlie", scores: { maths: 90, english: 80 } },
  ],
};
function status(avgScore) {
  if (avgScore > 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}
for (const student of jsonData.student) {
  var avgScore = parseFloat(
    (`${student.scores.maths + student.scores.english}` / 2).toFixed(2)
  );
  console.log(
    `ID:${student.id}, Name:${
      student.name
    },   AvgScore: ${avgScore},   Status:${status(avgScore)}`
  );
}
