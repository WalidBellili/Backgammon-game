let item;


document.addEventListener("dragstart", (e) => {
    item = e.target;
} )
document.addEventListener("dragover", (e) => {
    e.preventDefault()
})
document.addEventListener("drop", (e) => {
    e.preventDefault(e);
    e.target.appendChild(item);
})