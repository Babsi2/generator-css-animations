'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the tiptop' + chalk.red('Test') + ' generator!'
    ));

    var prompts = [{
      name: 'someOption',
      message: 'Whählen Sie eine Stylesheetvariante? (CSS/Stylus/Less/Scss)',
      default: 'Scss'
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.log(this.someOption);
      switch(this.someOption){
        case 'Stylus':
          this.log('stylus');
          this.mkdir('sass');
          this.fs.copy(
            this.templatePath('main.scss'),
            this.destinationPath('/sass/main.scss')
          );
          this.mkdir('tasks');
          this.fs.copy(
            this.templatePath('_scss2stylus.js'),
            this.destinationPath('/tasks/scss2stylus.js')
          );
          this.mkdir('stylus');
          this.fs.copy(
            this.templatePath('_stylusGruntfile.js'),
            this.destinationPath('Gruntfile.js')
          );
          this.log('if done, run grunt to build main.stylus');
        break;

        case 'Less':
          this.log('less');
          this.mkdir('sass');
          this.fs.copy(
            this.templatePath('main.scss'),
            this.destinationPath('/sass/main.scss')
          );
          this.fs.copy(
            this.templatePath('_lessGruntfile.js'),
            this.destinationPath('Gruntfile.js')
          );
          this.log('if done, run grunt to build main.less');
        break;

        case 'Scss':
          this.log('scss');
          this.mkdir('sass');
          this.fs.copy(
            this.templatePath('main.scss'),
            this.destinationPath('/sass/main.scss')
          );
        break;

        case 'Css':
          this.log('css');
          this.mkdir('sass');
          this.fs.copy(
            this.templatePath('main.scss'),
            this.destinationPath('/sass/main.scss')
          );
          this.fs.copy(
            this.templatePath('_cssGruntfile.js'),
            this.destinationPath('Gruntfile.js')
          );
          this.log('if done, run grunt to build main.css');
        break;

        case 'CSS':
          this.log('css');
          this.mkdir('sass');
          this.fs.copy(
            this.templatePath('main.scss'),
            this.destinationPath('/sass/main.scss')
          );
          this.fs.copy(
            this.templatePath('_cssGruntfile.js'),
            this.destinationPath('Gruntfile.js')
          );
          this.log('if done, run grunt to build main.css');
        break;
      }
      this.fs.copy(
        this.templatePath('index.html'),
        this.destinationPath('index.html')
      );
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
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
