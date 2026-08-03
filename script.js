const botoes = document.querySelectorAll   ("button");

botoes.forEach (funcion  (botao)) {
   let curtiu = false;
   botao.addEventListener("click",botaoClicado);
   funcion botaoClicado(){
      console.log("fui clicado");
      let texto=botao.querySelectorAll("span");
      if (curtiu===false){
         texto.texoContent++;
      }else{
         texto.textContent--;
         curtiu=false;
         
      }
    
   }
}

