(function () {
    
        'use strict';
    
        angular.module('app.desafio')
            .directive('tmplDesafio', directiveFunction)
            .controller('DesafioController', ControllerFunction);

        // ----- directiveFunction -----
        directiveFunction.$inject = [];
    
        /* @ngInject */
        function directiveFunction() {
    
            var directive = {
                restrict: 'E',
                templateUrl: 'components/desafio/desafio.html',
                scope: { 
                 },
                controller: 'DesafioController',
                controllerAs: 'vm'
            };
    
            return directive;
        }
    
    
        // ----- ControllerFunction -----
        ControllerFunction.$inject = ['$mdDialog' , '$http'];

        //console.log(ControllerFunction.$inject);

        /* @ngInject */
        function ControllerFunction($mdDialog, $http) {

            var vm = this;
            vm.imgPath = "../../images/washedout.png";
            vm.modal = modal;
            vm.handleCancel = handleCancel;

            $http({
                method:"GET",
                url: "http://www.randomtext.me/api/"
            }).then(function(response){
               vm.content = response.data.text_out;
               vm.title = response.data.type;
            });

            function modal(param) {
                switch(param) {
                    case 'act1':
                    $mdDialog.show({
                        templateUrl: 'components/desafio-dialog/desafio-dialog.html',
                        controller: 'DesafioDialogController',
                        controllerAs: 'vm'
                    });
                        break;
                    case 'act2':
                    $mdDialog.show({
                        templateUrl: 'components/desafio-dialog/desafio-dialog2.html',
                        controller: 'DesafioDialogController',
                        controllerAs: 'vm'
                    });
                        break;
                    default:
                        break;
                }
            }
            function handleCancel(){
                return $mdDialog.hide();
            }
    
         
        }
    
    })();
    