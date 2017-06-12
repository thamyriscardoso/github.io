function Conta(saldo=500){
 if(saldo>=500){
	this.saldo=saldo;
	this.historico=[];
	this.historico.push("abertura: +" +saldo);
	this.sacar=function(variavel){
	    if((variavel>=5) && (variavel<=saldo)){
	      this.saldo=this.saldo-variavel;
				this.historico.push("saque: -" +variavel);
	      return true;
	    }
	    else{
	      return false;
	    }
	  }
	  this.depositarDinheiro=function(variavel){
	    if(variavel<=1000){
	      this.saldo=this.saldo+variavel;
				this.historico.push("deposito dinheiro: +" +variavel);
	      return true;
	    }
	    else{
	      return false;
	    }
	  }
	  this.depositarCheque=function(variavel){
	    if(variavel<=10000){
	      this.saldo=this.saldo+variavel;
				this.historico.push("deposito cheque: +" +variavel);
	      return true;
	    }
	    else{
	      return false;
	    }
	  }
	  this.transfere=function(valor,outraconta){
      if (valor>5000) {
        throw e="transferencia excede limite de 5000";
      }
      if (valor>this.saldo) {
        throw e="saldo insuficiente para transferencia";
      }
      if(valor<=5000 && this.saldo>=valor){
				this.saldo=this.saldo-valor;
				this.historico.push("transferencia: -" +valor);
				outraconta.saldo+=valor;
				outraconta.historico.push("transferencia: +" +valor);
				return true;
	  	}
			else{
				return false;
			}
	  }
	return true;
 }
 else{
  throw e="saldo inicial invalido";
 }
}
