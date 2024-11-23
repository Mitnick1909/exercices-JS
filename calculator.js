//Exercice 1 : Calculateur de remise en CFA

let remise=0
let montant =parseInt(prompt('Veuillez entrer le montant total de vos achats'))

if(montant<25000){
    remise=0
    montant=montant-remise
    console.log('votre remise est egale a '+ remise + ' et donc vous payer '+montant)
}

else if(montant>=25000 && montant<=100000){
    remise=montant*0.1
    montant-=remise
    console.log('votre remise est egale a '+ remise + ' et donc vous payer '+montant)
}

else if(montant>100000){
    remise=montant*0.15
    montant-=remise
    console.log('votre remise est egale a '+ remise +' et donc vous payer '+ montant)
}

else{
    console.log('Veuillez entrer votre montant total svp')
}


