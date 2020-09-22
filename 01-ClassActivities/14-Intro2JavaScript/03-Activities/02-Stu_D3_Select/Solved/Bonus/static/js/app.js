// Use D3 to select the table body
let tbody = d3.select("tbody");

// Use D3 to select the table
let table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// BONUS: Dynamic table
// Loop through an array of grades and build the entire table body from scratch

const grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];

// Iterate through each student/grade pair
grades.forEach(([student, grade]) => {
  // Append one table row per student/grade
  let row = tbody.append("tr");

  // append one cell for the student and one cell for the grade
  row.append("td").text(student);
  row.append("td").text(grade);
});

// const gradesDicts = [
//   {
//     name: "Malcolm",
//     grade: 80
//   },{
//     name: "Kaylee",
//     grade: 99
//   },{
//     name: "Simon",
//     grade: 99
//   },{
//     name: "Zoe",
//     grade: 85
//   },{
//     name: "Wash",
//     grade: 79
//   }
// ]

// gradesDicts.forEach(dict => {
//   let row = tbody.append("tr");
//   row.append("td").text(dict.name);
//   row.append("td").text(dict.grade);
// })