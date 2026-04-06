const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');

if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true });
}
fs.mkdirSync(dist, { recursive: true });

const files = [
  'index.html',
  'style.css',
  'script.js',
  '404.html',
  '.htaccess'
];

for (const file of files) {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(dist, file));
  }
}

console.log('Build complete — files copied to dist/');
