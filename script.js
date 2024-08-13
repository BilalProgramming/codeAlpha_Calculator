//access user input
 let input=document.querySelector("#input");
 //acess buttons
 let buttons=document.querySelectorAll("#buttons button");

 let string="";

 //make array of btns
 let arr=Array.from(buttons);

 arr.forEach(button=>{
   button.addEventListener("click",(event)=>{//click listener to all buttons
       let value=event.target.innerHTML;
       
    if(value=="="){
 try{
       string=eval(string);//eval calculate all operation
       input.value=string;
       }
       catch{
           string="Error";
           string="";
       }
    }
    
    else if(value=="AC"){
string="";
input.value=string;

    }
    else if(value=="DE"){

      string=string.substring(0,string.length-1);
      input.value=string;
    }
    
    
    else{
  string+=value
  input.value=string;//display all elements on screen

    }
   })

})