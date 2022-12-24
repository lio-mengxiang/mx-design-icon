module.exports = (plop) => {
  plop.setGenerator('new-icon', {
    description: 'Create a new icon',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Icon name(e.g. LeftArrow):',
        validate: (name) => {
          if (name === '') {
            return 'Please input icon name or press `ctrl-c` to quit';
          }

          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/react-icon/Icon{{name}}.tsx',
        templateFile: './plop-templates/icon.hbs',
      },
      {
        type: 'append',
        path: 'src/react-icon/index.tsx',
        template: 'export { default as Icon{{name}} } from "./{{name}}Icon";',
      },
    ],
  });
};
