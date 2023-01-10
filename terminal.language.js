/*
  Language: terminal console
  Author: Josh Bode <joshbode@gmail.com>
  See https://joshbode.github.io/remark/ansi.html#5
  And also https://github.com/theZiz/aha
*/

hljs.registerLanguage('terminal', function() {
    return {
      contains: [
        {
          className: 'string',
          begin: '^([\\w.]+)@([\\w.]+)'
        },
        {
          className: 'constant',
          begin: ' (.*) \\$ '
        },
        {
          className: 'ansi',
          begin: '<span style\\="([^"]+)">',
          end: '<\\/span>'
        }
      ]
    }
  });