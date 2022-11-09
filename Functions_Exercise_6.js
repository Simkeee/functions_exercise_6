// 1.Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
function rotatesAList(array,k)
{
'use strict'
    var x=[];
    var j=0;
for (let i = k-1; i < array.length; i++) 
{
    x[j] = array[i];
    j++;
}
for (let i = 0; i < k; i++) 
{
    x[j] = array[i];
    j++;
}
return x;
}
console.log ("1. ZADATAK:"+rotatesAList([1,2,3,4,5,6],3))

// 2. Write a function that takes a number and returns array of its digits.
function arrayDigits(numb)
{
'use strict'
    var digits = numb.toString().split('');
    var realDigits = digits.map(Number);
return realDigits;
}
console.log ("2. ZADATAK:"+arrayDigits(12986))

// 3. Write a program that prints a multiplication table for numbers up to 12.
function tableM()
{
'use strict'
var n=[];
var k=0;
  for(var x=1;x<13;x++) 
  {
    for(var y=1;y<13;y++) 
    {
        n[k]="\n"+x+" X "+y+" = "+x*y;
        k++;
    }
  }
    return n;
}
console.log("3. ZADATAK:"+tableM())
//////////////////2.NACIN///////////////////
// function multipTable(f) 
// {
//     for(let n=1;n<13;++n) 
//     {
//       this[n.toString(13)] = f * n;
//     } 
// }
//   let myTable = {};
//   for(let x=1;x<13;++x) 
//   {
//   myTable[x.toString(13)] = new multipTable(x);
//   }
//   console.table(myTable)


// 4. Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.
function maxEl(arr) 
{
    'use strict'
    var m=arr[0];
    for (let i = 0; i < arr.length; i++) 
    {
        if(isNaN(arr[i])==false)
        {
            if(m<arr[i])
            {
               m=arr[i];
            }
        }
    }
    return m;
}
console.log("4. ZADATAK:"+maxEl([1,5,65,43,34,'ert',true,'09',undefined]))

// 5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.
function maxMinEl(arr) 
{
    'use strict'
    var m=arr[0];
    var n=arr[0];
    var k=[];
    for (let i = 0; i < arr.length; i++) 
    {
        if(m<arr[i])
        {
           m=arr[i];
        }
        if(n>arr[i])
        {
           n=arr[i];
        }
    }
    k=[m,n];
    return k;
}
console.log("5. ZADATAK:"+maxMinEl([1,-5,65,43,34,'ert',true,'09',undefined]))

// 6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi
// poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
// broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).
function medijana(arr) 
{
    'use strict'
    var m=arr.sort();
    var k=0;
    for (let i = 0; i < arr.length; i++) 
    {
        if(arr.length%2!=0)
        {
            k=m[(arr.length+1)/2-1];
        }
        if(arr.length%2==0)
        {
            k=(m[arr.length/2-1]+m[arr.length/2])/2;
        }
    }
    return k;
}
console.log("6. ZADATAK:"+medijana([4,5,1,2,3,6]))

// 7. Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.
function firstMidLast(arr) 
{
    'use strict'
    var k=[];
    for (let i = 0; i < arr.length; i++) 
    {
        if(arr.length%2!=0)
        {
            k=[arr[0],arr[(arr.length+1)/2-1],arr[arr.length-1]];
        }
        else if(arr.length%2==0)
        {
            k=[arr[0],arr[arr.length-1]];
        }
        else 
        {
            k=arr;
        }
    }
    return k;
}
console.log("7. ZADATAK:"+firstMidLast([1,2,8,3,4]))

// 8. Write a function to find the average of N elements. Make the function flexible to receive
// dynamic number or parameters.
function averageN(arr) 
{
    'use strict'
    var k=0;
    for (let i = 0; i < arr.length; i++) 
    {
        if(isNaN(arr[i])==false)
        {
            k+=arr[i]/arr.length;
        }
    }
    return k;
}
console.log("8. ZADATAK:"+averageN([4,5,1,2,3,6]))

// 9. Write a function to find all the numbers greater than the average.
function greaterAv(arr) 
{
    'use strict'
    var k=0;
    var m=[];
    var h=0;
    for (let i = 0; i < arr.length; i++) 
    {
        if(isNaN(arr[i])==false)
        {
            k+=arr[i]/arr.length;
        }
    }
    for (let j = 0; j < arr.length; j++) 
    {
        if(arr[j]>k)
        {
            m[h]=arr[j];
            h++;
        }
        
    }
    return m;
}
console.log("9. ZADATAK:"+greaterAv([4,5,1,2,3,6]))

// 10. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
// square of the height (in meters). Write a function that takes two parameters, weight and
// height, computes the BMI, and prints the corresponding BMI category:
//  Starvation: less than 15
//  Anorexic: less than 17.5
//  Underweight: less than 18.5
//  Ideal: greater than or equal to 18.5 but less than 25
//  Overweight: greater than or equal to 25 but less than 30
//  Obese: greater than or equal to 30 but less than 40
//  Morbidly obese: greater than or equal to 40
function bmi(w,h) 
{
    'use strict'
    var bmi=w/(h*h);
    var k=0;
    if (bmi<15) 
    {
        k=' Starvation'; 
    }
    else if (15<bmi && bmi<17.5) 
    {
        k=' Anorexic'; 
    }
    else if (17.5<bmi && bmi<18.5) 
    {
        k=' Underweight'; 
    }
    else if (18.5<=bmi && bmi<25) 
    {
        k=' Ideal'; 
    }
    else if (25<=bmi && bmi<30) 
    {
        k=' Overweight'; 
    }
    else if (30<=bmi && bmi<40) 
    {
        k=' Obese'; 
    }
    else if (40<=bmi) 
    {
        k=' Morbidly obese';
    }
    return k;
}
console.log("10. ZADATAK:"+bmi(100,1.91))

// 11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
// frame.:
// For example the list [&quot;Hello&quot;, &quot;World&quot;, &quot;in&quot;, &quot;a&quot;, &quot;frame&quot;] gets
// printed as:
// *********
// * Hello *
// * World *
// * in *
// * a *
// * frame *
// *********
function printList(arr) 
{
    'use strict'
    var k=arr[0].length
    for (var i=0; i<arr.length; i++)//pronalazenje najduze reci
    {
        if(arr[i].length>k)
        {
            k=arr[i].length;
        }
    }
    var niz=["*".repeat(k+4)+'\n'];//prvi red
    for (let j = 0; j <= arr.length; j++) //ispisivanje redova
    {
        if(j!=arr.length)
        {
            niz= niz + "*" + " " + arr[j] + " ".repeat(k-arr[j].length) + " "+ "*\n";
        }
        else
        {
            niz= niz +"*".repeat(k+4); //poslednji red
        }   
    }
    return niz;
}
console.log("11. ZADATAK:\n"+printList(['Hello','World','in','frame']))