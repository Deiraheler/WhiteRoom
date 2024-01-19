const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [])
    .setPublicPath("public")
    .options({
        hmrOptions: {
            host: 'localhost',
            port: 8080
        }});

mix.options({
    hmrOptions: {
        host: '0.0.0.0',
        port: 8080
    }
})
