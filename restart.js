/* 5 questions it  must have 
it is supposed to show correct answers and so on
how many questions left we shoud show 
we should rank the students*/
// var score=0;
var score=0;
var ques=5;
var info=prompt("How many planets are there ? " +ques+" questions left");
var change=parseInt(info);
if (change===8) {
	score+= 1
} else{
	score+=0
}
ques-=1;
var info1=prompt("What does HTML represent? "  +ques+" questions left");
if (info1.toUpperCase()==="HYPERTEXT MARKUP LANGUAGE") {
	score+=1
}else{
	score+=0
}
ques-=1;
var info2=prompt("What is my name? "+ ques+" questions left" );
if (info2.toUpperCase()==="VALISHER") {
	score+=1
}else{
	score+=0
}
ques-=1;
var info3=prompt("How many goats do I have? " + ques+" questions left");
var change1=parseInt(info3);
if(change1===2) {	
	score+=1
}else{
	score+=0
}
ques-=1;
var info4=prompt("Are you a student? " + ques+" questions left");
if (info4==="yess" || info4==="y") {	score+=1
}else{
	score+=0
}
if (score===1 || score===2) { 
document.write("You won bronsa. Congratulations!!!!!!");
} else if (score===3 || score===4) {
	document.write("You won silver. Congratulations!!!!!!");
}else if (score===5) {
	document.write("You won gold. Congratulations!!!!!!");
}else{
	document.write("Unfortunatly your score is to low !!!!!!");
}
document.write("Your score is "+score);


/*5goald reward
4||3 silver
2||1 bronsa
0 no reward at all*/
