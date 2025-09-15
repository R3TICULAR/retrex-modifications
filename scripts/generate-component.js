#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert component name to different formats
function formatComponentName(name) {
  // Convert to kebab-case (my-component)
  const kebabCase = name.toLowerCase().replace(/\s+/g, '-');
  
  // Convert to PascalCase (MyComponent)
  const pascalCase = name
    .split(/[\s-_]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  
  return { kebabCase, pascalCase };
}

// JavaScript template
function createJSTemplate(componentName) {
  const { kebabCase, pascalCase } = formatComponentName(componentName);
  
  return `import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './${kebabCase}.scss';

class ${pascalCase} extends LitElement {
  static styles = css\`\${unsafeCSS(styles)}\`;

  render() {
    return html\`
      <div class="${kebabCase}">
        <slot>Default content</slot>
      </div>
    \`;
  }
}

customElements.define('${kebabCase}', ${pascalCase});
`;
}

// SCSS template
function createSCSSTemplate(componentName) {
  const { kebabCase } = formatComponentName(componentName);
  
  return `:host {
  display: block;
}

.${kebabCase} {
  // Mobile-first base styles
  padding: 1rem;
  font-family: var(--font-family-base);
  
  // Medium breakpoint (768px+)
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  
  // Large breakpoint (1024px+)
  @media (min-width: 1024px) {
    padding: 2rem;
  }
  
  // XL breakpoint (1440px+)
  @media (min-width: 1440px) {
    padding: 2.5rem;
  }
}
`;
}

// Main function
function generateComponent() {
  rl.question('Enter component name: ', (componentName) => {
    if (!componentName.trim()) {
      console.log('❌ Component name is required!');
      rl.close();
      return;
    }

    const { kebabCase, pascalCase } = formatComponentName(componentName.trim());
    const componentDir = path.join(__dirname, '..', 'components', kebabCase);
    
    try {
      // Create component directory
      if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
        console.log(`📁 Created directory: components/${kebabCase}/`);
      } else {
        console.log(`⚠️  Directory already exists: components/${kebabCase}/`);
      }
      
      // Create JS file
      const jsFile = path.join(componentDir, `${kebabCase}.js`);
      fs.writeFileSync(jsFile, createJSTemplate(componentName));
      console.log(`📄 Created: ${kebabCase}.js`);
      
      // Create SCSS file
      const scssFile = path.join(componentDir, `${kebabCase}.scss`);
      fs.writeFileSync(scssFile, createSCSSTemplate(componentName));
      console.log(`🎨 Created: ${kebabCase}.scss`);
      
      console.log(`✅ Component '${pascalCase}' generated successfully!`);
      console.log(`📝 Don't forget to import it in your index.js:`);
      console.log(`   import '../components/${kebabCase}/${kebabCase}.js';`);
      
    } catch (error) {
      console.error('❌ Error generating component:', error.message);
    }
    
    rl.close();
  });
}

// Run the generator
generateComponent();