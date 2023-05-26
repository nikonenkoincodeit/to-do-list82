export function createMarkup(data = []) {
  return data
    .map(({ id, isDone, message }) => {
      const classEl = isDone ? "checked" : "";
      return `<li class="item ${classEl}" data-id="${id}">
        <p class="text">${message}</p>
        <button type="button" class="button">x</button>
      </li>`;
    })
    .join("");
}
