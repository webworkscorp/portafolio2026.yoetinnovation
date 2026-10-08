import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { brands } from './generate-logos.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
const host = '0.0.0.0';

const logoById = new Map(brands.map(brand => [brand.id, brand.svg]));

// Serve generated logos directly with caching
app.get('/assets/logos/:id.svg', (req, res, next) => {
  const svg = logoById.get(req.params.id);
  if (svg) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    return res.type('image/svg+xml').send(svg);
  }
  next();
});

// Serve all static assets locally from dist
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
  }
}));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
