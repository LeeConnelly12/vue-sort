import { defineConfig } from 'turbowatch';

export default defineConfig({
  debounce: {
    wait: 0,
  },
  project: __dirname,
  triggers: [
    {
	  expression: [
		  'anyof',
		  [
			'allof',
		  	['dirname', 'src'],
		  	['match', '*', 'basename'],
		  ],
		  ['match', 'vite.config.ts', 'basename'],
		  ['dirname', 'public'],
	  ],
      name: 'build',
	  throttleOutput: { delay: 0 },
      onChange: async ({ spawn }) => {
        await spawn`npm run build`;
      },
    },
  ],
});
