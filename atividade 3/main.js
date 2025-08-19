const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");
frm.addEventListener("subimit",(e)=>{
    const veiculo = frm.inVeiculoo.value;
    const preço = Number (frm.inPreço.value);

    const entrada = preço *0.50;
    const parcela =(preço * 0.50) /12;

    resp1.innerText = `Promoção: ${veiculo}`;
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resp3.innerText = `+12 de R$ ${parcela.toFixed(2)}`;

    e.preventDeFault();
})