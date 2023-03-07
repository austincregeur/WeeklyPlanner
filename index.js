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
  item = this;
}

function dragEnd(event) {
    
}

function dragOver(event) {
  event.preventDefault();
  this.style.backgroundColor = "grey"
}

function dragLeave(event){
    this.style.backgroundColor = "white";
}


function drop(event) {
    this.append(item);
    this.style.backgroundColor = "white";
}