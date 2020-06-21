//https://kodaktor.ru/?!=custom_87520
<!DOCTYPE html>
<html>
 <head>
  <title>Создание событий</title><meta charset="utf-8">
   <style>#writer {width: 50%; height:100px; background: gold; cursor: pointer}
          #reader {width: 50%; height:100px; background: red} body {display: flex}</style>
 </head>
 <body>
    <div id="writer" title="♥️"><h2>Отправитель события</h2></div>
    <div id="reader" title="⭐️"><h2>Получатель события</h2></div>
    <script>{
  document.querySelector('#reader').addEventListener('note', e => {e.target.textContent += e.target.title;
      document.querySelector('#writer').dispatchEvent(new CustomEvent('noteout'))
           });   
  document.querySelector('#writer').addEventListener('noteout', e => e.target.textContent += e.target.title);
      document.querySelector('#writer').addEventListener('click',() => document.querySelector('#reader').dispatchEvent(new CustomEvent('note')));
  
    }</script>
 </body>
</html>