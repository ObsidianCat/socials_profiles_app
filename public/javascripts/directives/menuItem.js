/**
 * Directive intended for use in elements of navigation menus.
 */

var menuItem = function ($location) {
    function linker(scope, element, attrs) {

        // Each element decides if it's active or not based on path
        function toggleActive() {
            // On first render
            if (element.find("a").attr("href").indexOf($location.path()) >= 0) {
                element.addClass("active");
            }
            else {
                element.removeClass("active");
            }
        }

        scope.$on("$routeChangeSuccess", function() {
            toggleActive();
        });

        // On menu click
        element.on("click", function(){
            element.addClass("active");
            element.siblings().removeClass("active");
        });
    }
    return {
        restrict: 'A',
        link: linker
    };
};

module.exports = menuItem;
