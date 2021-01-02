module.exports = () => {
  return {
 name: 'Centipeed',
    files: [
      
      {
        pattern: 'p5.min.js',
        instrument: false,
        
      },
      {
        pattern: 'p5.dom.min.js',
        instrument: false,
      
      },
      {
        pattern: 'p5.sound.min.js',
        instrument: false,
      
      },
{
        pattern: 'ball.js',
        instrument: false,
       
      },
                
    {
        pattern: 'blocks.js',
       
      },
      {
        pattern: 'player.js',
        instrument: false,
       
      },
       {
        pattern: 'sketch.js',
        instrument: false,
        
      },
     
      
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
  };
}