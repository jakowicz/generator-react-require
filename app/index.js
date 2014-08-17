var yeoman = require("yeoman-generator");

module.exports = yeoman.generators.Base.extend({

    init: function() {

        this.on("end", function() {
            if (!this.options["skip-install"]) {
                this.installDependencies({
                    skipMessage: "Npm and Bower packages are already installed"
                });
            } else {
                console.log("Npm and Bower install was skipped");
            }
        });

    },

    copyFiles: function() {

        this.directory("build", "build");
        this.directory("node_modules", "node_modules");
        this.directory("preprocess", "preprocess");
        this.directory("server", "server");
        this.directory("templates", "templates");
        this.directory("tests", "tests");
        this.directory("www", "www");

        this.copy(".bowerrc", ".bowerrc");
        this.copy(".editorconfig", ".editorconfig");
        this.copy(".gitattributes", ".gitattributes");
        this.copy(".gitignore", ".gitignore");
        this.copy(".jscsrc", ".jscsrc");
        this.copy(".jshintrc", ".jshintrc");

        this.copy("bower.json", "bower.json");
        this.copy("Gruntfile.js", "Gruntfile.js");
        this.copy("karma.conf.js", "karma.conf.js");
        this.copy("package.json", "package.json");

    }
});
