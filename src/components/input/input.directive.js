(function() {
        'use strict';
    
        angular.module('app.input')
            .directive('tmplInput', directiveFunction)
            .controller('InputController', ControllerFunction); 

        // ----- directiveFunction -----
        directiveFunction.$inject = [];
        
            /* @ngInject */
            function directiveFunction() {
        
                var directive = {
                    restrict: 'E',
                    templateUrl: 'components/input/input.html',
                    scope: { 
                     },
                    controller: 'InputController',
                    controllerAs: 'vm'
                };
        
                return directive;
            }
        
        // ----- ControllerFunction -----
        ControllerFunction.$inject = ['logger'];

        /* @ngInject */
        function ControllerFunction(logger) {
          
            
        }
        
    
    })();
    