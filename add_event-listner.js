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
// Number 2 is the end and number 3 is the beginning of the stop watch project
