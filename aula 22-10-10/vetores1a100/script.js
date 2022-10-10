const numeros=[]

const impares=[]

for (i=0;i<100;i++){
    numeros.push(i);
}
const multiplos3 = numeros.map(function(item){
    return item*3;

})
console.log(multiplos3);

multiplos3.forEach(function(item){
    if(item%2!=0){
    console.log(item)
    }
})
