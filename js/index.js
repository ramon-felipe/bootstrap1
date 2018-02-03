$(document).ready(function(){
  ajustaCollapseSobreNos();
})
$(window).on("resize", function(){
  ajustaCollapseSobreNos();
})

function ajustaCollapseSobreNos (){
  var tamanhoJanela = $(document).width();
  var cabecalhoCollapse = $("#paineis-sobre .card-header");
  var collapse = $("#paineis-sobre .fixCollapse");
  var primeiroCollapse = $("#paineis-sobre .fixCollapse:first");


  if(tamanhoJanela >= 768 && tamanhoJanela < 1024){
    primeiroCollapse.addClass("show");
  }
  else{
    primeiroCollapse.removeClass("show");
  }

  if(tamanhoJanela >= 1024){
    cabecalhoCollapse.attr("data-toggle","");
    collapse.removeClass("collapse");
  }
  else{
    cabecalhoCollapse.attr("data-toggle","collapse");
    collapse.addClass("collapse");
  }


}
