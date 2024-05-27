function Calculate_result() {
    let grade1 = parseFloat(document.getElementById("field1").value);
    let grade2 = parseFloat(document.getElementById("field2").value);
    let absences = parseInt(document.getElementById("field3").value);

      //const
      const totalClasses = 20;
      const minimumPresence = 0.7;
      const minimumAverage = 6.5;

      // Calculations
      let averageGrade = (grade1 + grade2) / 2;
      let presenceRate = (totalClasses - absences) / totalClasses;

      // Determine result
      let result;
      if (presenceRate < minimumPresence && averageGrade < minimumAverage) {
          result = "Failed due to both absences and insufficient grade.";
      } else if (presenceRate < minimumPresence) {
          result = "Failed due to absences.";
      } else if (averageGrade < minimumAverage) {
          result = "Failed due to insufficient grade.";
      } else {
          result = "Approved.";
      }
document.getElementById('Show-result').textContent = result;
}