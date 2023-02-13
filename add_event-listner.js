const change_class_text = document.querySelector(".class");
document.querySelector(".button_class").addEventListener("click", function () {
  change_class_text.textContent = "This class is work";
});

const id_query = document.getElementById("id_query");
document
  .getElementById("id_query_button")
  .addEventListener("click", function () {
    id_query.innerText =
      "I'm the querySelector for id and i am change when click the button";
  });

const id = document.getElementById("id");
document.querySelector(".button_id").addEventListener("click", () => {
  id.innerText = "I am also work";
});

// Adding Content part
// Add hello text
document.getElementById("add_hello_btn").addEventListener("click", () => {
  const add_hello_text = document.getElementById("add_hello_text");
  const add_hello_text_innerText = add_hello_text.innerText;
  add_hello_text.textContent = `${add_hello_text_innerText} Hello`;
  console.log(add_hello_text_innerText);
});

// increase number
document
  .getElementById("number_increase_button")
  .addEventListener("click", () => {
    const increase_number = document.getElementById("increase_number");
    const getInnerText = increase_number.innerText;
    const convertToNumber = parseInt(getInnerText);
    increase_number.innerText = convertToNumber + 1;
    console.log(convertToNumber);
  });
// Number 4 is the end and number 5 is the beginning of the stop watch project
