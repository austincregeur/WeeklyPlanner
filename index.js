const draggables = document.querySelectorAll(".item");
let item = null;

draggables.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
  //elem.addEventListener("dragend", dragEnd);
});

const droppables = document.querySelectorAll(".day");

droppables.forEach(elem => {
    //elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
  });
// Drag and Drop Functions

function dragStart(event) {
  event.dataTransfer.setData("text/plain", this.id)
  console.log(event.dataTransfer.getData("text/plain"))
  item = this;
}

function dragEnd(event) {
    
}

function dragOver(event) {
  event.preventDefault();
  this.style.filter = "brightness(0.75)"
}

function dragLeave(event){
    this.style.backgroundColor = "#eee";
    this.style.filter = "brightness(1)"
}


function drop(event) {
    this.append(item);
    this.style.backgroundColor = "#eee";
    this.style.filter = "brightness(1)"
}




