let total_marks = document.getElementById("totalMarks");
//let isfinalexam = document.getElementById("IsFinalExam");
let findgrade = document.getElementById("FindGrade");
let grade = document.getElementById("CheckGrade");
findgrade.addEventListener('click', () => {
    let totalmarks = parseInt(total_marks.value);
    let isfinalexam = document.getElementById("isfinalexam").checked;
    if (totalmarks >= 85 && totalmarks <= 100 && isfinalexam) {
        grade.innerHTML = "Grade A+";
    } else if (totalmarks >= 90 && totalmarks <= 100) {
        grade.innerHTML = "Grade A+";
    } else {
        grade.innerHTML = "No Grade";
    }
});