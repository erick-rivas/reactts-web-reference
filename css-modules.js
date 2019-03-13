var fs = require('fs');
let dir = './src/ui/styles/css';
let files = fs.readdirSync(dir);

for (let file of files) {
  let content = fs.readFileSync(`${dir}/${file}`, "utf8");
  let moduleName = file.split('.').slice(0, -1).join('.');
  if (!moduleName.endsWith('.m')) continue;
  let moduleId = genId();
  let reg = /\.[a-z][a-z0-9]+/gi;
  var classes = content.match(reg);
  if (classes == null) continue;

  let classNs = [];
  let tempNs = [];
  for (let c of classes) {
    let classN = `.${moduleId}__${c.substr(1)}`;
    let item = {
      last: c,
      class: classN
    };

    content = content.replace(c, classN);
    if (tempNs.indexOf(classN) == -1) {
      classNs.push(item);
      tempNs.push(classN);
    }
  }

  content = content.replace(new RegExp(";", 'g'), " !important;");

  let res = `import "ui/styles/css/${file}"\n`;
  for (let cn of classNs)
    res += `export const ${cn.last.substr(1)} = "${cn.class.substr(1)}";\n`;

  fs.writeFileSync(`${dir}/${file}`, content);
  fs.writeFileSync(`${dir}/${moduleName.slice(0, -2)}.ts`, res);
}

function genId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}