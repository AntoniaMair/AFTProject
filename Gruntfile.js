const sass = require('node-sass');

module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'public/main.css': 'assets/scss/styles.scss'
                }
            }
        },
        concat: {
            dist: {
                src: ['assets/js/classes/class.city.js', 'assets/js/classes/class.hotel.js', 'assets/js/core/core.app.js', 'assets/js/core/core.model.js',
                'assets/js/core/core.spa-router.js', 'assets/js/core/core.spa-view.js', 'assets/js/core/core.translator.js', 'assets/js/core/core.utils.js',
                'assets/js/views/view.city.js', 'assets/js/views/view.hotel.js', 'assets/js/views/view.login.js', 'assets/js/views/view.startpage.js', 'assets/js/main.js' ],
                dest: 'public/main.js',
            },
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['public/main.css'],
                    dest: '',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'public/main.min.js': ['public/main.js']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'public/index.html': 'index.html'
                }
            }
        },
        jshint: {
            options: {
                'esversion': 8,
            },
            files: ['assets/js/*.js']
        },
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['public/main.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['public/main.css']
            }
        },
        watch: {
            styles: {
                files: ['assets/scss/*.scss'],
                tasks: ['sass', 'cssmin'],
            },
            scripts: {
                files: ['assets/js/*.js'],
                tasks: ['concat', 'uglify'],
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'assets/scss/*.scss',
                        'assets/js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'http://127.0.0.1/c-holidays_v4/#/'
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'uglify', 'htmlmin']);
    grunt.registerTask('checkCode', ['jshint', 'csslint:lax']);
    grunt.registerTask('serve', ['default','browserSync', 'watch']);
};