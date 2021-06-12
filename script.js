
function updateRate() 
{
   
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    document.getElementById("result").innerHTML="";
    
}


function  ComputeInterest(){

   var principal=document.getElementById("principal").value;  
   if(principal<=0){
              alert("Enter a positive number");
              document.getElementById("principal").focus();
    } 
    else{
               var rate=document.getElementById("rate").value;
               var years=document.getElementById("years").value;
               console.log(years);
               var amount=principal * years * rate/100;
               console.log(principal * rate);
               var year = new Date().getFullYear()+parseInt(years);
               document.getElementById("result").innerHTML="<br>If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    }

}

function clearResult()
{
       document.getElementById("result").innerHTML="";
}

 

   




        
