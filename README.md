# testTask

A production-ready HTML, CSS, and JavaScript project with modern tooling and best practices.

## Features

- Clean, semantic HTML5 structure
- Modern CSS with CSS custom properties (variables)
- Modular JavaScript with ES6+ features
- ESLint for JavaScript linting
- Stylelint for CSS linting
- Prettier for code formatting
- Build scripts for production optimization
- Live development server

## Project Structure

```
testTask/
├── src/
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   ├── styles.css      # Main stylesheet
│   │   ├── variables.css   # CSS custom properties
│   │   └── reset.css       # CSS reset
│   ├── js/
│   │   ├── main.js         # Main JavaScript file
│   │   └── utils.js        # Utility functions
│   └── assets/
│       └── images/         # Image assets
├── dist/                   # Production build (generated)
├── package.json
├── .eslintrc.json
├── .stylelintrc.json
├── .prettierrc
└── README.md
```

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```
   Optimized files will be generated in the `dist/` directory

## Available Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build optimized production files
- `npm run lint` - Run ESLint and Stylelint
- `npm run lint:js` - Lint JavaScript files
- `npm run lint:css` - Lint CSS files
- `npm run format` - Format code with Prettier

## Development

### Code Style

This project uses ESLint and Prettier to maintain consistent code style. Run `npm run format` before committing changes.

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features

## License

ISC
