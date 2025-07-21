let jobDescriptionDiv = document.getElementById("job-title");
let sentence1 = "a fullstack web developer";
let sentence1WordList = sentence1.split("");
let lenghtSentence1 = sentence1WordList.length;

let sentence2 = "an innovator";
let sentence2WordList = sentence2.split("");
let lenghtSentence2 = sentence2WordList.length;

let currentSentence = sentence1WordList
let currentSentenceLenght = currentSentence.length

let list = []
let i = 0;
let sentenceCompleted = false;
let sentenceChanged = false;
let speed = 100

function join(list){
    let sentence = "";
    list.forEach(element => {
        sentence += element;   
    });
    return sentence;

}
setInterval(()=>{
   
    if (i < currentSentenceLenght && sentenceCompleted === false){
        list.push(currentSentence[i])
        let sentence = join(list)
        jobDescriptionDiv.textContent = sentence ;
        i++
        if (i === currentSentenceLenght){
            sentenceCompleted = true;
        }
    }
    else {
        let sentence = ""
        i--
        if (i >= 0){ 
            list.pop(i)
            sentence = join(list)
            jobDescriptionDiv.textContent = sentence ;

        }
        else{
            i = 0
            sentenceCompleted = false;
            if (currentSentence === sentence1WordList){
                currentSentence = sentence2WordList;

            }
            else{
                currentSentence = sentence1WordList;

            }
            
            currentSentenceLenght = currentSentence.length
            list = []
        }
       

    }
    

},speed)






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
