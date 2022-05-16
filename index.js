function AddToList(){

    var ListContainer = document.getElementById("ListContainer");
    var ElementToAdd = document.createElement("div");
    var ElementBody = document.createElement("div");
    var InputBox = document.getElementById("ThingToDo");
    ElementToAdd.className = "card";
    ElementBody.className = "card-body";

    if(InputBox.value === ""){

        return;

    }

    ElementBody.innerHTML = InputBox.value;
    InputBox.value = "";
    ElementToAdd.append(ElementBody);
    ListContainer.append(ElementToAdd);

}