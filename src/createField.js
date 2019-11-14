let container = document.createElement("div");
container.class = "container"
document.body.appendChild(container)

const createField = (fieldSize) => {
    for (let i = 0; i < fieldSize[0]; i++) {
        let row =  document.createElement("div");
        row.className = i + "row";
        container.appendChild(row);
        
        for(let j = 0; j < fieldSize[1]; j++) {
            let button = document.createElement("button")
            row.appendChild(button)
        }
    }
}

export { createField }