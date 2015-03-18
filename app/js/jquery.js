/* ---------------------------------------- jQuery Scripts */
'use strict';

jQuery(document).ready(function(){
    
   // Call Function
  toggle_openClass('.drawer', 'nav');
  toggle_openClass('.drawer', '.app-wrapper');
   
   // Toggle Open Class
   function toggle_openClass(trigger, target){
    
       // Add Event Handler
       jQuery(trigger).on({
           
           // On Click
           click: function(){
               
               // Toggle Class
               jQuery(target).toggleClass('open', 200);
               
           }
           
       });
       
       // Sniff for Target Children
       if($(target).find('a').length){
           
           // Declare Variables
           var childrenLinks = $(target).find('a');
           
           // Add Event Handler
           jQuery(childrenLinks).on({
               
               // On Click
               click: function(){
                   
                   // Toggle Class
                   jQuery(target).toggleClass('open', 200);
                   
               }
               
           });
               
       }
       
   }
    
});



//if($(parent).find('a').length){alert('yes');}

 // Call Functions
   // toggle_class('.drawer', '.drawer i.fa'); /* */ toggle_class('nav ul li', '.drawer i.fa');
    
    
    // User Login
   // toggle_class('nav li.sign-in', '.user-login');
    
   // toggle_class('.user-login .close i.fa', '.user-login');
   // toggle_class('.user-login a', '.user-login');
    
    // Check to See if User Login Is Already Open
   // if($('.user-login.open')[0]){console.log(alreadyOpen);}
    
    
    
    // Toggle Class
  //  function toggle_class(trigger, target){
        
        // Add Event Handler
       // jQuery(trigger).on({
            
            // On Click
         //   click: function(){
        //        jQuery(target).toggleClass('open', 200);
        //    }
         //   
       // });
        
   // }