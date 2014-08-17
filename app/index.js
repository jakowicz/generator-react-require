var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    sayYes: function() {
        console.log("YES");
    },
    sayNo: function() {
        console.log("NO");
    }
});
