# Require any additional compass plugins here.

require "bourbon";
require 'modular-scale';

# Point to additional assets here.

add_import_path "/Library/Ruby/Gems/1.8/gems/bourbon-2.1.1/app/assets/stylesheets";
add_import_path "/Users/gesquinca/Development/GitHub/Breakpoint/elements/sass";

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "css/sass"
images_dir = "img"
javascripts_dir = "js"

output_style = :nested
environment = :development


# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
color_output = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass css/sass scss && rm -rf sass && mv scss sass
