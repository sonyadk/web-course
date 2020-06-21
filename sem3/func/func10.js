//https://kodaktor.ru/?!=func_1d749
{
const f = x => x <= 1 ? 1 : x * f(x - 1);
x => x <= 1 ? 1 : x * arguments.callee(x - 1);
//вызов через arguments.callee 
}