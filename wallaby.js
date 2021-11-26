module.exports = () => ({
  autoDetect: true,

  name: 'Breakout',
  files: [
    "index.html",
    "/js/*.js",
    "/css/*.css",
    {
      pattern: ['p5.min.js', 'p5.dom.min.js', 'p5.sound.min.js',
        {
          instrument: false,
        }
      ],

    },
    // {
    //         pattern: 'ball.js',
    //         instrument: true,

    //       },

    //     {
    //         pattern: 'blocks.js',

    //       },
    //       {
    //         pattern: 'player.js',
    //         instrument: true,

    //       },
    //        {
    //         pattern: 'sketch.js',
    //         instrument: true,

    //       },


  ],
  tests: [
    'js/test/*test.js',

  ],

  env: {

    kind: 'chrome'
  },
  workers: {
    restart: true
  },
  debug: true

});