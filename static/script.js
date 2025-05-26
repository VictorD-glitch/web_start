let bbleu = 0
let brouge = 0
let bverte = 0
let bnoire = 0
let bblanche = 0
let bjaune = 0
document.getElementById("Bananeclique").addEventListener("click", () => {
  // Envoi la requête POST au backend Python
  fetch("/check-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("response").textContent = data.result;
    })
    .catch(() => {
      document.getElementById("response").textContent = "Erreur serveur.";
    });
});
