import fs from 'node:fs';
import assert from 'node:assert/strict';

const root = new URL('../', import.meta.url);
const read = (p) => fs.readFileSync(new URL(p, root), 'utf8');

export function buildSingleFileHtml() {
  const indexHtml = read('index.html');
  const css = read('styles.css');
  const dataJs = read('data.js');
  const appJs = read('app.js');

  assert.ok(
    indexHtml.includes('<link rel="stylesheet" href="styles.css">'),
    'index.html deve referenciar styles.css'
  );
  assert.ok(
    indexHtml.includes('<script src="data.js"></script>\n  <script src="app.js"></script>'),
    'index.html deve referenciar data.js e app.js'
  );

  return indexHtml
    .replace(
      '  <link rel="stylesheet" href="styles.css">',
      `  <style>\n${css}\n</style>`
    )
    .replace(
      '  <script src="data.js"></script>\n  <script src="app.js"></script>',
      `  <script>\n${dataJs}\n  </script>\n  <script>\n${appJs}\n  </script>`
    );
}

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  const checkOnly = process.argv.includes('--check');
  const built = buildSingleFileHtml();
  const targetUrl = new URL('Por-Dentro-do-Computador.html', root);

  if (checkOnly) {
    const current = fs.readFileSync(targetUrl, 'utf8');
    assert.equal(
      current,
      built,
      'Por-Dentro-do-Computador.html está desatualizado em relação a index.html/styles.css/data.js/app.js. Rode `npm run build`.'
    );
    console.log('OK: Por-Dentro-do-Computador.html está sincronizado com os arquivos-fonte.');
  } else {
    fs.writeFileSync(targetUrl, built, 'utf8');
    console.log(`OK: Por-Dentro-do-Computador.html gerado (${Buffer.byteLength(built, 'utf8')} bytes).`);
  }
}
