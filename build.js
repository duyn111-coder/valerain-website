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

const dirs = ['videos'];
for (const dir of dirs) {
  const srcDir = path.join(__dirname, dir);
  if (fs.existsSync(srcDir)) {
    const destDir = path.join(dist, dir);
    fs.mkdirSync(destDir, { recursive: true });
    for (const file of fs.readdirSync(srcDir)) {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    }
  }
}

console.log('Build complete — files copied to dist/');
