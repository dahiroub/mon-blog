// Fonction appelée quand on survole une image
function upDate(previewPic) {
    console.log("Événement déclenché !");
    console.log("Source de l'image :", previewPic.src);
    console.log("Texte alternatif :", previewPic.alt);

    const imageDiv = document.getElementById("image");

    // Change le fond de la div pour afficher l'image
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;

    // Change le texte à l’intérieur
    imageDiv.innerText = previewPic.alt;
}

// Fonction appelée quand on quitte une image
function unDo() {
    console.log("Événement d'annulation déclenché.");

    const imageDiv = document.getElementById("image");

    // Rétablit l'état initial
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerText = "Survolez une image ci-dessous pour l'afficher ici";
}

// Ajouter les écouteurs d'événements à chaque image
document.querySelectorAll("img.preview").forEach(img => {
    img.addEventListener("mouseover", () => upDate(img));
    img.addEventListener("mouseout", unDo);
});
