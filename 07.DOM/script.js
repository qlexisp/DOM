console.log("Document Title", document.title);
document.title = "Modifying the DOM";
document.body.style.backgroundColor = "#E26EE5";

const secondChild = document.body.children[1];
for (const child of secondChild.children) {
    console.log(child);
}