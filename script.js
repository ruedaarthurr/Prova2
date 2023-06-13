Arthur Oliveira Rueda - CC1MA
Prof. Otávio
Prova de Construção de Software para Web

Questão 1: Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.

function numeroPrimo() {
  var DigiteNumero = prompt('Digite um número de 1 a 1000.');

  if (isNaN(DigiteNumero) || DigiteNumero < 1 || DigiteNumero > 1000) {
      return alert('Erro. Esse número não é válido.');
  } 
  
  else {
      DigiteNumero = parseInt(DigiteNumero);

      if (DigiteNumero < 2) {
          return alert('O número ' + DigiteNumero + ' não é primo.');
      }
      if (DigiteNumero === 2) {
          return alert('O número ' + DigiteNumero + ' é primo.');
      }
      if (DigiteNumero % 2 === 0) {
          return alert('O número ' + DigiteNumero + ' não é primo.');
      }

      for (var i = 3; i <= Math.sqrt(DigiteNumero); i += 2) {
          if (DigiteNumero % i === 0) {
              return alert('O número ' + DigiteNumero + ' não é primo.');
          }
      }

      return alert('O número ' + DigiteNumero + ' é primo.');
  }
}
numeroPrimo();


Questão 2:  Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.
  
  function Senha() {
    var senha = prompt("Insira a senha:");
  
    if (senha.length < 8) {
      alert("Inválida: deve conter no minimo 8 caracteres");
    } else if (!/[A-Z]/.test(senha)) {
      alert("Inválida: deve conter uma letra maiuscula");
    } else if (!/[a-z]/.test(senha)) {
      alert("Inválida: deve conter uma letra minuscula");
    } else if (!senha.match(/[0-9]/)) {
      alert("Inválida: deve conter um número");
    } else {
      alert("A senha pode ser criada!");
    }
  }

Senha();

Questão 3: Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.

function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = number; i >= 2; i--) {
      result *= i;
    }
  
    return result;
  }
  
  function calculateFactorials() {
    const factorials = [];
  
    for (let i = 1; i <= 10; i++) {
      const fact = factorial(i);
      factorials.push(fact);
    }
  
    return factorials;
  }
  
  const factorialsArray = calculateFactorials();
  console.log(factorialsArray);

Questão 4: Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.*/

function quadradoPerfeito(numero) {
  var raiznumero = Math.floor(Math.sqrt(numero));
  return raiznumero * raiznumero === numero;
}

function verificarQuadradoPerfeito() {
  var num = prompt("Insira um número");

  if (isNaN(num)) {
    alert("Por favor, insira um número válido.");
    return;
  }

  num = parseInt(num);

  if (quadradoPerfeito(num)) {
    alert(num + " é um quadrado perfeito.");
  } else {
    alert(num + " não é um quadrado perfeito.");
  }
}
console.log(verificarQuadradoPerfeito());



