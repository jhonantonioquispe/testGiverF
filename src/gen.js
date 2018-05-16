const webfontsGenerator = require('webfonts-generator');
webfontsGenerator({
    files: [
         'src/icon/search.svg',
         'src/icon/error.svg',
         'src/icon/warning.svg'
      ],
    dest: 'custom-fonts/',
    fontName: 'custom-icons',
    html: true,
    templateOptions: {
      baseClass: 'custom',
      classPrefix: 'custom-'
    }
}, function(error) {
    if (error) {
      console.log('Fail!', error);
    } else {
      console.log('Done!');
  }
});  

module.exports = {
loaders: [
  {
   test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
   loader : 'file-loader'
  }
]
}