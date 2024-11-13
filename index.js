const herois = [
    { nome: "A", xp: 850 },
    { nome: "B", xp: 2500 },
    { nome: "C", xp: 6665 },
    { nome: "D", xp: 11000 },
    { nome: "E", xp: 1400 },
    { nome: "E", xp: 8652 },

];

let nivel = "";

for (const heroi of herois) {

    if (heroi.xp < 1000) {
        nivel = "Ferro";
    } else if (heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}.`);
}
