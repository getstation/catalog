const testFolder = './icons/';
const fs = require('fs');
const modules = [];
let moduleName;
const dashToCamelCase = string => string.replace(/-([a-z])/g,  (g) => g[1].toUpperCase());

fs.writeFileSync('index.ts', '// generated file, do not modify its content\n');
fs.readdirSync(testFolder).forEach(file => {
	moduleName = dashToCamelCase(file.split('.')[0]);
	fs.appendFileSync('index.ts', `import ${moduleName} from '${testFolder + file}';\n`);
	modules.push(moduleName);
});

const object = JSON.stringify(modules).replace(/\"/g,'').replace('[', '{').replace(']', '}');
fs.appendFileSync('index.ts', `const icons = ${object};\nexport default icons;\n`);

