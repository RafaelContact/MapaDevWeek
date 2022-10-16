//  Objetivo 
//  quando clicar na aba esconder o da aba anterior e mostrar o outro
/* 
1 passo pegar os elementos que representam as abas
2 quando o usuário clicar , desmarcar a aba selecionada
3 marcar a aba clicada como elecionada 
4 exibir o conteúdo escondendo o anterior
*/
console.log(document.querySelectorAll(".aba"))
//  olando no console vai dar pra ver que tem dois

const abas = document.querySelectorAll(".aba")
abas.forEach(aba =>  {
     aba.addEventListener("click", function(){
        console.log("clicou na aba", aba)
     })
})