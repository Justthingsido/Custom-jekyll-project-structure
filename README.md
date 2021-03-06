## Custom-jekyll-project-structure
Jekyll Project Strucutre with Gulp, Sass, Jade, gallery generator, + More

### Project Structure

    .
    ├── _data
    ├── _includes
    |  ├── jade
    |  ├── head.jade
    |  ├── header.jade
    |  ├── footer.jade
    |  ├── landing_page.jade
    |  └── share.jade // addToAny share buttons
    ├── _layouts
    |  ├── default.html
    |  ├── gallery_index.html
    |  ├── gallery-pages.html
    |  └── posts.html
    ├── _posts
    ├── _site
    ├── assets
    |  ├── _img
    |  ├── _js
    |  |  └── functions.js
    |  ├── _sass
    |  |  ├── 1-tools
    |  |  |  ├── bourbon
    |  |  |  ├── _fonts.scss
    |  |  |  ├── _normalize.scss
    |  |  |  ├── vars.sass
    |  |  |  ├── animation.sass
    |  |  |  └── swiper.sass (Swiper 3.2.7)
    |  |  ├── 2-basics
    |  |  |  └── ...
    |  |  ├── 3-modules
    |  |  |  └── ...
    |  |  ├── 4-gallery
    |  |  |  ├── gallery-index.sass
    |  |  |  └── gallery-page.sass
    |  |  └── 5-jekyll-defaults
    |  |    ├── _base.scss
    |  |    ├── _layout.scss
    |  |    └── _syntax-heighlight.scss  
    |  |  
    |  ├── *Compiled CSS, img, js*
    |  ├── css
    |  |   ├── main.css
    |  |   └── main.sass // will not get compiled into _site folder(_config.yml exclude)
    |  ├── img
    |  └── js
    ├── gallery // directory where to place imgs for gallery creation
    ├── gulpfile.js
    ├── index.html
    └── package.json_

\\
This Project is structures so that it is easier for me (and almost anyone) to be able to create a new jekyll project with lots of different tools and addons that can be included into it.

## Usage

In order to use this project, download it and change the name `custom-jekyll-project-structure` to your new project `name`.

Download all dependencies bu opening cmd/ terminal and running the following command.


'npm install --save-dev'
