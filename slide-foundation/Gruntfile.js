/* global module:false */
module.exports = function(grunt) {
	var root = grunt.option('root') || '.';

	if (!Array.isArray(root)) root = [root];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			src: 'css/source/open-drupal.scss',
			dest: 'css/open-drupal.css'
		},

		watch: {
			files: [ 'css/source/open-drupal.scss' ],
			tasks: 'css'
		},
    
    postcss: {
      options: {
        map: true,

        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },
    
	});

  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-postcss' );
	grunt.loadNpmTasks( 'grunt-sass' );
	
	grunt.registerTask( 'css', [ 'sass', 'postcss' ] );
	grunt.registerTask( 'default', [ 'css' ] );
};
