/*Developer:-Nishant Kumar
AppName:-JavaScript Practice
Created At:-Aspire Software Consultancy*/


//function for current time clock
function startTime(){
var today=new Date();
var t=today.toLocaleTimeString();
document.getElementById('txt').innerHTML=t;
t=setTimeout(function(){startTime()},500);
}

//=====================================================================================================================

//function to calculate times of a number	
function times(){
var num=prompt("Enter a number for which u want its times","");
var i;
var num=parseInt(num);
for(i=1;i<=num;i++)
{
var num1=i*num;
document.write(num+"*"+i+"="+num1+"<br />");
}
}

//===========================================================================================================================
	
// check user input
function jrPrgmr(){
var userAge = prompt("Please enter your age");
/*if(userAge==true){*/
if (userAge < 18)
{
var age=alert("Sorry, But you r below age limit to go further...!");
if(age==true){jrPrgmr()}
else{jrPrgmr()}
}
else if ( userAge > 18 && userAge < 40)
{
alert("Thanks for visiting my page...!");
alert("Redirecting to the original page............");
newWindow('test.html','_self');
}
else
{
alert("Sorry you are overage to go through...!");
}
/*}
else if(userAge==false){alert("You must have to enter some number...!")}*/
}
 
//===========================================================================================================================
 
 
// name concatenation
function fullName(){
var x;
var fname=prompt("Please enter your first name","");
var lname=prompt("Please enter your last name","");
if (fname!=null && lname!=null)
{
x=fname+" "+lname;
alert("Hi "+x+" ! How R U...???")
}
}

//===========================================================================================================================

// random car display
function carRandom(){
var i;
var cars = new Array();
cars[0] = "TATA";
cars[1] = "Volvo";
cars[2] = "BMW";
cars[3] = "Saab";
cars[4] = "Renault";
i=Math.floor(cars.length*Math.random())
alert(cars[i]);
}

//===========================================================================================================================


// choice of ice cream using switch
function iceCreamSwitch(){
var x;
var iceCream=prompt("Please tell me your favorite icecream flavour","")
switch(iceCream)
{
case "vanilla":
{
alert("So u love "+iceCream)
break;
}
case "chocolate":
			{
			alert("So u love "+iceCream)
			break;
			}
			case "strawberry":
			{
			alert("So u love "+iceCream)
			break;
			}
			default:
			{
			alert("So u don't love IceCream")
			break;
			}
    }
  
}

//===========================================================================================================================

// choice of ice cream using if-else
function iceCreamIfElse(){
var x;
var iceCream=prompt("Please tell me your favorite icecream flavour","")
if (iceCream=="vanilla")
{
		alert("So u love "+iceCream)
	}
	else if(iceCream=="strawberry")
	{
		alert("So u love "+iceCream)
	}
	else if(iceCream=="fruitnut")
	{
		alert("So u love "+iceCream)
	}
	else if(iceCream=="chocolate")
	{
		alert("So u love "+iceCream)
	}
	else
	{
		alert("So u don't love IceCream..!!")
	}
}

//===========================================================================================================================

// simple number prompt and calculation
function numberMath(){
var x;
var fnum=prompt("Please enter your first number","");
var lnum=prompt("Please enter your last number","");
if (fnum!=null && lnum!=null)
	{
		x=parseInt(fnum)+parseInt(lnum);
		alert(fnum+"+"+lnum+"="+x)
	}
}
//===========================================================================================================================


// check email field validation
function emailchk()
{
// E-mail-Validation (c) Henrik Petersen / NetKontoret
// Explained at www.echoecho.com/jsforms.htm
// Please do not remove the this line and the two lines above.
/*with (entered)
{*/
var apos=document.login.email.value.indexOf("@");
var dotpos=document.login.email.value.lastIndexOf(".");
var lastpos=document.login.email.value.length-1;
if (apos<1 || dotpos-apos<2 || lastpos-dotpos>3 || lastpos-dotpos<2 || document.login.email.value=="") 
{
			document.bgColor='#ffff00';
			alert("Email Field Either left BLANK or Entered Incorrect");
			document.login.email.focus();	
	/*if (alertbox) {alert(alertbox);} return false;}
else {return true;}*/
}else{return true;}
}//===========================================================================================================================


// blank field submission prohibition
function validateUname(){
if(document.login.uname.value=="")
	{
		document.bgColor='#ffff00';
		alert ("Username Field left BLANK..!")
		document.login.uname.focus();

	}
	
}
//===========================================================================================================================

function validatePwd(){
if(document.login.pwd.value=="")
	{
		document.bgColor='#ffff00';
		alert ("Password Field left BLANK..!")

		document.login.pwd.value.focus();
	}
	
}
//===========================================================================================================================

//===========================================================================================================================

function thanks(){

alert("Thank you for visiting my JavaScript practice page...!");
window.close()
}
//===========================================================================================================================


 function winClose(){
window.onbeforeunload = function () {
 return "Are you sure that you want to leave this page?";
 }
}
//===========================================================================================================================



function newWindow(x,y){
var newWin=window.open(x,y);

}
//===========================================================================================================================


function finale()
{
var var1=confirm("Thanks for visiting my JavaScript Practice Page...!");
	if(var1==true)
	{	
		location.reload();
	}
}
//===========================================================================================================================

function randomNum()
{
alert(Math.floor((Math.random()*200)+1));
}

function screenWidth(){
alert("Available Width: " + screen.availWidth);
}
//===========================================================================================================================

function showHide(){
	$(document).ready(function(){
							   $("divForm2").show().siblings().hide();
							   });}