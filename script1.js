// Your Week 4 - Item 1 works great. However, it does not display your knowledge of creating a function.
// For your first activity, create a new function called max, which accepts 2 numeric parameters, then returns the larger of the 2.
// * note do not use any API libraries like math.min
// e.g., max(100, 50) => 100

// console.log(Math.max(100, 50));

function max(a, b) 
{
    if (a > b) 
    {
        return a;
    } else {
      return b;
    }
}

console.log(max(300, 65)); 