function encontrarMayor(Array){
    let mayor = Array[0]
    for(let i = 0; i < Array.length; i++){
        if(Array[i] > mayor){
            mayor = Array[i]
    }
        else if(Array[i] < menor){
            menor = Array[i]
    }
    MayorMenor = [mayor, menor]
    return MayorMenor;
    }
}
let resultado = encontrarMayor([3,5,2,6,10])
alert(resultado)