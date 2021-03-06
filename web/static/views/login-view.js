define(['jquery', 'underscore', 'backbone', 'views/pageview'],
function($, _, backbone, PageView){
    'use strict';
    var LoginView = PageView.extend({
        events: {
            'click .login-btn': 'login',
        },

        success: function(){
            Backbone.trigger("user-login");
            Backbone.trigger("url-navigate", "random-walk", {trigger: true});
        },

        login: function(){
            var username = $("#login-view .username").val();
            var password = $("#login-view .password").val();
            var self = this;
            $.post("/api/account/login", {
                username: username,
                password: password,
            }).done(function(data){
                console.log(data);
                if(data.ok){
                    self.success();
                }else{
                    Backbone.trigger("show-alert", data.detail);
                }
            });
        },


    });


    return LoginView;

});

