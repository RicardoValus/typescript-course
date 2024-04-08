// Declare um tipo Ponto que represente um ponto no plano cartesiano com coordenadas x e y, 
// ambos do tipo number. Em seguida, declare um tipo Distancia que represente a distância entre dois pontos, 
// com campos pontoA e pontoB, ambos do tipo Ponto. Não se preocupe em implementar cálculos de distância por enquanto, apenas defina os tipos.

type Ponto = {
    x: number,
    y: number
}

type Distancia = {
    pontoA: Ponto,
    pontoB: Ponto
}
