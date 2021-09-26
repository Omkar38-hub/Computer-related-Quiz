var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score=0;

var highScorer=[
  {
  name:"Omkar",
  score:10,
  },
  {
  name:"Abhinav",
  score:9,
  },
]

function welcomeMessage()
{
  var userName=readlineSync.question("What is your name? ");
  console.log(chalk.blue.underline.bold("Welcome🙏 "+userName+" in General Knowledge Quiz App"));
  console.log(".....................................");
}


var questionBank=[
  {
    question:"One nibble is equal to how many bits?",
    answer:"4 bits",
    options:["8 bits","4 bits","12 bits","16 bits"],
  },
   {
    question:"Information can be stored or retrieved from memory location through its? ",
    answer:"Address",
    options:["Input","Value","Variable declaration","Address"],
  },
   {
    question:"The lowest form of Computer language is called?",
    answer:"Machine Language",
    options:["BASIC","FORTRAN","Machine Language","COBOL"],
  },
   {
    question:"The common name for the crime of stealing passwords is ?",
    answer:"spoofing",
    options:["spooling","identity theft","spoofing","hacking"],
  },
   {
    question:"NOS stands for?",
    answer:"Network Operating system",
    options:["Node operating system","Network Operating system","Non-open software","Non-operating software"],
  },
  {
    question:" _______ are software which is used to do a particular task?",
    answer:"Program",
    options:["Operating system","Software","Data","Program"],
  },
  {
    question:"If a computer has more than one processor then it is known as?",
    answer:"Multiprocessor",
    options:["Multiprocessor","Uniprocess","Multithreaded","Multiprogramming"],
  },
  {
    question:"Macintosh an operating system is product of?",
    answer:"Apple",
    options:["Apple","Microsoft","Intel","Google"],
  },
  {
    question:"Full form of URL is?",
    answer:"Uniform Resource Locator",
    options:["Uniform Resource Locator","Uniform Resource Link","Uniform Resgistered Link","Unified Resource Link"],
  },
  {
    question:"The rule of language is known as?",
    answer:"Syntax",
    options:["Code","Structure","Procedure","Syntax"],
  },
]

function show(ques,ans,option)
{
  var index = readlineSync.keyInSelect(option,ques);
  if(option[index]===ans)
  {
    console.log(chalk.green.bold("Yaah!!🥳🥳 you are RIGHT."));
    score++;
  }
  else
  {
    console.log(chalk.red.bold("Oh! you are WRONG."));
  }
  console.log(chalk.white.bgYellow.bold("Your current score is ",score));
  console.log("..................................");
}
function displayQuiz()
{
   for( let i=0;i<questionBank.length;i++)
   {
     var currQues=questionBank[i];
     show(currQues.question,currQues.answer,currQues.options);
   }
}


function displayScore()
{
  console.log("YAY! You SCORED: ", score,"out of 10");
  console.log(chalk.blue.bold("Check out the high scorers, if you should be there then ping me and I'll update that"));
  console.log(".....................................");
  console.log(chalk.yellow.bold("List of top two scorer are"));
  highScorer.map(
    function(score1)
    { 
      console.log(score1.name, " : ", score1.score)
    }
    )
}





welcomeMessage();
displayQuiz();
displayScore();