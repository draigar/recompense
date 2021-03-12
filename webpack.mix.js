const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

Mix.listen("configReady", (webpackConfig) => {
    const rules = webpackConfig.module.rules;
    const targetSVG = /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/;
    const targetFont = /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/;
    const targetCSS = /\.css$/;
});

mix.js("src/app.js", "dist/js")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")],
    })
    .autoload({
        "cash-dom": ["$"],
    })
    .copyDirectory("src/fonts", "dist/fonts")
    .copyDirectory("src/css", "dist/css")
    .copyDirectory("src/images", "dist/images")
    .copyDirectory("src/js", "dist/js")
    .copyDirectory("src/assets", "dist/assets")
    .copyDirectory("src/assets", "dist/assets")
    .browserSync({
        proxy: "recompense.test",
        files: ["src/**/*.*"],
    });
