$(document).ready(function () {
   $('#next').click(function(){
       console.log('cliquei');
       var selecionadas = verificaAlive();
       console.log(selecionadas);
       verificaVizinhosCelulaAlive(selecionadas[0]);
       $(this).prop('disabled',true)
       $('#mensagem').prop('hidden',false);

   });

   function verificaAlive(){
       var selected =[];
       $('#tbody tr').each(function(){

        if( $(this).find('.alive').attr('id') != undefined ){
            selected.push( $(this).find('.alive').attr('id'));
        };
       
       });
       return selected;
   }

   function verificaVizinhosCelulaAlive(celulaAlive){
    console.log(celulaAlive);
    var celulaAliveIndex = $('#'+ celulaAlive).index();
    var trIndex = $('#'+ celulaAlive).parent('tr').index();
   
    var linhaCimaQuadrado1 = $('#'+ celulaAlive).parent().parent().children('tr').eq(trIndex-1).children('td').eq(celulaAliveIndex-1).attr('id');
    var linhaCimaQuadrado2 = $('#'+ celulaAlive).parent().parent().children('tr').eq(trIndex-1).children('td').eq(celulaAliveIndex).attr('id');
    var linhaCimaQuadrado3 = $('#'+ celulaAlive).parent().parent().children('tr').eq(trIndex-1).children('td').eq(celulaAliveIndex+2).attr('id');
   
    var linhaMeioQuadrado1 = $('#'+ celulaAlive).parent().children().eq(celulaAliveIndex-1).attr('id');
    var linhaMeioQuadrado2 = celulaAlive
    var linhaMeioQuadrado3 = $('#'+ celulaAlive).parent().children().eq(celulaAliveIndex+1).attr('id');;
   
    var linhaMeio2Quadrado1 =$('#'+ celulaAlive).parent().parent().children('tr').eq(trIndex+1).children('td').eq(celulaAliveIndex-1).attr('id');
    var linhaMeio2Quadrado2 =$('#'+ celulaAlive).parent().parent().children('tr').eq(trIndex+1).children('td').eq(celulaAliveIndex).attr('id');
    var linhaMeio2Quadrado3 =$('#'+ celulaAlive).parent().parent().children('tr').eq(trIndex+1).children('td').eq(celulaAliveIndex+1).attr('id');

    var linhaBaixoQuadrado1 =$('#'+ celulaAlive).parent().parent().children('tr').eq(trIndex+2).children('td').eq(celulaAliveIndex-1).attr('id');
    var linhaBaixoQuadrado2 =$('#'+ celulaAlive).parent().parent().children('tr').eq(trIndex+2).children('td').eq(celulaAliveIndex).attr('id');
    var linhaBaixoQuadrado3 =$('#'+ celulaAlive).parent().parent().children('tr').eq(trIndex+2).children('td').eq(celulaAliveIndex+1).attr('id');

    var ArrayVizinhosQuadrado1 = [
        linhaCimaQuadrado1, 
        linhaCimaQuadrado2, 
        linhaCimaQuadrado3, 
        linhaMeioQuadrado1, 
        linhaMeioQuadrado2, 
        linhaMeioQuadrado3, 
        linhaMeio2Quadrado1, 
        linhaMeio2Quadrado2, 
        linhaMeio2Quadrado3, 
        linhaBaixoQuadrado1, 
        linhaBaixoQuadrado2, 
        linhaBaixoQuadrado3
    ];
    var contadorVizinhosQuadrado1 = 0;
    
    
    ArrayVizinhosQuadrado1.forEach(function(item, i){
       
        
        console.log(item,i);
        if($('#'+item).hasClass('alive') && (i !== 7) && (i!==10)){
            contadorVizinhosQuadrado1 = contadorVizinhosQuadrado1 +1;
        }

         //regra 3
        if(!$('#'+item).hasClass('alive') && (i === 6)){
            $('#'+item).addClass('alive');
        }
        //regra 3
        if(!$('#'+item).hasClass('alive') && (i === 8)){
            $('#'+item).addClass('alive');
        }
       
       
    });
 
    console.log(contadorVizinhosQuadrado1);
    
    //regra 1
    if(contadorVizinhosQuadrado1  < 2){
     $('#'+celulaAlive).removeClass('alive');
     $('#'+linhaBaixoQuadrado2).removeClass('alive');
     
    }
    

   }
});