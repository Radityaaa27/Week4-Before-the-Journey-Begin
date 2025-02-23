//soal 1
function sorting(arrNumber) {
    return arrNumber.sort((a, b) => b - a); 
  }
  
  function getTotal(arrNumber) {
    if (arrNumber.length === 0) return '';
  
    let maxNumber = arrNumber[0]; 
    let count = arrNumber.filter(num => num === maxNumber).length; 
  
    return `angka paling besar adalah ${maxNumber} dan jumlah kemunculan sebanyak ${count} kali`;
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    let listSort = sorting(arrNumber);
    let countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''
 
//soal 2
function changeVocals (str) {
   let vokal = 'aiueoAIUEO';
   let ganti = 'bjvfpBJVFP';
   let result = '';

   for (let i = 0; i < str.length; i++) {
    let index = vokal.indexOf(str[i]);
    result += index !== -1 ? ganti[index] : str[i];
   }
   return result;
  }
  
  function reverseWord (str) {
    return str.split('').reverse().join('');
  }
  
  function setLowerUpperCase (str) {
    let result = '';

    for (let i = 0; i< str.length; i++) {
      let char = str[i];    
      result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();   
    }
    return result;
  }
  
  function removeSpaces (str) {
    return str.split(' ').join('');
  }
  
  function passwordGenerator (name) {
    if (name.length < 5) return "Minimal karakter yang diinputkan adalah 5 karakter"; 

    let changed = changeVocals(name);
    let reversed = reverseWord(changed);
    let swapped = setLowerUpperCase(reversed);
    let cleaned = removeSpaces(swapped);

    return cleaned;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'  

//soal 3
function makanTerusRekursif(waktu) {
    if (waktu <= 0) return 0; 
    return 1 + makanTerusRekursif(waktu - 15); 
  }
  
// TEST CASES  
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0
 
//soal 4
function totalDigitRekursif(angka) {
    let str = angka.toString();
    if (str.length === 1) return angka; 
  
    return parseInt(str[0]) + totalDigitRekursif(parseInt(str.slice(1)));
  }
  
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

//soal 5
function kaliTerusRekursif(angka) {
    let str = angka.toString();
    if (str.length === 1) return angka; 
  
    let result = str.split('').reduce((acc, num) => acc * parseInt(num), 1); 
    return kaliTerusRekursif(result);
  }
  
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
  