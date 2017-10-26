(function() {
    
        'use strict';
    
        angular.module('app.desafio-dialog')
            .controller('DesafioDialogController', ControllerFunction); 

        // ----- ControllerFunction -----
        ControllerFunction.$inject = ['$mdDialog'];
    
        /* @ngInject */
        function ControllerFunction($mdDialog) {
        
            var vm = this;
            vm.handleCancel = handleCancel;
    
    
            function handleCancel() {
                return $mdDialog.hide();
            }
        }
    
    })();
    