/* ---------------------------------------- jQuery Scripts */
'use strict';

jQuery(document).ready(function(){
    
    // Call Functions
    toggle_class('.drawer', '.drawer i.fa'); /* */ toggle_class('nav ul li', '.drawer i.fa');
    toggle_class('.drawer', 'nav'); /* */ toggle_class('nav ul li', 'nav');
    toggle_class('.drawer', '.app-wrapper'); /* */ toggle_class('nav ul li', '.app-wrapper');
    toggle_class('nav li.sign-in', '.user-login'); /* */ toggle_class('.user-login .close i.fa', '.user-login');
    toggle_class('.breadcrumbs .icon', '.breadcrumbs ul');
    
    
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