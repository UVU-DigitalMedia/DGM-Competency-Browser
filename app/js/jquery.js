/* ---------------------------------------- jQuery Scripts */
'use strict';

jQuery(document).ready(function(){
    
    // Call Functions
    toggle_class('header .menu .drawer', 'header .menu nav');
    toggle_class('header .menu nav ul li a', 'header .menu nav');
    toggle_class('header .menu .drawer', '.app-wrapper');
    toggle_class('header .menu nav ul li a', '.app-wrapper');
    toggle_class('header .menu .drawer', 'footer');
    toggle_class('header .menu nav ul li a', 'footer');
    toggle_class('header .menu .user', 'header .menu .user .extra');
    toggle_class('header .menu .user', 'header .menu .user');
    
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