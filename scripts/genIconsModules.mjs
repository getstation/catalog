import { writeFileSync, readdirSync, appendFileSync } from 'fs';
const fileName = 'index.ts';
const assetsPath = './src/assets/images/';
let modules = [];
let enums = [];
let moduleName;
let enumName;
const dashToCamelCase = string => string.replace(/-([a-z])/g,  (g) => g[1].toUpperCase());

writeFileSync(assetsPath + fileName, '// generated file, do not modify its content\n');
readdirSync(assetsPath).forEach(file => {
	if (file === 'index.ts') return;
	moduleName = dashToCamelCase(file.split('.')[0]);
	enumName = file.split('.')[0].toUpperCase().replace(/-/g, '_');
	appendFileSync(assetsPath + fileName, `import ${moduleName} from './${file}';\n`);
	modules.push(moduleName);
	enums.push([enumName, moduleName]);
});
const len = modules.length;
modules = JSON.stringify(modules.map((x, i) => `[Images.${enums[i][0]}]: ${x},`)).replace(/\",\"/g, '\n');
enums = JSON.stringify(enums.map(x => `${x[0]} = '${x[1]}',`)).replace(/\",\"/g, '\n');
appendFileSync(assetsPath + fileName, `\nexport enum Images {\n${enums.slice(2, enums.length - 2)}\n};\n`);
appendFileSync(assetsPath + fileName, `\nconst Image = {\n${modules.slice(2, modules.length - 2)}\n};\n`);
appendFileSync(assetsPath + fileName, `\nexport default Image;\n`);
console.log(`${len} images loaded.`);
