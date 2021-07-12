module.exports = (config) => {
  config.addPassthroughCopy({ 'public': './' })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    // Tweak for Turbolinks & Browserstack Compatibility
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        }
      }
    }
  })

  config.setDataDeepMerge(true)

  /*
  config.addCollection('locations', collection => {
    return collection.getFilteredByGlob('public/locations/*.md').sort((a, b) => {
      if (a.data.order < b.data.order) return -1;
      else if (a.data.order > b.data.order) return 1;
      else return 0;
    })
  });
  */

  // limit filter
  // use like: {% set postslist = collections.blog | limit(3) %}
  config.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  config.addFilter('markdown', function(value) {
    let markdown = require('markdown-it')({
        html: true
    });
    return markdown.render(value);
  });

  // add nunjucks date filter for sitemap
  var dateFilter = require('nunjucks-date');
  dateFilter.setDefaultFormat('YYYY-MM-DD');
  config.addFilter('date', dateFilter);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
