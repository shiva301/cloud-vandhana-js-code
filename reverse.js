const sentence="this is javascript";
const words=sentence.split(' ');
var newSentence='';
words.forEach(word=>{
    newSentence +=word.split('').reverse().join('')+' ';
    
});
console.log(newSentence);
function sentence()
{
    var bunny=["this","is","javascrpt"];
document.write(bunny+"<br>");
bunny.reverse();
document.write(bunny+"<br>");
}
sentence();
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
console.log(fruits);



