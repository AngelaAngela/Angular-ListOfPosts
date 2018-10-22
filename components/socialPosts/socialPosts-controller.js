"use strict";
{
    angular.module('app',[])
        .controller('SocialPostsController', function(){
            const $ctrl = this;
            
            $ctrl.posts = [
                {title: 'Dog', thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {title: 'Cat', thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {title: 'Pig', thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {title: 'Cow', thought: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                {title: 'Whale', thought:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            ];
            
    //     $ctrl.addText = function (){
    //         $ctrl.show = true;
    //      }   
    
    // // //add item to array in first position
    //  $ctrl.addPost = function(post){
    //     $ctrl.posts.unshift(post)
    //  }
        
        });
}


//
//              