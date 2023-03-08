let categories = ["school", "home", "work", "social"];

categories.forEach(item => {
    let label = Array.from(document.querySelectorAll(`.${item}.label`));
    if (label) label = label[0];
    let elements = Array.from(document.getElementsByClassName(item));
    if(label){
        label.addEventListener("mouseover", () => {
           elements.forEach(element => {
            element.style.boxShadow = "5px 5px 15px black";
           })
        })
        label.addEventListener("mouseout", () => {
            elements.forEach(element => {
             element.style.boxShadow = "none";
            })
         })
    }
})