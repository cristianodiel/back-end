// Crie uma função que remova os 
//itens nulos ou negativos de 
//um vetor.

const vet = [15,-10,6,1,0,-4,-9, '', null]
const positivos =[]
const negativos = [];
const zeros = []

function verifica(){
    
    for(let i = 0; i<vet.length; i++){
        if (vet[i]< 0 ){
            negativos.push(vet[i]);
            vet.splice(i,1);
            //negativos.push(parseInt(vet.splice(i,1)))
            i--
        }
        else if (vet [i]==0 || vet[i]== null){
            let valorRemovido = vet.splice(i,1);
            zeros.push(valorRemovido[0]);
            i--
        }
    }
}