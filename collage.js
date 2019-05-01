const images = [
  "image-1.jpg",
  "image-2.jpg",
  "image-3.jpg",
  "image-4.jpg",
  "image-5.jpg",
  "image-6.jpg",
]

let i = 0

function placeImage(x, y) {
  const nextSrc = images[i]
  
  const img = document.createElement("img")
  img.setAttribute("src", nextSrc)
  img.setAttribute("draggable", "false")
  
  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"
  
  document.getElementById("right").appendChild(img)
  i = i + 1
  if (i >= images.length) {
    i = 0
  }
}

function placeImageTouch(screenX, screenY) {
  const nextSrc = images[i]
  
  const img = document.createElement("img")
  img.setAttribute("src", nextSrc)
  img.setAttribute("draggable", "false")
  
  img.style.left = screenX + "px"
  img.style.top = screenY + "px"
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"
  
  document.getElementById("right").appendChild(img)
  i = i + 1
  if (i >= images.length) {
    i = 0
  }
}

function removeImage() {
  const simg = document.getElementById("right").firstChild.innerHTML
  document.getElementById("right").removeChild("simg")
}

let mouse = 0

document.getElementById("right").addEventListener("mousemove", function (event) {
  event.preventDefault()
  mouse = mouse + 1
  if(mouse % 20 == 0) {
    placeImage(event.pageX, event.pageY)  
  }
  removeImage();
})

document.getElementById("right").addEventListener("touchend", function (event) {
  event.preventDefault()
  placeImageTouch(event.clientX, event.clientY)
})











