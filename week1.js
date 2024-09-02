function generateTable() {
    let numberData = document.getElementById("number").value;
    let displayData = document.getElementById("display");

    if (numberData !== "" && !isNaN(numberData) && numberData > 0) {
        // Use confirm to ask the user if they want to display the table
        if (confirm("Do you want to display the multiplication table?")) {
            displayData.innerHTML = "";
            let table = document.createElement("table");
            table.style.borderCollapse = "collapse";
            table.style.width = "30%";
            table.style.margin = "10px 0";

            // Create table header row
            let headerRow = table.insertRow();
            let headerCell1 = headerRow.insertCell(0);
            let headerCell2 = headerRow.insertCell(1);

            headerCell1.innerHTML = "Multiplication";
            headerCell2.innerHTML = "Result";
            headerCell1.style.border = "1px solid black";
            headerCell2.style.border = "1px solid black";
            headerCell1.style.padding = "8px";
            headerCell2.style.padding = "8px";
            headerCell1.style.fontWeight = "bold";
            headerCell2.style.fontWeight = "bold";

            // Generate table rows for multiplication results
            for (let i = 1; i <= 10; i++) {
                let row = table.insertRow();
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                cell1.innerHTML = numberData + " x " + i;
                cell2.innerHTML = numberData * i;

                // Apply border and padding styles to cells
                cell1.style.border = "1px solid black";
                cell2.style.border = "1px solid black";
                cell1.style.padding = "4px";
                cell2.style.padding = "4px";
            }

            // Append the table to the display div
            displayData.appendChild(table);
        } else {
            displayData.innerHTML = "";  // Clear the display if the user cancels
        }

    } else {
        displayData.innerHTML = "Please enter a valid number";
        alert("Please enter a valid number");
    }
}
