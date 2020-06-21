{
    const cc = (x = 0) => () => ++x;
    const res = 'x: ' + cc(0)() +','+ cc(1)() + ',' + cc(2)();
console.log(res);
}
