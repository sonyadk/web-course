{
  const compose = (...funcs) => funcs.reduce((accum, fn) => (...args) => accum(fn(...args), x => x));
  const qv = x => x * x;
  const sc = x => x + 1;
  console.log(qv(sc((5)))) 
  console.log(sc(qv((5)))) 
  console.log(compose(qv,sc)(5))
  console.log(compose(sc,qv)(5));
}