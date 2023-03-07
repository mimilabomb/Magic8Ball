const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answersArr = [
  "Mój wywiad donosi: NIE",
  "Wygląda dobrze",
  "Kto wie?",
  "Zapomnij o tym",
  "Tak - w swoim czasie",
  "Prawie jak tak",
  "Nie teraz",
  "YES, YES, YES",
  "To musi poczekać",
  "Mam pewne wątpliwości",
  "Możesz na to liczyć",
  "Zbyt wcześnie aby powiedzieć",
  "Daj spokój",
  "Absolutnie",
  "Chyba żatrujesz?",
  "Na pewno nie",
  "Zrób to",
  "Prawdopodobnie",
  "Dla mnie rewelacja",
  "Na pewno tak",
  "Nie i chuj!",
];

const shakeBall=()=>{
    ball.classList.add('shake-animation')
    setTimeout(checkInput,1000)
}

const checkInput = () => {
  if (input.value !== "" && input.value.slice(-1)==='?') {
    generateAnswer();
    error.textContent='';
  } else if (input.value !== "" && input.value.slice(-1)!=='?'){
    error.textContent='Pytanie musi być zakończone znakiem "?".';
    answer.textContent="";
  }else{
    error.textContent='Musisz zadać jakieś pytanie!';
    answer.textContent="";
  }
  ball.classList.remove('shake-animation')
}

const generateAnswer = () => {
  const number = Math.floor(Math.random() * 21);
  answer.innerHTML = `<span>Odpowiedz: </span> ${answersArr[number]}`;
};

ball.addEventListener("click", shakeBall);




