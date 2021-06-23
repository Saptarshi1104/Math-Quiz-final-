player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

playerx1_score = 0;
playerx2_score = 0;
console.log(playerx1_score);
console.log(playerx2_score);

function names(){
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
}

function score(){
document.getElementById("player1_score").innerHTML = playerx1_score;
document.getElementById("player2_score").innerHTML = playerx2_score;
}

function qa(){
document.getElementById("questioner").innerHTML = "Question Turn - " + player1_name;
document.getElementById("answerer").innerHTML = "Answer Turn - " + player2_name;
}

function send(){
number1 = document.getElementById("number_1").value;
number2 = document.getElementById("number_2").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
input_box = "<br> Answer : <input type='text' id='answer'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number_1").value = "";
document.getElementById("number_2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
get_answer = document.getElementById("answer").value;
if(get_answer == actual_answer){
if(answer_turn == "player1"){
update_player1_score = playerx1_score + 1;
playerx1_score = update_player1_score;
document.getElementById("player1_score").innerHTML = update_player1_score;
}
else{
update_player2_score  = playerx2_score + 1;
playerx2_score = update_player2_score;
document.getElementById("player2_score").innerHTML = update_player2_score;
}
}
if(question_turn == "player1"){
question_turn = "player2";
document.getElementById("questioner").innerHTML = "Question Turn - " + player2_name;
}
else{
question_turn = "player1";
document.getElementById("questioner").innerHTML = "Question Turn - " + player1_name;
}
if(answer_turn == "player1"){
answer_turn = "player2";
document.getElementById("answerer").innerHTML = "Answer Turn - " + player2_name;
}
else{
answer_turn = "player1";
document.getElementById("answerer").innerHTML = "Answer Turn - " + player1_name;
}
console.log(update_player1_score);
console.log(update_player2_score);
}