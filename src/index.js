let names = ["Brian", "Danny", "Diana", "Evan", "Kai", "Larry", "Lorraine", "Nahum", "Nick F.", "Nick K.", "Orlando", "Quentin", "Roman", "Soob"];

let nameDropdown = document.getElementById("name-dropdown");

document.addEventListener("DOMContentLoaded", () => {
    names.forEach((name) => {
        newValue = document.createElement("option");
        newValue.setAttribute("value", name);
        newValue.setAttribute("id", name);
        newValue.textContent = name;
        nameDropdown.appendChild(newValue);
    })
})

document.getElementById("name-select-button").addEventListener("click", (e) => {
    e.preventDefault();

    if (nameDropdown.value != "") {
        addNameToList(nameDropdown.value);
        nameDropdown.value = "";
    }
    else {
        window.alert("Please select a name!");
    }
})

document.getElementById("random-name-button").addEventListener("click", () => {
    let idx = Math.floor(Math.random() * (names.length - 1));
    addNameToList(names[idx]);
})

function addNameToList(name) {
    if (names.length > 0) {
        let nameList = document.getElementById("name-list");
        let newListItem = document.createElement("li");

        newListItem.textContent = name;
        newListItem.setAttribute("id", `${name}-list-item`);

        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete-button");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => {
            document.getElementById(`${name}-list-item`).remove();
            document.getElementById(name).removeAttribute("hidden");
            names.push(name);
        })

        newListItem.append(deleteButton);
        nameList.appendChild(newListItem);

        names.splice(names.indexOf(name), 1);

        document.getElementById(name).setAttribute("hidden", "");
    }
    else {
        window.alert("All names selected!");
    }
}
