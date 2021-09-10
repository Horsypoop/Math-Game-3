var player1=localStorage.getItem("player1_name");
var player2=localStorage.getItem("player2_name");
var player1Score=0;
var player2Score=0;
var random_number= Math.floor(Math.random()*2);
var math_symbol="";

document.getElementById("player1_name").innerHTML = player1 +": ";
document.getElementById("player2_name").innerHTML = player2 +": ";


document.getElementById("player1_score").innerHTML=player1Score;
document.getElementById("player2_score").innerHTML=player2Score;


document.getElementById("Question_turn").innerHTML = player1;
document.getElementById("Answer_turn").innerHTML = player2;


if(random_number=1){
math_symbol="x";
}   

function Numbers(){
    var number1 = document.getElementById("Number_1").value;
    var number2 = document.getElementById("Number_2").value;
    total=number1+math_symbol+number2;
    console.log(total);
    
    question_word = "<h4 id='word_display'>"+total+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML = row;
        
}