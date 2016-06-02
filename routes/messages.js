/**
 * Created by Lula on 6/1/2016.
 */
var express = require('express');
var router = express.Router();

/* GET mockup data for inbox */
router.get('/', function(req, res, next) {
    res.json({data:[
        {
            "from":"Mor Pinkweiss",
            "to": "Lula Leus",
            "title":"Lorem ipsum dolor sit amet?",
            "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus semper dolor, in ultricies lorem bibendum et. Nam dictum, quam ut pulvinar scelerisque, massa ligula condimentum urna, quis blandit mi elit eleifend leo. Nulla id tortor mattis enim gravida euismod in eget lectus. Aliquam vitae blandit sapien, eu commodo sapien. Etiam sollicitudin varius mauris, nec auctor risus suscipit ut. Aliquam in rhoncus turpis, sed venenatis purus. Nullam eu sapien quis ante pulvinar vehicula eget sit amet tortor. Sed finibus placerat pharetra.",
            "attachment":"false",
            "isStarred":"false",
            "dateString":"21464856574461"
        },
        {
            "from":"Mor Pinkweiss",
            "to": "Lula Leus",
            "title":"Sed rutrum diam massa, vel!",
            "body":"Vestibulum laoreet eros ornare turpis volutpat, at dignissim purus efficitur. Quisque non vulputate ante. Fusce libero ligula, porta a commodo nec, consectetur non arcu. Vivamus eget orci justo. Nam quis quam dolor. Mauris luctus dui et dui placerat, sit amet elementum mauris gravida. In in eros sit amet felis pulvinar cursus vel facilisis ante. Maecenas eget egestas ipsum. Sed sit amet sem posuere, rutrum lacus id, congue nibh. Morbi nisi velit, bibendum ac neque a, tempus euismod est. Mauris nec suscipit nisi, ullamcorper dapibus nunc.",
            "attachment":"false",
            "isStarred":"false",
            "dateString":"1464856574469"
        },
        {
            "from":"Lula Leus",
            "to": "Mor Pinkweiss",
            "title":"Sed rutrum diam massa, vel!",
            "body":"Vestibulum laoreet eros ornare turpis volutpat, at dignissim purus efficitur. Quisque non vulputate ante. Fusce libero ligula, porta a commodo nec, consectetur non arcu. Vivamus eget orci justo. Nam quis quam dolor. Mauris luctus dui et dui placerat, sit amet elementum mauris gravida. In in eros sit amet felis pulvinar cursus vel facilisis ante. Maecenas eget egestas ipsum. Sed sit amet sem posuere, rutrum lacus id, congue nibh. Morbi nisi velit, bibendum ac neque a, tempus euismod est. Mauris nec suscipit nisi, ullamcorper dapibus nunc.",
            "attachment":"false",
            "isStarred":"false",
            "dateString":"1464856574461"
        },
        {
            "from":"Lula Leus",
            "to": "Mor Pinkweiss",
            "title":"Sed rutrum diam massa, vel!",
            "body":"Vestibulum laoreet eros ornare turpis volutpat, at dignissim purus efficitur. Quisque non vulputate ante. Fusce libero ligula, porta a commodo nec, consectetur non arcu. Vivamus eget orci justo. Nam quis quam dolor. Mauris luctus dui et dui placerat, sit amet elementum mauris gravida. In in eros sit amet felis pulvinar cursus vel facilisis ante. Maecenas eget egestas ipsum. Sed sit amet sem posuere, rutrum lacus id, congue nibh. Morbi nisi velit, bibendum ac neque a, tempus euismod est. Mauris nec suscipit nisi, ullamcorper dapibus nunc.",
            "attachment":"false",
            "isStarred":"false",
            "dateString":"1464856571463"
        },
        {
            "from":"Lula Leus",
            "to": "Mor Pinkweiss",
            "title":"Sed rutrum diam massa, vel!",
            "body":"Vestibulum laoreet eros ornare turpis volutpat, at dignissim purus efficitur. Quisque non vulputate ante. Fusce libero ligula, porta a commodo nec, consectetur non arcu. Vivamus eget orci justo. Nam quis quam dolor. Mauris luctus dui et dui placerat, sit amet elementum mauris gravida. In in eros sit amet felis pulvinar cursus vel facilisis ante. Maecenas eget egestas ipsum. Sed sit amet sem posuere, rutrum lacus id, congue nibh. Morbi nisi velit, bibendum ac neque a, tempus euismod est. Mauris nec suscipit nisi, ullamcorper dapibus nunc.",
            "attachment":"false",
            "isStarred":"false",
            "dateString":"1464856574963"
        }
    ]});
});

module.exports = router;
