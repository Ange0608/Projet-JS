function makeGroups() {
    let names = document.getElementById("input").value.trim().split(",");
    let groupCount = parseInt(document.getElementById("groupCount").value);
    let groups = [];

    // Mélanger les noms
    for (let i = names.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = names[i];
        names[i] = names[j];
        names[j] = temp;
    }

    // Répartir les noms dans les groupes
    let groupSize = Math.ceil(names.length / groupCount);
    for (let i = 0; i < groupCount; i++) {
        let start = i * groupSize;
        let end = start + groupSize;
        groups.push(names.slice(start, end));
    }

    // Affichage des groupes
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    for (let i = 0; i < groups.length; i++) {
        let groupDiv = document.createElement("div");
        groupDiv.className = "group";
        for (let j = 0; j < groups[i].length; j++) {
            let nameSpan = document.createElement("span");
            nameSpan.innerHTML = groups[i][j];
            groupDiv.appendChild(nameSpan);
        }
        outputDiv.appendChild(groupDiv);
    }
}