const tbl = document.getElementById('ourtable');
const tblHead = tbl.appendChild(document.createElement('thead'));
const tblBody = tbl.appendChild(document.createElement('tbody'));

tblHead.innerHTML = `<tr><td>Валюта</td><td>Продажа</td><td>Покупка</td></tr>`;

fetch('https://kodaktor.ru/j/rates')
.then( arr => arr.json() )
.then( arr => tblBody.innerHTML = arr
	.map(({name, sell, buy}) => 
			`<tr><td>${name}</td><td>${sell}</td><td>${buy}</td></tr>`)
	.join('')
)
