const tbl = document.getElementById('ourtable');
const tblHead = tbl.appendChild(document.createElement('thead'));
const tblBody = tbl.appendChild(document.createElement('tbody'));

tblHead.innerHTML = `<tr><td>title</td><td>add</td><td>del</td><td>votes</td></tr>`;
fetch('https://kodaktor.ru/j/react5b_6cbf2')
.then( arr => arr.json() )
.then(arr => arr
	.forEach(({id, title, votes}) =>{ 
		let s = '♥️'.repeat(+votes);
		tblBody.innerHTML += `<tr id="${id}"><td>${title}</td><td class ="add">add</td><td class="del">del</td><td class="votes" data-val="${votes}">${s}</td></tr>`})
)	

tblBody.addEventListener('click', (e) => {
	if (e.target.classList.contains('add')){
		let el = e.target.closest('tr').querySelector('.votes');
		let val = +(el.dataset.val) + 1;
		el.dataset.val = val;
		let s = '♥️'.repeat(+val);
		el.innerHTML =  s;
	}
	if (e.target.classList.contains('del')){
		let el = e.target.closest('tr').querySelector('.votes');
		if (+el.dataset.val > 0){
			let val = +(el.dataset.val) - 1;
			el.dataset.val = val;
			let s = '♥️'.repeat(+val);
			el.innerHTML = s;
		}
	}
});

