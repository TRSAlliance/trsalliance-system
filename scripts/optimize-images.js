const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  await imagemin(['src/.vuepress/public/**/*.{jpg,png}'], {
    destination: 'out/images',
    plugins: [imageminWebp({ quality: 75 })]
  });
  console.log('Images optimized to WebP');
})();