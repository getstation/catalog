// @ts-nocheck
import { readFileSync, writeFileSync } from 'fs';
import glob from 'glob';
import { join, basename } from 'path';
import svgr from '@svgr/core';
import { pascalCase, constantCase } from 'change-case';

const iconsSvgDir = join(__dirname, '../src/assets/icons/');
const iconsComponentDir = join(__dirname, '../src/components/Icon/svg/');

// typescript template for svgr
function template({ template }, _, { componentName, jsx }) {
	const typeScriptTpl = template.smart({ plugins: ['typescript'] });
	return typeScriptTpl.ast`
    ${'/* tslint:disable:max-line-length */\n'}
    import * as React from 'react';
    const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    export default ${componentName};
  `;
}

// will take every `.svg` in `resources/icons`
// generate a SVG component (via svgr) for each one in `src/components/Icon/svg/`
// generate `src/components/Icon/svg/index.ts` with necessary import/export and enum
glob(iconsSvgDir + '*.svg', (_, files) => {
	const svgs = files.map((file) => basename(file, '.svg'));

	svgs.forEach((svg) => {
		const componentName = `${pascalCase(svg)}Svg`;

		const svgCode = readFileSync(join(iconsSvgDir, svg + '.svg'), 'utf8');

		const jsCode: string = svgr.sync(
			svgCode,
			{
				plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
				template
			},
			{
				componentName
			}
		);

		writeFileSync(join(iconsComponentDir, `${componentName}.tsx`), jsCode);
	});

	const indexContent = `import React from 'react';\n${svgs
		.map((svg) => `import ${pascalCase(svg)}Svg from './${pascalCase(svg)}Svg';`)
		.join('\n')}

export enum Icons {
${svgs.map((svg) => `  ${constantCase(svg)} = '${svg}',`).join('\n')}
}

type SvgComponents = {
  [key in Icons]: React.SFC<React.SVGProps<SVGSVGElement>>;
};

const SvgIcon: SvgComponents = {
${svgs.map((svg) => `  [Icons.${constantCase(svg)}]: ${pascalCase(svg)}Svg,`).join('\n')}
};

export default SvgIcon;
`;

	writeFileSync(join(iconsComponentDir, 'index.ts'), indexContent);

	console.log(`Generated ${svgs.length} svg components.`);
});
