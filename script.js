// Define variables to store the sums of theory and assignment marks
let totalTheoryMarks = 0;
let totalAssignmentMarks = 0;

// Function to submit values
submitValue = () => {
    // Retrieve values from input fields
    Theory1 = parseFloat(document.getElementById("theory-1").value);
    Theory2 = parseFloat(document.getElementById("theory-2").value);
    Theory3 = parseFloat(document.getElementById("theory-3").value);
    Theory4 = parseFloat(document.getElementById("theory-4").value);
    Theory5 = parseFloat(document.getElementById("theory-5").value);
    Theory6 = parseFloat(document.getElementById("theory-6").value);
    Theory7 = parseFloat(document.getElementById("theory-7").value);

    AssignmentMark1 = parseFloat(document.getElementById("Assignment-1").value);
    AssignmentMark2 = parseFloat(document.getElementById("Assignment-2").value);
    AssignmentMark3 = parseFloat(document.getElementById("Assignment-3").value);
    AssignmentMark4 = parseFloat(document.getElementById("Assignment-4").value);
    AssignmentMark5 = parseFloat(document.getElementById("Assignment-5").value);
    AssignmentMark6 = parseFloat(document.getElementById("Assignment-6").value);
    AssignmentMark7 = parseFloat(document.getElementById("Assignment-7").value);

    // Calculate theory marks for each subject and add to total
    totalTheoryMarks += TheoryCalculation(Theory1);
    totalTheoryMarks += TheoryCalculation(Theory2);
    totalTheoryMarks += TheoryCalculation(Theory3);
    totalTheoryMarks += TheoryCalculation(Theory4);
    totalTheoryMarks += TheoryCalculation(Theory5);
    totalTheoryMarks += TheoryCalculation(Theory6);
    totalTheoryMarks += TheoryCalculation(Theory7);

    // Calculate assignment marks for each subject and add to total
    totalAssignmentMarks += AssignmentCalculation(AssignmentMark1);
    totalAssignmentMarks += AssignmentCalculation(AssignmentMark2);
    totalAssignmentMarks += AssignmentCalculation(AssignmentMark3);
    totalAssignmentMarks += AssignmentCalculation(AssignmentMark4);
    totalAssignmentMarks += AssignmentCalculation(AssignmentMark5);
    totalAssignmentMarks += AssignmentCalculation(AssignmentMark6);
    totalAssignmentMarks += AssignmentCalculation(AssignmentMark7);

    // Calculate total marks
    TotalCalculation(totalTheoryMarks, totalAssignmentMarks);
}

// Function to calculate theory marks for a subject
TheoryCalculation = (theory) => {
    let calculation = theory / 100 * 100;
    let finalCalculation = calculation / 100 * 70;
    return finalCalculation;
}

// Function to calculate assignment marks for a subject
AssignmentCalculation = (assignment) => {
    let calculation = assignment / 50 * 100;
    let finalCalculation = calculation / 100 * 30;
    return finalCalculation;
}

// Function to calculate total marks
TotalCalculation = (totalTheory, totalAssignment) => {
    let totalMarks = totalTheory + totalAssignment;
    console.log("Total Marks:", totalMarks);
}



// // Define variables to store the sums of theory and assignment marks
// let totalTheoryMarks = 0;
// let totalAssignmentMarks = 0;

// // Function to submit values
// submitValue = () => {
//     // Retrieve values from input fields
//     Theory1 = parseFloat(document.getElementById("theory-1").value);
//     Theory2 = parseFloat(document.getElementById("theory-2").value);
//     Theory3 = parseFloat(document.getElementById("theory-3").value);
//     Theory4 = parseFloat(document.getElementById("theory-4").value);
//     Theory5 = parseFloat(document.getElementById("theory-5").value);
//     Theory6 = parseFloat(document.getElementById("theory-6").value);
//     Theory7 = parseFloat(document.getElementById("theory-7").value);

//     AssignmentMark1 = parseFloat(document.getElementById("Assignment-1").value);
//     AssignmentMark2 = parseFloat(document.getElementById("Assignment-2").value);
//     AssignmentMark3 = parseFloat(document.getElementById("Assignment-3").value);
//     AssignmentMark4 = parseFloat(document.getElementById("Assignment-4").value);
//     AssignmentMark5 = parseFloat(document.getElementById("Assignment-5").value);
//     AssignmentMark6 = parseFloat(document.getElementById("Assignment-6").value);
//     AssignmentMark7 = parseFloat(document.getElementById("Assignment-7").value);

//     // Calculate theory marks for each subject and add to total
//     totalTheoryMarks += TheoryCalculation(Theory1);
//     totalTheoryMarks += TheoryCalculation(Theory2);
//     totalTheoryMarks += TheoryCalculation(Theory3);
//     totalTheoryMarks += TheoryCalculation(Theory4);
//     totalTheoryMarks += TheoryCalculation(Theory5);
//     totalTheoryMarks += TheoryCalculation(Theory6);
//     totalTheoryMarks += TheoryCalculation(Theory7);

//     // Calculate assignment marks for each subject and add to total
//     totalAssignmentMarks += AssignmentCalculation(AssignmentMark1);
//     totalAssignmentMarks += AssignmentCalculation(AssignmentMark2);
//     totalAssignmentMarks += AssignmentCalculation(AssignmentMark3);
//     totalAssignmentMarks += AssignmentCalculation(AssignmentMark4);
//     totalAssignmentMarks += AssignmentCalculation(AssignmentMark5);
//     totalAssignmentMarks += AssignmentCalculation(AssignmentMark6);
//     totalAssignmentMarks += AssignmentCalculation(AssignmentMark7);

//     // Calculate total marks
//     TotalCalculation(totalTheoryMarks, totalAssignmentMarks);
// }

// // Function to calculate theory marks for a subject
// TheoryCalculation = (theory) => {
//     let calculation = theory / 100 * 100;
//     let finalCalculation = calculation / 100 * 70;
//     return finalCalculation;
// }

// // Function to calculate assignment marks for a subject
// AssignmentCalculation = (assignment) => {
//     let calculation = assignment / 50 * 100;
//     let finalCalculation = calculation / 100 * 30;
//     return finalCalculation;
// }

// // Function to calculate total marks
// TotalCalculation = (totalTheory, totalAssignment) => {
//     let totalMarks = totalTheory + totalAssignment;
//     console.log("Total Marks:", totalMarks);
// }


// Arrays to store theory marks and assignment marks
// let theoryMarks = [];
// let assignmentMarks = [];

// // Function to submit values
// submitValue = () => {
//     // Retrieve values from input fields and push them into respective arrays
//     for (let i = 1; i <= 7; i++) {
//         theoryMarks.push(parseFloat(document.getElementById("theory-" + i).value));
//         assignmentMarks.push(parseFloat(document.getElementById("Assignment-" + i).value));
//     }

//     // Calculate total marks
//     TotalCalculation();
// }

// // Function to calculate theory marks for a subject
// TheoryCalculation = (theory) => {
//     let calculation = theory / 100 * 100;
//     let finalCalculation = calculation / 100 * 70;
//     return finalCalculation;
// }

// // Function to calculate assignment marks for a subject
// AssignmentCalculation = (assignment) => {
//     let calculation = assignment / 50 * 100;
//     let finalCalculation = calculation / 100 * 30;
//     return finalCalculation;
// }

// // Function to calculate total marks
// TotalCalculation = () => {
//     let totalTheoryMarks = 0;
//     let totalAssignmentMarks = 0;

//     // Calculate theory marks for each subject and add to total
//     for (let i = 0; i < theoryMarks.length; i++) {
//         totalTheoryMarks += TheoryCalculation(theoryMarks[i]);
//     }

//     // Calculate assignment marks for each subject and add to total
//     for (let i = 0; i < assignmentMarks.length; i++) {
//         totalAssignmentMarks += AssignmentCalculation(assignmentMarks[i]);
//     }

//     // Calculate total marks
//     let totalMarks = totalTheoryMarks + totalAssignmentMarks;
//     console.log("Total Marks:", totalMarks);
// }


// Function to submit values
// submitValue = () => {
//     // Retrieve theory marks and assignment marks for each subject
//     let totalTheoryMarks = 0;
//     let totalAssignmentMarks = 0;

//     for (let i = 1; i <= 7; i++) {
//         // Retrieve theory mark for each subject
//         let theoryMark = parseFloat(document.getElementById("theory-" + i).value);
//         // Calculate theory marks and add to total
//         totalTheoryMarks += TheoryCalculation(theoryMark);

//         // Retrieve assignment mark for each subject
//         let assignmentMark = parseFloat(document.getElementById("Assignment-" + i).value);
//         // Calculate assignment marks and add to total
//         totalAssignmentMarks += AssignmentCalculation(assignmentMark);
//     }

//     // Calculate total marks
//     let totalMarks = totalTheoryMarks + totalAssignmentMarks;
//     console.log("Total Marks:", totalMarks);
// }

// // Function to calculate theory marks for a subject
// TheoryCalculation = (theory) => {
//     let calculation = theory / 100 * 100;
//     let finalCalculation = calculation / 100 * 70;
//     return finalCalculation;
// }

// // Function to calculate assignment marks for a subject
// AssignmentCalculation = (assignment) => {
//     let calculation = assignment / 50 * 100;
//     let finalCalculation = calculation / 100 * 30;
//     return finalCalculation;
// }


