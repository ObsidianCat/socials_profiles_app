/**
 * Created by Lula on 6/2/2016.
 */
angular.module('paloAltoFrontApp').directive('menuItem', [
    function () {
        function linker(scope, element, attrs) {
            element.on("click", function(){
                element.addClass("active");
                element.siblings().removeClass("active");
            });
        }
        return {
            restrict: 'A',
            link: linker
        };
    }
]);