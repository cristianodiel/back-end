const vet=[];
for (i=0;i<=1000;i++){
    vet[i]=i;
}
function parImpar(num){
    if(num%2==0){
        console.log(num + " é par.\n");
    }else{
        console.log(num + " é ímpar.\n");
    }
}
console.log(vet.forEach(parImpar));