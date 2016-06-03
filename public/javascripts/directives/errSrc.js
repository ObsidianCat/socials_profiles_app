/**
 * Directive deals with the problem when profile avatar image src not empty, but invalid.
 */
angular.module('paloAltoFrontApp').directive('errSrc', function() {
    return {
        link: function(scope, element, attrs) {
            element.bind('error', function() {
                if (attrs.src != attrs.errSrc) {
                    attrs.$set('src', attrs.errSrc);
                }
            });
        }
    }
});