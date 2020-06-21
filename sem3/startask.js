{ 
  const star = '⭐️';
      const length = 5;
        const arr = Array.from({length: length});
		var results = arr.map(function(el, index, arr) {
  							return arr[index] = star; });
       console.log(results);
      const gs = results.join(' ');
     console.log(gs);

  }