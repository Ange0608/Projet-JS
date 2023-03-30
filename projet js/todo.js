"use strict";

//Formulaire d'ajout de tâches
form.onsubmit = () => {

    const li = document.createElement("li");//créer un nouvelle ligne
    const divContent = document.createElement("div"); //crée une div "content"
    const divDelete = document.createElement("div"); //crée une div "delete"

    list.appendChild(li); //tous les enfants de li
    li.appendChild(divContent);//tous les enfants de la div content
    li.appendChild(divDelete);//tous les enfants de la div delete

    divContent.textContent = add.value; //ajouter du contenu dans la div content
    divDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2zm-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8l-1.4 1.4z"/></svg>';
//ajoute le bouton fermer de la div delete
    divDelete.onclick = () => del(li); //Donne l'ordre de delete li

    add.value = ""; //permet d'ajouter de la valeur dans content

    noTask.style.display = "none"; //quand la valeur est validée "Aucune tache en cours disparait"

    return false; // Cela veut dire que c'est la dernière boucle de l'action
}

//Fonction supprimer
function del(element) { //Ceci est la fonction del
    element.remove();

    if (list.innerHTML == "") { //Si il n'y pas d'élément d'inscrit, la phrase " Aucune tâche ne cours apparaît"
        noTask.style.display = "block";
    }
}