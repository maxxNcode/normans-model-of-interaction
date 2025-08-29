# Norman Model Interaction Visualizer

A interactive visualization tool for Norman's Model of Interaction, demonstrating the execution-evaluation cycle in human-computer interaction.

## What is Norman's Model?

Norman's Model of Interaction describes the process users go through when interacting with a system. It consists of seven stages:

1. **Establish the Goal** - The user decides what they want to achieve
2. **Formulate Intention** - The user decides on the plan of action to reach the goal
3. **Specify Action Sequence** - The user translates their intention into a specific sequence of actions
4. **Execute Action** - The user performs the actions on the system interface
5. **Perceive System State** - The user observes the system to see what has happened
6. **Interpret System State** - The user makes sense of the system's response
7. **Evaluate System State** - The user compares the perceived state to their original goal

## Features

- Interactive visualization of the 7 stages of Norman's Model
- Draggable nodes that can be repositioned
- Customizable node content (edit titles and descriptions)
- User-created connections between nodes
- Color-coded stages (Execution vs Evaluation)
- Responsive design that works on different screen sizes

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nmi-maker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd nmi-maker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

3. Interact with the visualization:
   - Drag nodes to reposition them
   - Hover over nodes and click "Edit" to modify content
   - Click and drag from node handles to create connections
   - Use the controls to zoom and pan

## Deployment

### GitHub Pages

1. Install the GitHub Pages deploy plugin:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deployment scripts to `package.json`:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "tsc -b && vite build",
       "lint": "eslint .",
       "preview": "vite preview",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Set the base path in `vite.config.ts`:
   ```ts
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     base: '/nmi-maker/' // Add this line (use your repo name)
   })
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### Vercel

1. Sign up for a Vercel account at [vercel.com](https://vercel.com)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy your project:
   ```bash
   vercel
   ```

### Netlify

1. Sign up for a Netlify account at [netlify.com](https://netlify.com)
2. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Deploy your project:
   ```bash
   netlify deploy
   ```

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Flow](https://reactflow.dev/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.