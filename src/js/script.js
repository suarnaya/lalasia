// fungsi klik nav
const navToggle = document.querySelector(".nav-toggle")
const navItem = document.querySelector(".nav-item")
const navUser = document.querySelector(".user")

navToggle.addEventListener("click", () => {
  navItem.classList.toggle("active")
  navUser.classList.toggle("active")
})

// fungsi gullir produk
const leftBtn = document.querySelector("#left-btn")
const rightBtn = document.querySelector("#right-btn")
const container = document.querySelector(".product-wrapper")
const scrollField = document.querySelector(".product-scroll-wrapper")

let maxScroll = -scrollField.offsetWidth + container.offsetWidth
let scrollAmount = document.querySelectorAll(".product-list")[0]
let currentPosition = 0

function scrollHorizontally(val) {
  currentPosition += (val * scrollAmount.offsetWidth * 10) / 9

  if (currentPosition >= 0) currentPosition = 0

  if (currentPosition <= maxScroll) currentPosition = maxScroll

  scrollField.style.left = currentPosition + "px"
}

leftBtn.addEventListener("click", () => {
  scrollHorizontally(1)
})

rightBtn.addEventListener("click", () => {
  scrollHorizontally(-1)
})
