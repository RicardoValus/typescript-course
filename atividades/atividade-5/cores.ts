// Declare um tipo CorPrimaria que represente uma cor primária (vermelho, azul ou amarelo) usando uma união de tipos. 
// Em seguida, declare um tipo CorSecundaria que represente uma cor secundária (verde, roxo ou laranja) usando também uma união de tipos. 
// Por fim, declare um tipo PaletaCores que represente uma paleta de cores contendo uma cor primária e uma cor secundária.

type CorPrimaria = "Azul" | "Vermelho" | "Amarelo"
type CorSecundaria = "Roxo" | "Verde" | "Laranja"
type PaletaCores = {
    corPrimaria: CorPrimaria,
    corSecundaria: CorSecundaria
}

const minhaPaleta: PaletaCores = {
    corPrimaria: "Azul",
    corSecundaria: "Roxo"
}