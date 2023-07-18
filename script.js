function mudaTema() {
  const html = document.documentElement
  html.classList.toggle("light")

  
  const img = document.getElementById("imgAvatar")

 
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./img/avatar-claro.png")
  } else {
    img.setAttribute("src", "./img/avatar.png")
  }
}
