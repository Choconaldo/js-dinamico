// DOM elements capture

const cepEl = document.getElementById("cep") as HTMLInputElement;
const ruaEl = document.getElementById("rua") as HTMLInputElement;
const cidadeEl = document.getElementById("cidade") as HTMLInputElement;
const estadoEl = document.getElementById("estado") as HTMLInputElement;

// CEP validation

if (cepEl) {
	cepEl.onblur = function cepValidation() {
		const cepValue = cepEl.value;

		if (cepValue.length === 8 && Number(cepValue)) {
			try {
				const cepReturn = fetch(
					`https://viacep.com.br/ws/${cepEl.value}/json/`
				);
				cepReturn
					.then((response) => response.json())
					.then((processedResponse) => {
						ruaEl.value = processedResponse.logradouro;
						cidadeEl.value = processedResponse.localidade;
						estadoEl.value = processedResponse.estado;
					});
			} catch (error) {
				console.log(error);
			}
		} else {
			alert("Formato do CEP digitado inválido");
		}
	};
}
