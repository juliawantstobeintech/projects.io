let userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//question

const userQuestion = 'do I know Java?';
console.log(`you asked ${userQuestion}`);

//random number generator

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = '';

switch (randomNumber) {
  case 8:
    eightBall = 'It is certain';
    break;
  case 7:
    eightBall = 'It is decidedly so';
    break;
  case 6:
    eightBall = 'Signs point to yes';
    break;
  case 5:
    eightBall = 'Reply hazy try again';
  case 4:
    eightBall = 'can not confirm';
    break;
  case 3:
    eightBall = 'I do not believe so';
    break;
  case 2:
    eightBall = 'Outlook not so good';
    break;
  case 1:
    eightBall = 'Do not count on it';
    break;
  case 0:
    eightBall = 'My sources say no';
    break;
  default:
    eightBall = 'Cannot predict now';
    break;
}

console.log(`Magic eight ball says the answer is ${eightBall}!`)
