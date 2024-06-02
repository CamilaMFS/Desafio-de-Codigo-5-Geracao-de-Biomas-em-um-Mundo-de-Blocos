const quantidadeGolpes = parseInt(prompt("Informe a quantidade de golpes:"));

let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];


for (let i = 1; i <= quantidadeGolpes; i++) {
    let minaIndex = (i - 1) % minerais.length;
    console.log(i + ": " + minerais[minaIndex]);
}

// 1: Carvao
// 2: Ferro
// 3: Diamante
// 4: Pedra