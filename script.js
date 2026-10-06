// message pop-up checklist
document.querySelector('.bouton').addEventListener('click', function() {alert("tu es prêt(e) à voyager !")});

// générateur de destination
document.querySelector(".pays-hasard").addEventListener("click", function() {
    const paysHasard = [ "France", "Espagne", "Italie", "Portugal", "Allemagne", "Royaume-Uni", "Irlande", "Belgique", "Pays-Bas", "Luxembourg", "Suisse", "Autriche", "Danemark", "Suède", "Norvège", "Finlande", "Islande", "Pologne", "République tchèque", "Hongrie", "Grèce", "Croatie", "Slovénie", "Monténégro", "Albanie", "Roumanie", "Bulgarie", "Turquie", "Maroc", "Tunisie", "Algérie", "Égypte", "Sénégal", "Kenya", "Tanzanie", "Afrique du Sud", "Madagascar", "Émirats arabes unis", "Jordanie", "Israël", "États-Unis",("Canada"), ("Mexique"), ("Costa Rica"), ("Cuba"), ("République dominicaine"), ("Brésil"), ("Argentine"), ("Chili"), ("Pérou"), ("Colombie"), ("Équateur"), ("Bolivie"), ("Japon"), ("Corée du Sud"), ("Chine"), ("Inde"), ("Népal"), ("Sri Lanka"), ("Thaïlande"), ("Vietnam"), ("Cambodge"), ("Laos"), ("Malaisie"), ("Singapour"), ("Indonésie"), ("Philippines"), ("Australie"), ("Nouvelle-Zélande"), ("Fidji")];
        const pays = paysHasard[Math.floor(Math.random() * paysHasard.length)];
        document.getElementById("resultat").textContent = "Voici un pays à visiter : " + pays;
    }
);
// météo
const ville = document.getElementById("ville");  
const rechercheMeteo = document.getElementById("recherche-meteo");
const resultatMeteo = document.getElementById("resultat-meteo");
rechercheMeteo.addEventListener("click", function() {
    const nomVille = ville.value.trim();

    if (nomVille === "") {
        resultatMeteo.textContent = "Veuillez saisir une ville";
        return;
    }

resultatMeteo.textContent = `Je cherche la météo pour ${nomVille}...`;
chercherMeteo(nomVille);
});

async function chercherMeteo(nomVille) {
    console.log("Recherche météo pour :", nomVille);
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${nomVille}&count=1`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    const resultat = data.results[0];

console.log(resultat);
console.log(resultat.latitude);
console.log(resultat.longitude);

const latitude = resultat.latitude;
const longitude = resultat.longitude;

const valeurMeteo = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
);

const meteo = await valeurMeteo.json();

console.log(meteo);
console.log(meteo.current_weather);
console.log(meteo.current_weather.temperature);
resultatMeteo.textContent = `La température à ${resultat.name} est de ${meteo.current_weather.temperature}°C`; };