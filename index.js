const form = document.querySelector("form");
const inputText = document.getElementById("inputForm");
const saveBtn = document.getElementById("saveBtn");
const removeBtn = document.getElementById("removeBtn");
const printMe = document.getElementById("print");

const names = [];
const NAME_SAVED = "name-saved";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const myName = inputText.value;
  const p = document.createElement("p");
  names.push(myName);
  printMe.appendChild(p);
  p.innerHTML = names;
  console.log(names);

  localStorage.setItem(NAME_SAVED, JSON.stringify(names));
  form.reset();
});

removeBtn.addEventListener("click", () => {
  for (let i = 0; i < names.length; i++) {
    names.pop((i = 0));
    printMe.innerText = "";
    const removed = JSON.parse(localStorage.getItem(names));
    const indexFound = removed.findIndex(
      (obj) => obj.names === p.dataset.names
    );
    if (indexFound !== -1) {
      names.splice(indexFound, i);
    }
  }
  form.reset();
});
