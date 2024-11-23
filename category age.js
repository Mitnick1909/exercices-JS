//Exercice 2 : Catégorisation d'âge

let age=parseInt(prompt('Veuillez faire entrer votre age svp'))
if(age==' '){
  console.log('Vous n\'avez pas entrer de valeur, Veuillez faire entrer votre age svp')
}
else if(age<12){
    console.log('Vous avez ' + age + ' ans et vous etes un enfant')
}

else if(age>=12 && age<=17){
    console.log('Vous avez ' +age +' ans et vous etes un adolescent')
}
else if(age>=18 && age<=64){
    console.log('Vous avez ' + age + ' ans et vous etes un adulte')
}
else if(age>=65){
    console.log('Vous avez ' + age + ' ans et vous etes un senior')
}
else{
    console.log('VeuilleZ entrer votre age svp')
}

