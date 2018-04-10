const studentDomBuilder = (gender) => {

    // Array of student objects
    StudentDatabase.students.forEach(
        currentStudent => {
            // Build the DOM components

            if (gender === currentStudent.gender ||
                    typeof gender === "undefined") {
                // Section first
                const studentSection = document.createElement("section")

                // h2 child component of section
                const studentName = document.createElement("h2")
                studentName.textContent = currentStudent.name
                studentSection.appendChild(studentName)

                // p child component of section
                const studentBP = document.createElement("p")
                studentBP.textContent = currentStudent.birthPlace
                studentSection.appendChild(studentBP)

                // Append HTML representation of student to the DOM
                studentBodyRef.appendChild(studentSection)
            }

        }
    )


}


studentDomBuilder("M")
