"use strict";

//list.innerHTML = localStorage.getItem("toDoList");//c'est le lien avec le localstorage en bas

//Formulaire d'ajout de tâches
form.onsubmit = () => {
    const li = document.createElement("li"); //créer un nouveau document
    const spanDel= document.createElement("span");//Ajoute un element 
    spanDel.textContent="[X]";//Donne un ordre à SpanDel
    spanDel.onclick=() => del(li); //Quand on clic sur SpanDel
    li.innerHTML = add.value;//Ajoute un li à la liste 
    
    li.appendChild(spanDel);

    list.appendChild(li);

    add.value = ""; //Remettre le champs à 0
    noTask.style.display ="none";

//localStorage.setItem("toDoList", list.innerHTML)//Pour sauvegarder la liste



    return false; // Cela veut dire que c'est la dernière boucle de l'actioni

}
//Fonction supprimer
function del(element){
    element.remove();

    if(list.innerHTML == "")
    {
        noTask.style.display = "block";
    }
}