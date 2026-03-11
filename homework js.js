    let list = document.getElementById("taskList");

    function addTask() {

    let text = document.getElementById("taskInput").value;
    let date = document.getElementById("dateInput").value;

    if (text === "") return;

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.innerText = text;

    checkbox.onclick = function () {
        if (checkbox.checked) {
        span.style.textDecoration = "line-through";
        } else {
        span.style.textDecoration = "none";
        }
    };

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";

    removeBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(span);

    if (date !== "") {
        let d = document.createElement("small");
        d.innerText = " (" + date + ")";
        li.appendChild(d);
    }

    li.appendChild(removeBtn);

    list.appendChild(li);

    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";
    }