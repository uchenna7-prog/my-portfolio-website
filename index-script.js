darkMode = true
const changeBorderColorContainers = document.querySelectorAll(".change-border-color-container")
const changeBackgroundColorContainers = document.querySelectorAll(".change-background-color-container")
const changeTextColorContainers = document.querySelectorAll(".change-text-color-container")
const changeBackgroundImageContainers = document.querySelectorAll(".change-background-image-container")
const changeButtonColorContainers = document.querySelectorAll(".change-button-color-container")
const sendButton = document.getElementById("send-button")
const homePage = document.getElementById("home-page")
const socialIcons = document.querySelectorAll(".social-icon")

const homeButton = document.getElementById("home-button")

const backToTopTextAndIconContainer = document.getElementById("back-to-top-text-and-icon-container")

const mobileMenuOptions =  document.querySelectorAll(".mobile-link");
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

const contrastButton = document.getElementById("contrast-button");



homeButton.addEventListener("click",e=>{
  e.preventDefault()
  window.scrollTo({top:0,behaviour:"smooth"})
})
backToTopTextAndIconContainer.addEventListener("click",e=>{
  e.preventDefault()
  window.scrollTo({top:0,behaviour:"smooth"})
})

contrastButton.addEventListener("click", () => {
  contrastButton.textContent = "light_mode"
  if(darkMode){
    darkMode = false

    sendButton.classList.toggle("light-mode")
    homePage.classList.toggle("light-mode")
    mobileMenu.classList.toggle("light-mode")
    changeBorderColorContainers.forEach(container=>{
      container.classList.toggle("light-mode-border")
    })

    changeTextColorContainers.forEach(container=>{
      container.classList.toggle("light-mode-text")
    })

    changeBackgroundColorContainers.forEach(container=>{
      container.classList.toggle("light-mode-background")
    })
    changeBackgroundImageContainers.forEach(container=>{
      container.classList.toggle("light-mode-image")
      console.log(container.style.backgroundImage)
    })
    changeButtonColorContainers.forEach(container=>{
      container.classList.toggle("light-mode-button")
    })
    socialIcons.forEach(icon=>{
      icon.classList.toggle("light-mode")
    })
  }

  else{
    darkMode = true


    sendButton.classList.toggle("light-mode")
    homePage.classList.toggle("light-mode")
    mobileMenu.classList.toggle("light-mode")
    changeBorderColorContainers.forEach(container=>{
      container.classList.toggle("light-mode-border")
    })

    changeTextColorContainers.forEach(container=>{
      container.classList.toggle("light-mode-text")
    })

    changeBackgroundColorContainers.forEach(container=>{
      container.classList.toggle("light-mode-background")
    })
    changeBackgroundImageContainers.forEach(container=>{
      container.classList.toggle("light-mode-image")
    })
    changeButtonColorContainers.forEach(container=>{
      container.classList.toggle("light-mode-button")
    })
    socialIcons.forEach(icon=>{
      icon.classList.toggle("light-mode")
    })

  }

});




menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  if(mobileMenu.classList.contains("active")){
    menuButton.textContent =  "close";

  }
  else{
    menuButton.textContent =  "menu";

  }
});




