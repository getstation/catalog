module.exports = function (plop) {
	// create your generators here
	plop.setGenerator('component', {
		description: 'generate a stateless component',
		prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name'
      }
    ],
		actions: [
      {
        type: 'add',
        path: 'src/components/{{ pascalCase name }}/{{ pascalCase name }}.tsx',
        templateFile: 'plop-templates/component/Component.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{ pascalCase name }}/index.ts',
        templateFile: 'plop-templates/component/index.hbs'
      },
      {
        type: 'add',
        path: 'src/stories/{{ pascalCase name }}.story.tsx',
        templateFile: 'plop-templates/component/story.hbs'
      }
    ]
	});
};
