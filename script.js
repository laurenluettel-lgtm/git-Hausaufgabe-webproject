// Warten bis die Seite vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("showImageBtn");
    const image  = document.getElementById("myImage");

    // Bild ein-/ausblenden beim Klick
    button.addEventListener("click", function () {
        if (image.style.display === "none" || image.style.display === "") {
            image.style.display = "block";
            button.textContent  = "Bild verstecken";
        } else {
            image.style.display = "none";
            button.textContent  = "Bild anzeigen";
        }
    });

});
