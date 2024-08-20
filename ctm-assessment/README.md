# CTM Tech Test

## Overview/Task

1. Consume the JSON file provided at `api.json` and generate a question list UI from the data it describes.

2. Generate a UI similar to the provided image using any technology you prefer. Additional styling is encouraged but not strictly necessary.

3. Use a local web server to serve the files in `/src/`.

4. Run the project with `npm install && npm start` if you have Node.js installed. This will use the `http-server` module to start a local server.

5. **UI Design Reference**

   ![](../../assets/ui.png)

## Setup

### Build and Development

1. **Install Development Dependencies**

   ```
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest jest-environment-jsdom
   
   npm install --save-dev @babel/preset-env @babel/preset-react identity-obj-proxy
   ```

2. **Add Scripts to `package.json`**

   ```json
   "scripts": {
     "dev": "vite",
     "start": "http-server -c-1 dist/",
     "test": "jest"
   }
   ```

3. **Babel Configuration**

   Create a `.babel.config.json` file:

   ```json
   {
     "presets": ["@babel/preset-env", "@babel/preset-react"]
   }
   ```

4. **Jest Configuration**

   Create a `jest.config.js` file:

   ```js
   export default {
     testEnvironment: 'jest-environment-jsdom',
     transform: {
       '^.+\\.jsx?$': 'babel-jest',
     },
     moduleFileExtensions: ['js', 'jsx'],
     setupFilesAfterEnv: ['@testing-library/jest-dom'],
     moduleNameMapper: {
       '\\.css$': 'identity-obj-proxy',
       '\\.svg$': '<rootDir>/__mocks__/fileMock.js',
       '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
     },
   };
   ```

5. **Mock SVG Imports for Jest**

   Create a mock file: `__mocks__/fileMock.js`

   ```js
   module.exports = 'test-file-stub';
   ```

### Development Environment

1. **Install Project Dependencies**

   ```
   cd ctm-assessment
   npm install
   ```

2. **Start Vite Development Server**

   ```
   npm run dev
   ```

3. **Serve Files with HTTP-Server**

   ```
   npm run build
   npm start
   ```

## Design & Testing

### Design

**Inspiration:**

The visual design was inspired by CTM's existing web page and recreated.

![](../../assets/Design-1.png)
![](../../assets/Design-2.png)

### Components

- **Header:** The top section of the page.
- **Form:** The parent component housing the form and related child components.
- **Footer:** The bottom section of the page.

### Testing

1. **Run Jest Tests**

   ```
   npm test
   ```

   To run tests for a specific file:

   ```
   npm test -- --testPathPattern=<component>.test.jsx
   ```

2. **Lighthouse Improvements**

   Utilised Lighthouse reports to enhance performance, accessibility, best practices, and SEO.

   ![](../../assets/Lighthouse.png)

3. **Future Developments/Considerations**

   - Functionality of buttons "Back" and "Save Car"
   - Optimising for SEO to improve Lighthouse reports
   - Optimised for better Accessibility


## License

This project is licensed under the [MIT License](LICENSE).
