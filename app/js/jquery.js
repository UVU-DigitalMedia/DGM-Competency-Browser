/* ---------------------------------------- jQuery Scripts */
'use strict';

jQuery(document).ready(function(){
    
    // Call Functions
    toggle_class('header .nav .drawer', 'header .nav nav');
    toggle_class('header .nav nav ul li a', 'header .nav nav');
    toggle_class('header .nav .drawer', '.app-wrapper');
    toggle_class('header .nav nav ul li a', '.app-wrapper');
    
    // Toggle Class
    function toggle_class(trigger, target){
        
        // Add Event Handler
        jQuery(trigger).on({
            
            // On Click
            click: function(){
                jQuery(target).toggleClass('open', 200);
            }
            
        });
        
    }
    
});