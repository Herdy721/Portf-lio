const text = "Olá, mundo!" +
             "  Hello, world!" +
             "  ¡Hola, mundo!" +
             "  Bonjour, le monde!" +
             "  Ciao, mondo!" +
             "  こんにちは、世界" + 
             "  Hallo, Welt!" +
             "  مرحبا بالعالم!";
const typingText = document.getElementById("typing-text");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

function toggleBox(id) {
  const content = document.getElementById(id);
  content.style.display = content.style.display === "none" ? "block" : "none";
}

window.onload = typeWriter();

// IDADE

const dataNascimento = new Date("1989-01-10"); 

function calcularIdade() {
  const hoje = new Date();
  let anos = hoje.getFullYear() - dataNascimento.getFullYear();
  let meses = hoje.getMonth() - dataNascimento.getMonth();
  let dias = hoje.getDate() - dataNascimento.getDate();

  if (meses < 0 || (meses === 0 && dias < 0)) {
    anos--;
    meses += 12;
  }

  if (dias < 0) {
    const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    meses--;
    dias += ultimoDiaMesAnterior;
  }

  document.getElementById("anos").textContent = anos;
  document.getElementById("meses").textContent = meses;
  document.getElementById("dias").textContent = dias;
}

window.onload = calcularIdade(); 