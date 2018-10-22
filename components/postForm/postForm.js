"use strict";
{
	angular.module("app")
	.component("postForm",{
		templateUrl: "components/postForm/postForm.html",
		controller:"SocialPostsController",
		bindings:{
			onSubmit: "<",

		}
	});
}


// post component has one outbound binding called onSumbit

// outbound binding = function
// < binds expressions to child components
// & binds functions between components
// @ binds strings between components