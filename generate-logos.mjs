import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'dist', 'assets', 'logos');
fs.mkdirSync(outDir, { recursive: true });

// Neutral business sectors, not company or brand identities.
const brands = [
  { id: 'nexus', name: 'CONSULTORÍA', icon: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M10.9 6.8 6.1 17M13.1 6.8 17.9 17M7 19h10"/>' },
  { id: 'vertex', name: 'FINANZAS', icon: '<path d="M3 21h18M5 17v-5h4v5M11 17V8h4v9M17 17V4h4v13"/>' },
  { id: 'aura', name: 'TECNOLOGÍA', icon: '<rect x="7" y="7" width="10" height="10" rx="1"/><path d="M10 3v4m4-4v4M10 17v4m4-4v4M3 10h4m-4 4h4m10-4h4m-4 4h4"/>' },
  { id: 'kroma', name: 'SALUD', icon: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>' },
  { id: 'stratum', name: 'INMOBILIARIA', icon: '<path d="M3 21h18M5 21V8l6-4 6 4v13M17 11h3v10M8 10h2m3 0h2M8 14h2m3 0h2M10 21v-4h3v4"/>' },
  { id: 'aegis', name: 'SEGURIDAD', icon: '<path d="M12 2 21 6v6c0 5-3.5 8.5-9 10-5.5-1.5-9-5-9-10V6zM8 12l3 3 5-5"/>' },
  { id: 'novus', name: 'INDUSTRIA', icon: '<path d="M3 21V10l6 4v-4l6 4V7h6v14zM17 7V3h3v4M6 18h2m3 0h2m3 0h2"/>' },
  { id: 'synapse', name: 'LOGÍSTICA', icon: '<rect x="3" y="8" width="12" height="10" rx="1"/><path d="M15 11h4l3 3v4h-7M6 18a2 2 0 1 0 4 0m7 0a2 2 0 1 0 4 0M5 5h12"/>' },
  { id: 'lumina', name: 'EDUCACIÓN', icon: '<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1zM12 6v14"/>' },
  { id: 'altus', name: 'SERVICIOS', icon: '<circle cx="12" cy="12" r="9"/><path d="M7 12h10M12 7v10M5.5 5.5l13 13"/>' },
  { id: 'solas', name: 'ENERGÍA', icon: '<path d="M14 2 5 13h6l-1 9 9-12h-6z"/>' },
  { id: 'civic', name: 'COMERCIO', icon: '<path d="M4 9h16l-1 12H5zM3 9l2-6h14l2 6M9 21v-7h6v7M3 9c0 2 3 3 5 1 2 2 6 2 8 0 2 2 5 1 5-1"/>' }
];

for (const brand of brands) {
  brand.svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 30" role="img" aria-label="' + brand.name + '">' +
    '<g transform="translate(2 3)" fill="none" stroke="#dce4ee" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + brand.icon + '</g>' +
    '<text x="36" y="18.5" fill="#edf2f7" font-family="Arial,Helvetica,sans-serif" font-size="11" font-weight="700" letter-spacing=".35">' + brand.name + '</text></svg>';
  fs.writeFileSync(path.join(outDir, brand.id + '.svg'), brand.svg, 'utf8');
}
console.log('Generated ' + brands.length + ' neutral business sector symbols.');
export { brands };
