import { readdirSync } from 'fs'
import { join } from 'path'

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

function getSidebarItems(directory) {
  const path = join(process.cwd(), 'timefit-docs', directory)
  try {
    const files = readdirSync(path)
    return files
      .filter(file => file.endsWith('.md') && file !== 'index.md')
      .map(file => {
        const fileNameWithoutExt = file.slice(0, -3);
        return {
          text: toTitleCase(fileNameWithoutExt.replace(/-/g, ' ')),
          link: `/${directory}/${fileNameWithoutExt}`
        }
      });
  } catch (e) {
    return []
  }
}

export function getSidebar() {
  return {
    '/docs/': [
      {
        text: 'Docs',
        items: getSidebarItems('docs')
      }
    ],
    '/api/': [
      {
        text: 'API Reference',
        items: getSidebarItems('api')
      }
    ]
  }
} 