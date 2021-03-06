// Créer un objet personne. Cette personne doit avoir des propriétés et des méthodes : 

let presonne = {
    nom : "Abdel",
    lieu : "maison",
    argent : 50,
    mainDroite : [],
    mainGauche : [],
    seDeplacer (){

    },
    payerArticle(){

    },
    couper(){

    }
}
// Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :

class Lieu {
    constructor(nom,personnes, panier){
        this.nom=nom;
        this.personnes=personnes;
        let panier = {
            type = panier,
            panier =[]
        }
    }
}


// * Créer un outil (couteau) pour découper les ingrédients achetés
// * propriétés : nom et action.
// * action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
// */
let outil = {
    nom : "couteau",
    action : "coupé"
}


// * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
//  * propriétés : nom, etats ( entier,coupé, moulu), prix
//  */
class Ingredient {
    constructor(nom,etat,prix){
    this.nom=nom;
    this.etat=etat;
    this.prix=prix;
    }
}
// * Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)


let poele ={
    contenu : "",
    cuire(chauffer){
        function chauffer(temp){
            if (temp < 100){
                temp += 20;
                setTimeout(() => {
                    this.contenu.push('cuit');
                    console.log(`la preparation est ${this.contenu}`);
                    chauffer(temp);
                }, 4000);
            } else {
                console.log("la poele ne cuit pas");
            };
        };
    }
}

// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]

let bol ={
    contenu = "",
    nomMelanger(newMelange){
        let newMelange ={
            etat = "pas cuit",
        }
    }
}


let maison = new Lieu ("maison",[])
let epicerie = new Lieu ("epicerie",[])
let oeufs = new Ingredient("oeufs","entier",2)
let oignon = new Ingredient("oignon", "coupé",1)
let fromage = new Ingredient("fromage", "entier", 3)
let epice = new Ingredient("epice", "coupé", 4)
