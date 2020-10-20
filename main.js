$(document).ready(function () {
   $('#next').click(function(){
       console.log('cliquei');
       verificaAlive();
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
});