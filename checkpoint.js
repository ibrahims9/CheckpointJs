// Inverser une chaîne :
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello')); 


// Compter les caractères :
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters('hello Karim')); 


// Mettre les mots en majuscule :

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords('hello world')); 

// Fonctions du tableau :
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMax([1, 2, 3, 4, 5])); 
console.log(findMin([1, 2, 3, 4, 5]));




// Somme du tableau :
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15




