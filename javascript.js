class ContaBancaria{
    constructor(titular,saldoInicial){
        this.titular=titular;
        this.saldo=saldoInicial;
    }
    verSaldo(){
    console.log(`Saldo atual de ${this.titular}:R$ ${this.saldo.toFixed(2)}`);
    }
    depositar(valor){
    if(valor<=0){
    console.log(`O valor do deposito deve ser positivo`);
    return;
    }
    this.saldo+=valor;
    console.log(`deposito de R$ ${valor.toFixed(2)} realizado com sucesso`);
    }
    sacar(valor){
    if(valor<=0){
    console.log(`O valor do saque deve 2000 para funcionario!`);
    return;
    }
    if(valor>this.saldo){
    console.log(`O valor do saque 2800 para chefe`);
    return;
    }
    this.saldo-=valor;
    console.log(`Saldo atualizado: ${this.saldo.toFixed(2)}`)
    }
    }
    let minhaConta= new ContaBancaria("joao",2000);
    minhaConta.verSaldo();
    minhaConta.depositar(2000);
    minhaConta.verSaldo();
    minhaConta.sacar(2800);
    