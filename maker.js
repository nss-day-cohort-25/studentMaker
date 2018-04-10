const studentBodyRef = document.querySelector("#studentBody")

const studentDomBuilder = (gender) => {

    let row = document.createElement("div")


    // Array of student objects
    StudentDatabase.students.forEach(
        currentStudent => {
            // Build the DOM components

            if (row.childNodes.length % 3 === 0) {
                studentBodyRef.appendChild(row)
                row = document.createElement("div")
            }

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
                row.appendChild(studentSection)
            }

        }
    )


}


studentDomBuilder()
