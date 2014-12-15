module.exports = function (grunt) {

  grunt.initConfig({
      webdriver: {
          options: {
              desiredCapabilities: {
                  browserName: 'chrome'
              }
          },
          userTests: {
              tests: ['./test/selenium/selenium_spec.js']
          }
      },
    plato: {
      your_task: {
        files: [{
          expand: true,
          cwd: 'app/public/js',
          src: [
            '**/*.js',
            '!vendor/**/*.js',
          ],
            dest: 'plato/reports'
            }]
        }
        },
                nodewebkit: {
                options: {
                build_dir: './dist', // Where the build version of my node-webkit app is saved
                mac: true, // We want to build it for mac
                win: true, // We want to build it for win
                linux32: false, // We don't need linux32
                linux64: false, // We don't need linux64
                download_url: 'http://www.soundnodeapp.com/build/',
                mac_icns: './app/soundnode.icns',
                version: '0.10.4'
                },
                src: [
                './app/**/*',
                '!./app/public/stylesheets/sass',
                '!./app/public/stylesheets/config.rb',
                '!./**/*.sass-cache',
                '!./app/public/assets'
               ]
      },

      karma: {
        unit: {
          configFile: 'karma.conf.js'
        }
      },

      compass: {
        dev: {
          options: {
            sassDir: 'app/public/stylesheets/sass',
            cssDir: 'app/public/stylesheets/css'
          }
        },
        production: {
          options: {
            sassDir: 'app/public/stylesheets/sass',
            cssDir: 'app/public/stylesheets/css',
            environment: 'production',
            outputStyle: 'compressed',
            force: true
          }
        }
      },

      watch: {
        src: {
          files: [
            'app/public/stylesheets/sass/**/*.scss'
          ],
          tasks: ['dev']
        }
      }

    });

    grunt.loadNpmTasks('grunt-plato');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-webdriver');

    // Build desktop
    grunt.registerTask('build', [
    'compass:production',
    'nodewebkit'
    ]);

    // Plato
    grunt.registerTask('plato', [
    'plato:your_task'
    ]);

    // Dev
    grunt.registerTask('dev', [
    'compass:dev'
    ]);

    // Run tests
    grunt.registerTask('test', [
    'karma'
    ]);

    grunt.registerTask('mi', [
    'plato'
    ]);

//    grunt.registerTask('plato', [
//        'plato:your_task'
//    ]);

    grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

};
