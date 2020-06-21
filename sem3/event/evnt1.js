{ console.clear();
      new Clicker(async () => {
        const { random: r, round: d } = Math;	
        document.querySelector('h1')
        .addEventListener('mousemove', ({ target: t }) => { 
           t.style.color = ['red', 'blue'][d(r(1))]
        },{once: true});         
      }, caption='Щёлкни');      
  
}