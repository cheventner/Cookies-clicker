
var boutonAdd = 0;
var compteur = 1;
var palier = 50;



// afficher mon document par l'id 'bouton'
function affichage() {
 document.getElementById('bouton').innerHTML = boutonAdd; 
}

// fonction du 'boutonAdd' 
function addition(){
	// augmenter le score par compteur
	boutonAdd = boutonAdd + compteur;
	console.log(boutonAdd);
	affichage ();
}

// utilisation du multiplicateur
function incrementer(){
	// bloquer le bouton compteur jusqu'au palier 50
	
	 // si mon boutonAdd est inferieur à mon palier de 50
	if (boutonAdd < palier ) {
	 // alors message
		alert('vous devez attendre le prochain bonus');
		console.log(compteur);
	}
		else {
			//sinon augmenter ma variable compteur de 1
			compteur=compteur+1;
			// augmentation de la difficulté du palier (bonus) 
			palier = palier * 2;

			console.log(compteur);	
		}
	// mets à jour l'affichage de la fenetre 'compteur' avec la bonne valeur
 	document.getElementById('multiplicateur').innerHTML =  compteur;
 	console.log(compteur);
}