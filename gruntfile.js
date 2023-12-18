module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks("grunt-csso");
    grunt.loadNpmTasks("grunt-browser-sync");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.initConfig({
        sass: {
            styles: {
                options: {
                    // implementation: sass,
                    style: 'expanded',
                    sourceMap: true
                },
                files: {
                    "app/css/styles.css": "app/sass/styles.scss"
                }
            }
        },
        postcss: {
            styles: {
                options: {
                    processors: [
                        require("autoprefixer")()
                    ]
                },
                src: "app/css/*.css"
            }
        },
        csso: {
            styles: {
                options: {
                    report: "gzip"
                },
                files: {
                    "app/css/styles.min.css": ["app/css/styles.css"]
                }
            }
        },
        watch: {
            styles: {
                files: ["app/sass/**/*.scss","app/sass/styles.scss", "app/js/main.js"],
                tasks: ["sass", "postcss", "csso", "uglify"]
            }
        },
        browserSync: {
            server: {
                bsFiles: {
                    src: ["app/*.html", "app/css/*.css", "app/js/**/*.js"]
                },
                options: {
                    server: "app/"
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    "app/js/main.min.js": ["app/js/main.js"]
                }
            }
        }
    })

    grunt.registerTask('default', ['sass', 'postcss', 'csso', 'watch', 'browserSync', 'uglify']);
}
