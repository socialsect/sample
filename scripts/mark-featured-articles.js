import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const ARTICLES_DIR = path.join(__dirname, '../public/articles');

// Articles to mark as featured (based on their titles and content)
const featuredArticleSlugs = [
  'ai-as-intellectual-force-multiplier-an-ontological-rebellion',
  'ai-at-a-crossroads-apples-findings-and-the-case-for-deterministic-reasoning-systems',
  'the-darwin-godel-machine-critique-a-critical-analysis-of-self-improving-ai-safety-standards',
  'runtime-enforcement-vs-governance-theater',
  'the-architect-and-the-fire-on-the-nature-of-ai-control-and-emergent-autonomy',
  'the-runtime-revolution-why-static-ai-governance-is-already-obsolete',
  'sovereignty-or-subjugation-the-constitutional-imperative-of-democratic-ai-leadership'
];

// Function to update article metadata
function updateArticleMetadata(articleDir) {
  const metadataPath = path.join(articleDir, 'metadata.json');
  
  if (fs.existsSync(metadataPath)) {
    try {
      const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      
      // Check if this article should be featured
      const shouldBeFeatured = featuredArticleSlugs.includes(metadata.slug);
      
      if (shouldBeFeatured && !metadata.featured) {
        metadata.featured = true;
        fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
        console.log(`Marked as featured: ${metadata.title}`);
        return true;
      } else if (!shouldBeFeatured && metadata.featured) {
        metadata.featured = false;
        fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
        console.log(`Unmarked as featured: ${metadata.title}`);
        return true;
      }
    } catch (error) {
      console.error(`Error updating ${articleDir}:`, error.message);
    }
  }
  
  return false;
}

// Main function to update all articles
function updateFeaturedArticles() {
  console.log('Updating featured article status...');
  
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error('Articles directory not found:', ARTICLES_DIR);
    return;
  }
  
  const articleDirs = fs.readdirSync(ARTICLES_DIR)
    .filter(item => {
      const itemPath = path.join(ARTICLES_DIR, item);
      return fs.statSync(itemPath).isDirectory();
    });
  
  console.log(`Found ${articleDirs.length} articles to check`);
  
  let updatedCount = 0;
  
  articleDirs.forEach((articleDir, index) => {
    try {
      console.log(`\nProcessing ${index + 1}/${articleDirs.length}: ${articleDir}`);
      const wasUpdated = updateArticleMetadata(path.join(ARTICLES_DIR, articleDir));
      if (wasUpdated) {
        updatedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${articleDir}:`, error.message);
    }
  });
  
  console.log(`\nFeatured article update complete!`);
  console.log(`Updated: ${updatedCount} articles`);
}

// Run the update
updateFeaturedArticles();

