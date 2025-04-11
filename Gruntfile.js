module.exports = function(grunt) {
	grunt.initConfig({
	  sass: {
		options: {
		  implementation: require("sass"), // 👈 Agregado
		  sourceMap: true
		},
		dist: {
		  files: {
			'dist/css/bootstrap-custom.css': 'scss/bootstrap.scss'
		  }
		}
	  },
	  watch: {
		sass: {
		  files: ['scss/**/*.scss'],
		  tasks: ['sass']
		}
	  }
	});
  
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  
	grunt.registerTask('default', ['sass']);
  };