const text = [
  "Lembro o dia em que mandei mensagem, 06 de outubro de 2025 tudo mudou.",
  "Nesse dia toda a minha vida mudou, você trouxe a luz que nunca imaginei.",
  "Todos os dias me apaixono cada vez mais por você e quero passar a minha vida ao seu lado.",
  "Meu mundo ficou mais leve, mais bonito.",
  "Meu coração escolheu você 💖"
];

const frasesNao = [
  "Tem certeza? 🥺",
  "O SIM combina mais com a gente 💕",
  "Vai pensar direitinho 😅",
  "Certeza mesmo? 😭",
  "Meu coração acredita no SIM 💖"
];

let i = 0;
let j = 0;
let naoIndex = 0;

const typing = document.getElementById("typing");
const naoMsg = document.getElementById("naoMsg");

function type(){
  if(i < text.length){
    if(j < text[i].length){
      typing.innerHTML += text[i][j];
      j++;
      setTimeout(type,60);
    } else {
      typing.innerHTML += "<br>";
      i++;
      j = 0;
      setTimeout(type,600);
    }
  }
}
type();

/* BOTÃO NÃO */
function nao(){
  naoMsg.innerText = frasesNao[naoIndex];
  naoMsg.classList.add("show","shake");
  naoIndex = (naoIndex + 1) % frasesNao.length;

  setTimeout(()=>{
    naoMsg.classList.remove("show","shake");
    naoMsg.innerText = "";
  },2200);
}

/* BOTÃO SIM — TRANSIÇÃO */
function aceitar(){
  const music = document.getElementById("bgMusic");

  if(music){
    music.play().catch(()=>{});
  }

  document.body.classList.add("fade-out");

  setTimeout(()=>{
    window.location.href = "final.html";
  },1200);
}

music.play()
