'use strict';

var $ = require('jquery');
var Backbone = require('backbone');

var comment_model = Backbone.Model.extend({
  defaults: {
    docId: '',
    label: '',
    comment: '',
    commentHtml: '',
    files: [],
    indexes: []
  }
});

var index_comparator = function(first, second) {
    var l = Math.max(first.length, second.length)

    for (var i = 0; i < l; i++) {
        if (first[i] === undefined) {
            return -1;
        } else if (second[i] === undefined) {
            return 1;
        } else if (first[i] < second[i]) {
            return -1;
        } else if (first[i] > second[i]) {
            return 1;
        }
    }
    return 0;
};

var comment_comparator = function(first, second) {
    if (first.get('tocId') < second.get('tocId')) {
        return -1;
    } else if (first.get('tocId') > second.get('tocId')) {
        return 1;
    } else {
        return index_comparator(first.get('indexes'), second.get('indexes'));
    }
};

module.exports = {
    CommentModel: comment_model,
    commentComparator: comment_comparator
};
