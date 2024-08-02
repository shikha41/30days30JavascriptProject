const notesConatiner = document.querySelector(".note-container");
const btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesConatiner.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
  localStorage.setItem("notes", notesConatiner.innerHTML);
}

btn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let inputImg = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  inputImg.src = "images/delete.png";

  notesConatiner.appendChild(inputBox).appendChild(inputImg);
  console.log(notesConatiner);
});

notesConatiner.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
