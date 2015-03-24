/* ---------------------------------------- jQuery Scripts */
'use strict';

jQuery(document).ready(function(){
    
   // Call Function
   toggle_openClass('.drawer', '.drawer i.fa');
   toggle_openClass('nav ul li', '.drawer i.fa');
   toggle_openClass('.drawer', 'nav');
   toggle_openClass('nav ul li', 'nav');
   toggle_openClass('.drawer', '.app-wrapper');
   toggle_openClass('nav ul li', '.app-wrapper');
  
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
              
   }
    
});