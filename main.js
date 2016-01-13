/*var nbaArray = ['Lakers', 'Bulls', 'Celtics', 'Spurs', 'Warriors', 'Knicks'];


function biggerWords(string, arrayStringsLength)
{
   var array = [];
   var i = 0;
    for(i; i < arrayStringsLength.length; i++)
    {
        if(arrayStringsLength[i].length > string.length)
        {
            array.push(arrayStringsLength[i]);
        }
    }
    return array;
}
console.log('nbaArray before function call:', nbaArray);
console.log("calling biggerWords function: argument is ('kings', nbaArray)" ,biggerWords('kings', nbaArray));


var myArray = ['One', 'Two', 'Three', 'Four', 'Five'];

function arrayReverse(anyArray)
{
    var reverseArr = [];
    var originalArray = anyArray;
    for(var i = originalArray.length-1; i >= 0; i--)
    {
        reverseArr.push(originalArray[i]);
    }
    return reverseArr;
}
console.log('myArray before function call:', myArray);
console.log('Calling arrayReverse function: argument is (myArray)', arrayReverse(myArray));


var multiDataArray = ['one', 3, true, 'two', false, 'goodbye', 5, 6, 'That is enough!'];
var index = 0;

function groupArray(inputArray)
{
    var  organizedArray = [];
    var strArray = [];
    var numberArray = [];
    var booleanArray = [];
    var input = inputArray;
    for (var i = 0; i < input.length; i++)
    {
        if(typeof input[i] === 'string')

        {
            strArray.push(input[i]);
            console.log('console log:' ,strArray);
        }

        if(typeof input[i] === 'number')
        {
            numberArray.push(input[i]);
            console.log('console log:', numberArray);
        }

        if(typeof input[i] === 'boolean')
        {
            booleanArray.push(input[i]);
            console.log('console log:', booleanArray);
        }

    }
    organizedArray.push(strArray);
    organizedArray.push(numberArray);
    organizedArray.push(booleanArray);
    return organizedArray;
}

console.log('multiDataArray before function call', multiDataArray);
console.log('calling groupArray function:', groupArray(multiDataArray));*/


var nbaArray = ['Lakers', 'Spurs', 'Magic', 'Heat', 'Pistons'];

function biggerWords(string, lengthArray)
{
    var array = [];
    var i = 0;
    for(i; i < lengthArray.length; i++ )
    {
        if(lengthArray.length[i] > string.length )
    {
        array.push(lengthArray.length[i])
    }

    }
    return array;

}
console.log('nbaArray before function call:', nbaArray);
console.log("calling biggerWords function: argument is ('timberwolves', nbaArray)" ,biggerWords('timberwolves', nbaArray));

var randomArray = ['rick', 45, 33, 'husband', 'honey', 400];

function arrayReverse(anyArray)
{
    var reversedArray = [];
    var originalArray = anyArray;
    for( var i = originalArray.length-1; i >= 0; i--)
    {
        reversedArray.push(originalArray[i]);
    }
    return reversedArray;
}
console.log('myArray before function call:', randomArray);
console.log('Calling arrayReverse function: argument is (myArray)', arrayReverse(randomArray));


var anyArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
var index = 0;
function arrayOrganizer(array)
{

    var organizedArray = [];
    var stringArray = [];
    var numbersArray = [];
    var booleanArray = [];
    var input = array;
    for(var i = 0; i < input.length; i++)
    {
        if(typeof input[i] === 'string' )
        {
            stringArray.push(input[i]);
            console.log('console log:' ,stringArray);
        }
        if(typeof input[i] === 'number')
        {
           numbersArray.push(input[i]);
            console.log('console log:' ,numbersArray);
        }
        if(typeof input[i] === 'boolean')
        {
            booleanArray.push(input[i]);
        }
    }
    organizedArray.push(stringArray);
    organizedArray.push(numbersArray);
    organizedArray.push(booleanArray);
    return organizedArray;
}
console.log('multiDataArray before function call', anyArray);
console.log('calling groupArray function:', arrayOrganizer(anyArray));