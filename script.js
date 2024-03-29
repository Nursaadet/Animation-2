const cursor = document.createElement("div");
cursor.className = "cursor";

const div = document.createElement('div')
cursor.append(div)
document.body.append(cursor);

document.documentElement.addEventListener("mousemove", (e) => {
  cursor.style.setProperty("--top", e.clientY + "px");
  cursor.style.setProperty("--left", e.clientX + "px");
  cursor.className = `cursor ${e.target.dataset.cursor || ''}`

  switch (e.target.tagName) {
    case "A":
      cursor.classList.add("link")
      break
    case "IMG":
      cursor.classList.add('image')
      break
    default:
      cursor.className = "cursor";
  }
});
