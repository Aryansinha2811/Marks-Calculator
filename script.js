// Prevent Enter Button from doing anything
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    });
});


// Function to submit values
submitValue = () => {
    // Retrieve values from input fields
    let Theory1 = parseFloat(document.getElementById("theory-1").value);
    let Theory2 = parseFloat(document.getElementById("theory-2").value);
    let Theory3 = parseFloat(document.getElementById("theory-3").value);
    let Theory4 = parseFloat(document.getElementById("theory-4").value);
    let Theory5 = parseFloat(document.getElementById("theory-5").value);
    let Theory6 = parseFloat(document.getElementById("theory-6").value);
    let Theory7 = parseFloat(document.getElementById("theory-7").value);
    let Theory8 = parseFloat(document.getElementById("theory-8").value);

    let AssignmentMark1 = parseFloat(document.getElementById("Assignment-1").value);
    let AssignmentMark2 = parseFloat(document.getElementById("Assignment-2").value);
    let AssignmentMark3 = parseFloat(document.getElementById("Assignment-3").value);
    let AssignmentMark4 = parseFloat(document.getElementById("Assignment-4").value);
    let AssignmentMark5 = parseFloat(document.getElementById("Assignment-5").value);
    let AssignmentMark6 = parseFloat(document.getElementById("Assignment-6").value);
    let AssignmentMark7 = parseFloat(document.getElementById("Assignment-7").value);
    let AssignmentMark8 = parseFloat(document.getElementById("Assignment-8").value);


    // Calculate individual totals
    let total1 = SingleCalculation(TheoryCalculation(Theory1), AssignmentCalculation(AssignmentMark1));
    document.getElementById("total-1").textContent = total1;
    document.getElementById("total-1").style.display = "flex";

    let total2 = SingleCalculation(TheoryCalculation(Theory2), AssignmentCalculation(AssignmentMark2));
    document.getElementById("total-2").textContent = total2;
    document.getElementById("total-2").style.display = "flex";

    let total3 = SingleCalculation(TheoryCalculation(Theory3), AssignmentCalculation(AssignmentMark3));
    document.getElementById("total-3").textContent = total3;
    document.getElementById("total-3").style.display = "flex";

    let total4 = SingleCalculation(TheoryCalculation(Theory4), AssignmentCalculation(AssignmentMark4));
    document.getElementById("total-4").textContent = total4;
    document.getElementById("total-4").style.display = "flex";


    let total5 = SingleCalculation(TheoryCalculation(Theory5), AssignmentCalculation(AssignmentMark5));
    document.getElementById("total-5").textContent = total5;
    document.getElementById("total-5").style.display = "flex";

    let total6 = SingleCalculation(TheoryCalculation(Theory6), AssignmentCalculation(AssignmentMark6));
    document.getElementById("total-6").textContent = total6;
    document.getElementById("total-6").style.display = "flex";

    let total7 = SingleCalculation(TheoryCalculation(Theory7), AssignmentCalculation(AssignmentMark7));
    document.getElementById("total-7").textContent = total7;
    document.getElementById("total-7").style.display = "flex";

    let total8 = SingleCalculation(TheoryCalculation(Theory8), AssignmentCalculation(AssignmentMark8));
    document.getElementById("total-8").textContent = total8;
    document.getElementById("total-8").style.display = "flex";


    // Calculate and log overall total
    let totalTheoryMarks = TheoryCalculation(Theory1) + TheoryCalculation(Theory2) + TheoryCalculation(Theory3) + TheoryCalculation(Theory4) + TheoryCalculation(Theory5) + TheoryCalculation(Theory6) + TheoryCalculation(Theory7) + TheoryCalculation(Theory8);

    let totalAssignmentMarks = AssignmentCalculation(AssignmentMark1) + AssignmentCalculation(AssignmentMark2) + AssignmentCalculation(AssignmentMark3) + AssignmentCalculation(AssignmentMark4) + AssignmentCalculation(AssignmentMark5) + AssignmentCalculation(AssignmentMark6) + AssignmentCalculation(AssignmentMark7) + AssignmentCalculation(AssignmentMark8);

    let Result = TotalCalculation(totalTheoryMarks, totalAssignmentMarks); document.getElementById("totalMarksObtained").innerHTML = "Total marks Obtained :- "+ Result + " / 800";

    let TotalPercentage = TotalPercent(Result);
    document.getElementById("totalPercentage").innerHTML = "Total Percentage Obtained :- " + TotalPercentage + "%";
}

// Function to calculate single combined total for theory and assignment
SingleCalculation = (theory, assignment) => {
    let singleCalc = theory + assignment;
    return singleCalc;
}

// Function to calculate theory marks for a subject
TheoryCalculation = (theory) => {
    let calculation = theory / 100 * 100;
    let finalCalculation = calculation / 100 * 70;
    return finalCalculation;
}

// Function to calculate assignment marks for a subject
AssignmentCalculation = (assignment) => {
    let calculation = assignment / 100 * 100;
    let finalCalculation = calculation / 100 * 30;
    return finalCalculation;
}

// Function to calculate total marks
TotalCalculation = (totalTheory, totalAssignment) => {
    let totalMarks = totalTheory + totalAssignment;
    return totalMarks;
}

// Function to calculate the percentange obtained 
TotalPercent = (result) => {
    let percent = result/800 * 100;
    return percent;
}

// Function to clear all input fields and results
clearFields = () => {
    // Clear all input fields
    document.getElementById("theory-1").value = '';
    document.getElementById("theory-2").value = '';
    document.getElementById("theory-3").value = '';
    document.getElementById("theory-4").value = '';
    document.getElementById("theory-5").value = '';
    document.getElementById("theory-6").value = '';
    document.getElementById("theory-7").value = '';
    document.getElementById("theory-8").value = '';
    document.getElementById("Assignment-1").value = '';
    document.getElementById("Assignment-2").value = '';
    document.getElementById("Assignment-3").value = '';
    document.getElementById("Assignment-4").value = '';
    document.getElementById("Assignment-5").value = '';
    document.getElementById("Assignment-6").value = '';
    document.getElementById("Assignment-7").value = '';
    document.getElementById("Assignment-8").value = '';

    // Clear all total displays
    document.getElementById("total-1").textContent = '';
    document.getElementById("total-2").textContent = '';
    document.getElementById("total-3").textContent = '';
    document.getElementById("total-4").textContent = '';
    document.getElementById("total-5").textContent = '';
    document.getElementById("total-6").textContent = '';
    document.getElementById("total-7").textContent = '';
    document.getElementById("total-8").textContent = '';

    // Clear overall results
    document.getElementById("totalMarksObtained").innerHTML = 'Total marks Obtained :-';
    document.getElementById("totalPercentage").innerHTML = 'Total Percentage Obtained :-';
}

