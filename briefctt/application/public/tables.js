$(document).ready(function () {
  getData();
  $("#btn-update").click(function(){  // Recuperation des valeurs
      var name = $("#name").val();
      var cin = $("#cin").val();
      var sex = $("#sex").val();
      var tele = $("#tele").val();
      var adress = $("#adress").val();
    
      if( name != "" && cin != "" && sex !="" && tele !="" && adress !=""){  // check les valeurs 
           $.ajax({
              url:'/ajoutetable',
              type:'post',
              data:{name,cin,sex,tele,adress},
              success:function(response){
                  if(response.request){
                      //send fetched
                      getData(response);
                  }}
          });
      }
  });
  
function getData(fetched){
  if(fetched===undefined){
  $.ajax({
      url: '/tables',
      type: 'get',
      success: function (response) {
          if (response.request) {
              // data correc
              getData(response.data);
          }
      },
  });
}}

});

