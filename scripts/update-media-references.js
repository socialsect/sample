import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const ARTICLES_DIR = path.join(__dirname, '../public/articles');
const WP_MEDIA_DIR = path.join(__dirname, '../public/wp-media');

// Function to update media references in article content
function updateMediaReferences(content) {
  let updatedContent = content;
  
  // Update WordPress upload URLs to local wp-media references
  updatedContent = updatedContent.replace(
    /https:\/\/ferzconsulting\.com\/wp-content\/uploads\/[^/]+\/([^"'\s)]+)/g,
    (match, filename) => {
      // Check if the file exists in wp-media directory
      const localPath = path.join(WP_MEDIA_DIR, filename);
      if (fs.existsSync(localPath)) {
        return `/wp-media/${filename}`;
      }
      return match; // Keep original if file doesn't exist locally
    }
  );
  
  // Update other common WordPress media patterns
  updatedContent = updatedContent.replace(
    /https:\/\/ferzconsulting\.com\/wp-content\/uploads\/([^"'\s)]+)/g,
    (match, filepath) => {
      const filename = path.basename(filepath);
      const localPath = path.join(WP_MEDIA_DIR, filename);
      if (fs.existsSync(localPath)) {
        return `/wp-media/${filename}`;
      }
      return match;
    }
  );
  
  // Update data:image/svg+xml references to use local files if available
  updatedContent = updatedContent.replace(
    /data:image\/svg\+xml,[^"'\s)]+/g,
    (match) => {
      // For now, keep data URLs as they are
      // You could implement SVG file extraction if needed
      return match;
    }
  );
  
  return updatedContent;
}

// Function to update article files
function updateArticleMediaReferences(articleDir) {
  const articleDataPath = path.join(articleDir, 'article-data.md');
  const metadataPath = path.join(articleDir, 'metadata.json');
  
  if (fs.existsSync(articleDataPath)) {
    // Update article content
    const content = fs.readFileSync(articleDataPath, 'utf8');
    const updatedContent = updateMediaReferences(content);
    
    if (content !== updatedContent) {
      fs.writeFileSync(articleDataPath, updatedContent);
      console.log(`Updated media references in: ${path.basename(articleDir)}`);
    }
  }
  
  if (fs.existsSync(metadataPath)) {
    // Update metadata description
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    if (metadata.description) {
      const updatedDescription = updateMediaReferences(metadata.description);
      if (metadata.description !== updatedDescription) {
        metadata.description = updatedDescription;
        fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
        console.log(`Updated metadata in: ${path.basename(articleDir)}`);
      }
    }
  }
}

// Main function to update all articles
function updateAllArticles() {
  console.log('Starting media reference updates...');
  
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error('Articles directory not found:', ARTICLES_DIR);
    return;
  }
  
  if (!fs.existsSync(WP_MEDIA_DIR)) {
    console.error('WP Media directory not found:', WP_MEDIA_DIR);
    return;
  }
  
  const articleDirs = fs.readdirSync(ARTICLES_DIR)
    .filter(item => {
      const itemPath = path.join(ARTICLES_DIR, item);
      return fs.statSync(itemPath).isDirectory();
    });
  
  console.log(`Found ${articleDirs.length} articles to update`);
  
  let updatedCount = 0;
  
  articleDirs.forEach((articleDir, index) => {
    try {
      console.log(`\nProcessing ${index + 1}/${articleDirs.length}: ${articleDir}`);
      updateArticleMediaReferences(path.join(ARTICLES_DIR, articleDir));
      updatedCount++;
    } catch (error) {
      console.error(`Error updating ${articleDir}:`, error.message);
    }
  });
  
  console.log(`\nMedia reference update complete!`);
  console.log(`Processed: ${updatedCount} articles`);
  console.log(`\nMedia files available in: ${WP_MEDIA_DIR}`);
}

// Run the update
updateAllArticles();

