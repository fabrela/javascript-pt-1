const nome = "Laura";
const idade = 17;
const cidade = "Londrina";
const frase = `meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`;

console.log("Olá, meu nome é " + nome +", tenho " + idade +" anos e sou de " + cidade)
console.log(nome,idade,cidade);
console.log(frase)

const idadeEmDias = idade * 365;
console.log("Minha idade em dias é: " + idadeEmDias);
const idadeEmMeses = idade * 12; 
console.log("Minha idade em meses é: " + idadeEmMeses);

const hobby = "ouvir música"
const cachorro = 2
console.log("Olá, meu nome é " + nome +", tenho " + idade +" anos, que são " + idadeEmDias +" dias e sou de " + cidade +". Tenho " + cachorro +" cachorros e gosto de " + hobby +".")

const precoUnit = 20
const qtde = 20
const subtotal = precoUnit * qtde;

console.log(subtotal)

const valorMinimo = 100
const temDesconto = subtotal > valorMinimo;

console.log(temDesconto)

const cidadeCliente = "Londrina";
const cidadeLoja = "Londrina";
const freteGratis = temDesconto && (cidadeCliente == cidadeLoja)

console.log(freteGratis)

const resultado = `Subtotal: R$ ${subtotal} 
Tem desconto: ${temDesconto} 
Frete grátis: ${freteGratis}`

console.log(resultado)
