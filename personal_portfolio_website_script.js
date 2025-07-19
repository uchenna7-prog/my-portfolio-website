let navigationButton = document.querySelector("#navigation-button");
let navigationBar = document.querySelector("nav");
let navigationOptionContainers = document.querySelectorAll(".nav-option-container")
let houseModelPicturesPageBtn = document.querySelector("house-project-button")

navigationButton.addEventListener("click",
    function(){
        if (navigationButton.textContent === "≡"){
            navigationBar.style.display = "block"
            navigationButton.textContent = "X"
        }
        else{
            navigationBar.style.display = "none"
            navigationButton.textContent = "≡"
        }
    }
)

navigationOptionContainers.forEach(element => {
    element.addEventListener("click",
        function(){
            navigationBar.style.display = "none";
            navigationButton.textContent = "≡"
        }
    )
});
