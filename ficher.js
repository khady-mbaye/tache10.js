
 var array1 = []
 for(i = 0 ; i < 5 ; i++){
    var valeur = parseFloat(prompt('entrer une valeur'))
    array1.push(valeur)
 }
console.log("array1 = " + array1)


 //construction du tableau2
var array2 = []
 for(i = 0 ; i < 5 ; i++){
    var valeur = parseFloat(prompt('entrer une valeur'))
    array2.push(valeur)
 }
console.log("array2 = " + array2)
console.log(' ')

//element commun au deux tableaux
for(i = 0 ; i < array1.length ; i++){
    for(j = 0 ; j < array2.length ; j++){
        var operation = array1[i] - array2[j]
        if( operation == 0){
            console.log(array1[i] + ' est dans array1 et dans array2')
        } 
       
    }
 } 
 //element de array1 qui ne sont pas dans array2
function filt(x){
    for(i = 0 ; i < array1.length ; i++){
        for(j = 0 ; j < array2.length ; j++){
            return x != array2[j]
        }
     } 
    
}
const dej = array1.filter(filt)
console.log(dej + ' sont dans array1 mais pas dans array2')
 console.log(' ')

// EXERCICE2
var tab1 = [5 , 3 , 87 , 1 , -4 , -99 , 0]
console.log('tab1 = ' + tab1)
// trie du tableau

function tritab1(tab1) {
    
    for(i = 0 ; i < tab1.length ; i++){
        for(j = i+1 ; j < tab1.length ; j++ ){
            if(tab1[i] > tab1[j]){
                var tpm = tab1[i]
                tab1[i] = tab1[j]
                tab1[j] = tpm
                
    
            }
            
        }
    }
    return tab1
    
}
tritab1(tab1)
console.log('tableau trie en ordre croissant ' + tab1)

// min est max de tab1
var max = tab1[0]
var min = tab1[0]

function maximum(tab1){
    for(i = 0 ; i < tab1.length ; i++){
        if(tab1[i] >= max){
            max = tab1[i]
            
        }
    }

}
maximum(tab1)
console.log('la plus grande valeur est ' + max)

function minimum(tab1){
    for(i = 0 ; i < tab1.length ; i++){
        if(tab1[i] <= min){
            min = tab1[i]
            
        }
    }
}
minimum(tab1)
console.log('la plus petite valeur est ' + min)
