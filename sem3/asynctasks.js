let result = '';
const values = document.getElementById('values');
const URLs = document.getElementById('urls');
const val =   Array.from(values.querySelectorAll('li')).map(el => el.textContent);
const ur =   Array.from(URLs.querySelectorAll('li')).map(el => el.textContent);
document
  .querySelector('button')
  .addEventListener('click',
  async ({ target: t }) => { 
  let response = '';
  for (let i = 0; i < ur.length; i++){
    await fetch(`${ur[i]}${val[i]}/${response}`)
      .then(res => res.text())
      .then(res => {
        const beginSlice = res.indexOf('<span>');
        const endSlise = res.lastIndexOf('</span>');
        const row = res.slice(beginSlice+6, endSlise);
        return row;
      })
      .then( res => {
      response = res;
      result += response;
    })
  };
   t.textContent = `Результат: ${result}`;
  }
); 