import { uid } from "uid";
import { formEl, listEl } from "./refs";
import { getData, saveData, createArrayData } from "./api";
import { createMarkup } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const dataForm = Object.fromEntries(new FormData(e.target)); // !!!
  // console.log(e.target.elements.message.value.trim());
  // const message = e.target.elements.message.value.trim();
  if (!dataForm.message.trim()) {
    return;
  }
  const dataObj = fabric(dataForm);
  console.log(dataObj);
  createArrayData(dataObj);
  const markup = createMarkup([dataObj]);
  addMarkup(markup);
  e.target.reset();
}

function fabric(data) {
  return { ...data, id: uid(), isDone: false };
}

function addMarkup(markup) {
  listEl.insertAdjacentHTML("beforeend", markup);
}

// при завантаженні сторінки отримувати данні з ЛС і завантажувати розмітку
// при кліку на БТН "Х" отримувати ІД і видаляти {}
// при кліку на текст змінювати is-done false на true + додавати class "checked"
