function toggleMode() {

  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
    const img = document.querySelector("#profile img")


    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/avatar-lightLivia.png")
    } else {
      img.setAttribute("src", "./assets/dark-mode-livia.png")
    }

  //substituir a imagem
  //se tiver light mode, adicionar a imagem light
  //se tiver sem might mode, manter a imagem normal

}

