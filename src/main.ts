// Input Elements
const nomeEl = document.getElementById("nome") as HTMLInputElement;
const idadeEl = document.getElementById("idade") as HTMLInputElement;
const emailEl = document.getElementById("email") as HTMLInputElement;
const javascriptEl = document.getElementById("javascript") as HTMLInputElement;
const typescriptEl = document.getElementById("typescript") as HTMLInputElement;
const pythonEl = document.getElementById("python") as HTMLInputElement;
const javaEl = document.getElementById("java") as HTMLInputElement;

const resultadoEl = document.getElementById("resultado") as HTMLInputElement;

let nome: string;
let idade: number;
let email: string;
let favorita: string;

// Trata Campo Nome

if (nomeEl) {
	nomeEl.onblur = function validaNome() {
		if (nomeEl.value.length > 2) {
			nome = nomeEl.value;
			mostraTexto();
		} else {
			alert("Um nome válido deve ser digitado");
		}
	};
}

// Trata Campo Idade

if (idadeEl) {
	idadeEl.onblur = function validaIdade() {
		const idadeDigitada = Number(idadeEl.value);
		if (isNaN(idadeDigitada) || idadeDigitada < 1 || idadeDigitada > 120) {
			alert(
				"A idade preenchida deve ser um número maior que 0 e menor do que 120"
			);
		} else {
			idade = idadeDigitada;
			mostraTexto();
		}
	};
}

// Trata Campo Email

if (emailEl) {
	emailEl.onblur = function validaEmail() {
		const emailDigitado = emailEl.value;
		if (!emailDigitado.includes("@") || !emailDigitado.includes(".")) {
			alert("Formato de E-mail incorreto");
		} else {
			email = emailDigitado;
			mostraTexto();
		}
	};
}

// Trata Linguagem Favorita

if (javascriptEl) {
	javascriptEl.oninput = function validajavascript() {
		if (javascriptEl.checked) {
			favorita = javascriptEl.value;
			mostraTexto();
		}
	};
}

if (typescriptEl) {
	typescriptEl.oninput = function validajavascript() {
		if (typescriptEl.checked) {
			favorita = typescriptEl.value;
			mostraTexto();
		}
	};
}
if (pythonEl) {
	pythonEl.oninput = function validajavascript() {
		if (pythonEl.checked) {
			favorita = pythonEl.value;
			mostraTexto();
		}
	};
}
if (javaEl) {
	javaEl.oninput = function validajavascript() {
		if (javaEl.checked) {
			favorita = javaEl.value;
			mostraTexto();
		}
	};
}

// Mostra texto final

function mostraTexto() {
	if (nome && idade && email && favorita) {
		resultadoEl.textContent = `Olá, meu nome é ${nome}, tenho ${idade} anos. Minha linguagem de	programação favorita é ${favorita} e meu e-mail de contato é ${email}.`;
	}
}
