//46==two stack

class twoStacks
{
    constructor(n)
    {
        this.arr = new Array(n);
        this.size = n;
        this.top1 = Math.floor(n / 2) + 1;
        this.top2 = Math.floor(n / 2);
    }

push1(x)
{
    if (this.top1 > 0)
    {
      this.top1--;
      this.arr[this.top1] = x;
    }
    else
    {
     console.log("Stack Overflow"
                       + " By element : " +  x +"<br>");

      return;
    }
}

push2(x)
{

    if (this.top2 < this.size - 1)
    {
      this.top2++;
      this.arr[this.top2] = x;
    }
    else
    {
      console.log("Stack Overflow"+ " By element : " +  x );

      return;
    }
}

pop1()
{
    if (this.top1 <= this.size / 2)
    {
      let x = this.arr[this.top1];
      this.top1++;
      return x;
    }
    else
    {
  console.log("Stack UnderFlow");

    }
    return 0;
}

pop2()
{
    if (this.top2 >= Math.floor(this.size / 2) + 1)
    {
      let x = this.arr[this.top2];
      this.top2--;
      return x;
    }
    else
    {
   console.log("Stack UnderFlow");

    }
    return 1;
  }

}

let ts = new twoStacks(5);
ts.push1(5);
ts.push2(10);
ts.push2(15);
ts.push1(11);
ts.push2(7);
console.log("Popped element from stack1 is " + " : " +  ts.pop1());

ts.push2(40);
console.log("Popped element from stack2 is " + ": " +  ts.pop2());