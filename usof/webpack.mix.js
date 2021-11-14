const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').react();

mix.js('resources/js/App/welcome-page.js', 'public/js/pages/welcome.js').react();
mix.js('resources/js/App/login-page.js', 'public/js/pages/login.js').react();
mix.js('resources/js/App/registration-page.js', 'public/js/pages/registration.js').react();

mix.sass('resources/sass/app.scss', 'public/css')
mix.sass('resources/sass/loginPage.scss', 'public/css');
mix.sass('resources/sass/main.scss', 'public/css');