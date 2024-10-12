function recuperar_nome(){
    //exercicios 1 ao 4
    let nome = document.getElementById('Pnome').value;
    let sobrenome = document.getElementById('Snome').value;
    let idade = parseInt(document.getElementById('idade').value);
    let idade_mae = parseInt(document.getElementById('idade_mae').value);
    let idade_pai = parseInt(document.getElementById('idade_pai').value);
    let soma_idades = (idade + idade_mae + idade_pai);
    document.getElementById('info').textContent = `O nome do usuario é: ${nome} ${sobrenome}. E sua idade é de: ${idade}`;
    document.getElementById('info2').textContent = `A soma da sua idade + A idade de sua mae + A idade de seu pai é de ${soma_idades}`;
    console.log(`O nome do usuario é: ${nome} ${sobrenome} e sua idade e de: ${idade}`);
    console.log(`A soma da sua idade + a idade de sua mae + a idade de seu pai é de ${soma_idades}`)
    
}
//exercicios 5 e 6
//5
let frase = 'Your pain is the breaking of the shell that encloses your understanding. It is the bitter potion thar heals your sick self. Therefore, trust the physician and drink his remedy in silence and tranquility; Kahlil Gibran';
let separador = frase.split(';');
console.log(separador);
//6
let numeros = '1,2,3,4,5,6,7,8,9,0';
let separador2 = numeros.split(',');
console.log(separador2);