
$(document).ready(function () {
       
        $("#SaveData").click(function(){  // Recuperation des valeurs
            var name = $("#name").val();
            var email = $("#emails").val();
            var password = $("#passwords").val();
            
          
            if( name != "" && email != "" && password !="" ){  // check les valeurs 
                 $.ajax({
                    url:'/ajoutelogdata',
                    type:'post',
                    data:{name,email,password},
                    success:function(response){
                        if(response.request){
                            //send fetched
                            console.log(response);
                        }  
                    }
                });
            }
          })
        });  



$(document).ready(()=>{
    $('#Signin2').submit((e)=>{
      e.preventDefault();
      $.ajax({
        url:'/login',
        type:'post',
        contentType:'application/json',
        data: JSON.stringify($('#Signin2').serializeArray()),
        succes :(response)=>{
          console.log('successfully got response');
          console.log(response);
        }
      });

    })
  });
  $(document).ready(()=>{
    $('#login2').submit((e)=>{
      e.preventDefault();
      $.ajax({
        url:'/login',
        type:'post',
        contentType:'application/json',
        data: JSON.stringify($('#login2').serializeArray()),
        succes :(response)=>{
          console.log('successfully got response');
          console.log(response);
        }
      });

    })
  })


     

  


