const studentBodyRef = document.querySelector("#studentBody")

/*
    This function's reponsibility is to generate DOM components
    that are HTML representations of the student data
*/
const studentDomBuilder = (gender) => {

    // Create a block element that will hold three student components
    let row = document.createElement("div")
    row.className = "studentRow"

    /*
        Iterate over the array of students in the database that was
        retrieved from localStorage in database.js
    */
    StudentDatabase.students.forEach(
        (currentStudent, monkeyButt) => {

            /*
                When three student components have been added to the
                parent div, append the current div to the top-level
                article and create a new div
            */
            if (monkeyButt !== 0 && row.childNodes.length % 3 === 0) {
                studentBodyRef.appendChild(row)
                row = document.createElement("div")
                row.className = "studentRow"
            }

            /*
                Only display the students that are the same gender
                as the argument value. If no value was provided,
                display all students.
            */
            if (!gender || gender === currentStudent.gender) {

                // Section first
                const studentSection = document.createElement("span")
                studentSection.classList = "bordered student"

                // Apply different class based on student gender
                if (currentStudent.gender === "M") {
                    studentSection.classList += " male"
                } else if (currentStudent.gender === "F") {
                    studentSection.classList += " female"
                }

                // h2 child component of section
                const studentName = document.createElement("h2")
                studentName.classList = "student__title"
                studentName.textContent = currentStudent.name
                studentSection.appendChild(studentName)

                // p child component of section
                const studentBP = document.createElement("p")
                studentBP.classList = "student__birthplace"
                studentBP.textContent = currentStudent.birthPlace
                studentSection.appendChild(studentBP)

                // Append HTML representation of student to the DOM
                row.appendChild(studentSection)
            }
        }
    )

    // Just in case there are an exact multiple of 3 students, add the last row
    if (row.childNodes.length) {
        studentBodyRef.appendChild(row)
    }

}

studentDomBuilder()
