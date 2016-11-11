# Build instructions

<a href="http://gruntjs.com/" title="Built with Grunt"><img src="https://cdn.gruntjs.com/builtwith.png" alt="Built with Grunt" align="right"></a>

Development and technology notes.

## Command line

```bash
# First:
$ cd repo/source/

# Next, install:
$ npm install
# ... or update Grunt dependencies:
$ npm update

# Update Bower packages:
$ grunt plugins
# ... or:
$ npm run plugins

# Watch:
$ grunt watch
# ... or:
$ npm run watch

# Development build:
$ grunt
# ... or:
$ grunt dev
# ... or:
$ npm run dev

# Production build:
$ grunt prod
# ... or:
$ npm run prod
```

**Note:** If [Grunt](http://gruntjs.com/) isn’t installed globally, then roll with the `$ npm ...` commands.

## Demos

DEVELOPMENT | PRODUCTION
:-: | :-:
[![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://pages.registerguard.com/election-2014-general/dev/&chs=240x240)](http://pages.registerguard.com/election-2014-general/dev/) | [![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://pages.registerguard.com/election-2014-general/&chs=240x240)](http://pages.registerguard.com/election-2014-general/)
`$ grunt` | `$ grunt prod`

## Editing guide

Do a `grunt watch` while editing files. Then you can reload the page and see changes in near real time.

All the goods to edit are in source/files.

There are a lot of custom JS files in scripts. SASS files in styles that have to be included in the rg.scss file. And HTML files in templates that need to be `<!-- @include file/file.html -->` in index.html.

attn.html was a strip to iframe to the home page that was only used for one year. We used a static graphic (see /summary.html for that code) in a WebEmbed field the second time around.

### Moving parts

Some files are highly related (all within source/).

  * `templates/includes/ap.html` && `scripts/rg.mod.ap.js`
  * `templates/includes/jump.html` && `styles/partials/_jump.scss`
  * `templates/includes/results.html` && `styles/partials/_poll.scss` && `scripts/rg.mod.polls.js`

### Grid

Grid is created using Pure CSS. It's flexbox compatible and has a column layout. We jumped between a few different two and three-column grids for the stories/ap/twitterORendorsements and results.

### High level workflow

  * Get current set-up working on your local machine
  * `grunt dev` && `grunt watch` for development work
  * `grunt prod` to make production build
  * Make sure to keep Github updated
  * `grunt push` to send updated code to S3 bucket

  * JH updates data for results and they automatically update on the page (this could use some animation or transition next time around)
  * As stories are published, they are updated
  * As CD pushes new photos, they are updated
