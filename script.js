function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  const image = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar-light-mode.png")
    image.setAttribute("alt", "Selfie Arthur com o cabelo grande")
  } else {
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute(
      "alt",
      "Foto Arthur sorrindo blusa de manga comprida preta e correntinnha"
    )
  }
}
