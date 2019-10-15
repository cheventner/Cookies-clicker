//bouton gauche
var click = 0;
// bouton droit
var compteur = 1;
// calculateur bonus
var palier = 10;
// super bonus
var grosBonus= 20;
var cacher = document.getElementById('bonus');


// afficher le multiplicateur dans le bouton de droite
function afficherBoutonMultiplicateur(){
document.getElementById('multiplicateur').innerHTML =  (" Multiplicateur X " +compteur+ " Prochain Bonus à " + palier);
}
afficherBoutonMultiplicateur();

// afficher mon document par l'id 'bouton'
function affichage() {
 document.getElementById('bouton').innerHTML = click; 
}

// fonction du 'click' bouton gauche
function addition(){
	// augmenter le score par compteur
	click = click + compteur;
	affichage ();
}

// utilisation du multiplicateur bouton droit
function incrementer(){
	// bloquer le bouton compteur jusqu'au palier 50
	
	 // si mon click est inferieur à mon palier de 50
	if (click < palier ) {
	 // alors message
		alert('vous devez attendre le prochain bonus');
	}
		else {
			//sinon augmenter ma variable compteur de 1
			compteur=compteur+1;
			// augmentation de la difficulté du palier (bonus) 
			palier = palier * 2;
			//dimunution de mon score de 5 quand je clique sur mon palier
			click = click - 5;

// mets à jour le bouton de gauche 
			affichage();

// mets à jour le bouton de droite
			afficherBoutonMultiplicateur();	
		}
}
	


// fonction bouton superbonus 200 de score 
// incrementation automatique  chaque seconde après click sur bouton superbonus
function superBonus(){

	if (click < grosBonus ) {
	 // alors message
		alert('vous devez atteindre le prochain Big Bonus');
		console.log(grosBonus);
	}	
		else{	
		// incrementation automatique du compteur 	
			var autoclick = setInterval(addition,200);
			cacher.style.display= 'none';

		}				
}
// fonction stop 
 //je veux que quand je clique sur mon bouton click le setInterval s'arrete			
		
