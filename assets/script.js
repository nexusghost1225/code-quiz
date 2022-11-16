var questions
 
var questions = document.getElementsByClassName('Q2');
if (questions.style.display === 'hidden') {
  questions.style.display = 'block';  
} else {
questions.style.display = 'none'    
}

document.getElementsByClassName("button").onclick = (startGame)
console.log