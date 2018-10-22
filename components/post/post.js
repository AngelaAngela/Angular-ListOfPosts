"use strict";
{
	angular.module("app")
	.component("post",{
		
		templateUrl: "components/post/post.html",
		controller: 'SocialPostsController',
		bindings: {
			post: "<",


		}

	})
}

// has one inbound binding called post

// inbound = string
//< binds expressions to child components
// & binds functions between components
// @ binds strings between components