'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the doozie' + chalk.red('Animations') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      
      this.mkdir('sass');
      this.fs.copy(
        this.templatePath('main.scss'),
        this.destinationPath('/sass/main.scss')
      );
      this.fs.copy(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
      this.mkdir('tasks');
      this.fs.copy(
        this.templatePath('tasks/less2stylus.js'),
        this.destinationPath('/tasks/less2stylus.js')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
