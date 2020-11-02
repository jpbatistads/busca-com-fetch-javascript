const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

//Ouvinte de Eventos
cat_btn.addEventListener('click', getGato);
dog_btn.addEventListener('click', getCachorro);

//Funções que buscam imagens na API.
function getGato() {
	fetch('https://aws.random.cat/meow')//Request (Solicitação get de busca de dados)
		.then(response => response.json())// Fetch em Json, tratamento do corpo do pedido
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function getCachorro() {
	fetch('https://random.dog/woof.json')
		.then(response => response.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getCachorro();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}
