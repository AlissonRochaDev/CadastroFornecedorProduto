function TratarFornecedor(){
    if(document.formFornecedor.rSocial.value == ''){
        alert("Por favor, preencher o campo Razão Social!");
        document.formFornecedor.rSocial.focus();
        return false;
    }

    if(document.formFornecedor.nomeF.value == ''){
        alert("Por favor, preencher o campo Nome Fantasia!");
        document.formFornecedor.nomeF.focus();
        return false;
    }

    if(document.formFornecedor.insEstado.value == ''){
        alert("Por favor, preencher o campo Inscrição Estadual!");
        document.formFornecedor.insEstado.focus();
        return false;
    }

    if(document.formFornecedor.cnpj.value == ''){
        alert("Por favor, preencher o campo CNPJ!");
        document.formFornecedor.cnpj.focus();
        return false;
    }

    if(document.formFornecedor.local.value == ''){
        alert("Por favor, preencher o campo Endereço!");
        document.formFornecedor.local.focus();
        return false;
    }

    if(document.formFornecedor.bairro.value == ''){
        alert("Por favor, preencher o campo Bairro!");
        document.formFornecedor.bairro.focus();
        return false;
    }

    if(document.formFornecedor.city.value == ''){
        alert("Por favor, preencher o campo Município!");
        document.formFornecedor.city.focus();
        return false;
    }

    if(document.formFornecedor.insMunicipio.value == ''){
        alert("Por favor, preencher o campo Inscrição Municipal!");
        document.formFornecedor.insMunicipio.focus();
        return false;
    }

    if(document.formFornecedor.cep.value == ''){
        alert("Por favor, preencher o campo CEP!");
        document.formFornecedor.cep.focus();
        return false;
    }

    if(document.formFornecedor.numero.value == ''){
        alert("Por favor, preencher o campo Número!");
        document.formFornecedor.numero.focus();
        return false;
    }

    if(document.formFornecedor.adc.value == ''){
        alert("Por favor, preencher o campo Complemento!");
        document.formFornecedor.adc.focus();
        return false;
    }

    if(document.formFornecedor.estado.value == ''){
        alert("Por favor, selecione um Estado!");
        document.formFornecedor.estado.focus();
        return false;
    }

    if(document.formFornecedor.email.value == ''){
        alert("Por favor, preencher o campo E-mail!");
        document.formFornecedor.email.focus();
        return false;
    }

    if(document.formFornecedor.tele.value == ''){
        alert("Por favor, preencher o campo Telefone (WhatsApp)!");
        document.formFornecedor.tele.focus();
        return false;
    }

    if(document.formFornecedor.contato.value == ''){
        alert("Por favor, preencher o campo Nome da Pessoa de Contato!");
        document.formFornecedor.contato.focus();
        return false;
    }
}

function TratarProdutoOne(){
    if(document.formProductOne.produto.value == ''){
        alert("Por favor, preencher o campo Nome do Produto!");
        document.formProductOne.produto.focus();
        return false;
    }
    
    if(document.formProductOne.uniMedida.value == ''){
        alert("Por favor, selecione uma Unidade de Medida!");
        document.formProductOne.uniMedida.focus();
        return false;
    }
    
    if(document.formProductOne.quantidade.value == ''){
        alert("Por favor, preencher o campo Quantidade em Estoque!");
        document.formProductOne.quantidade.focus();
        return false;
    }
    
    if(document.formProductOne.vEstoque.value == ''){
        alert("Por favor, preencher o campo Valor em Estoque (R$)!");
        document.formProductOne.vEstoque.focus();
        return false;
    }
}

function TratarProdutoTwo(){
    if(document.formProductTwo.produto.value == ''){
        alert("Por favor, preencher o campo Nome do Produto!");
        document.formProductTwo.produto.focus();
        return false;
    }
    
    if(document.formProductTwo.uniMedida.value == ''){
        alert("Por favor, selecione uma Unidade de Medida!");
        document.formProductTwo.uniMedida.focus();
        return false;
    }
    
    if(document.formProductTwo.quantidade.value == ''){
        alert("Por favor, preencher o campo Quantidade em Estoque!");
        document.formProductTwo.quantidade.focus();
        return false;
    }
    
    if(document.formProductTwo.vEstoque.value == ''){
        alert("Por favor, preencher o campo Valor em Estoque (R$)!");
        document.formProductTwo.vEstoque.focus();
        return false;
    }
}