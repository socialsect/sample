import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const OLD_ARTICLES_DIR = path.join(__dirname, '../public/articles_old');
const NEW_ARTICLES_DIR = path.join(__dirname, '../public/articles');
const WP_MEDIA_DIR = path.join(__dirname, '../public/wp-media');

// Ensure new articles directory exists
if (!fs.existsSync(NEW_ARTICLES_DIR)) {
  fs.mkdirSync(NEW_ARTICLES_DIR, { recursive: true });
}

// Function to create a slug from title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

// Function to extract article data from old format
function parseOldArticle(content, filename) {
  const lines = content.split('\n');
  let url = '';
  let title = '';
  let headings = [];
  let contentStartIndex = 0;
  
  // Extract URL and title
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('URL:')) {
      url = lines[i].replace('URL:', '').trim();
    } else if (lines[i].startsWith('Title:')) {
      title = lines[i].replace('Title:', '').trim();
    } else if (lines[i].startsWith('HEADINGS:')) {
      contentStartIndex = i + 1;
      break;
    }
  }
  
  // Extract headings
  let i = contentStartIndex;
  while (i < lines.length && lines[i].startsWith(' - ')) {
    const heading = lines[i].replace(' - ', '').trim();
    if (heading) {
      headings.push(heading);
    }
    i++;
  }
  
  // Find the CONTENT section
  let contentStartLine = -1;
  for (let j = i; j < lines.length; j++) {
    if (lines[j].includes('CONTENT (paragraphs):')) {
      contentStartLine = j + 1;
      break;
    }
  }
  
  // Extract the actual article content
  let articleContent = '';
  if (contentStartLine > 0 && contentStartLine < lines.length) {
    articleContent = lines.slice(contentStartLine).join('\n').trim();
  } else {
    // Fallback: look for content after headings
    while (i < lines.length && (lines[i].trim() === '' || lines[i].startsWith(' - '))) {
      i++;
    }
    articleContent = lines.slice(i).join('\n').trim();
  }
  
  // Generate metadata
  const slug = createSlug(title);
  const id = `article-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  // Estimate read time (assuming 200 words per minute)
  const wordCount = articleContent.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));
  
  // Extract category from title or content
  let category = 'AI Governance';
  if (title.toLowerCase().includes('ai')) category = 'AI Governance';
  else if (title.toLowerCase().includes('governance')) category = 'AI Governance';
  else if (title.toLowerCase().includes('methodology')) category = 'Methodology';
  else if (title.toLowerCase().includes('analysis')) category = 'Analysis';
  
  // Extract tags
  const tags = [];
  if (title.toLowerCase().includes('ai')) tags.push('AI');
  if (title.toLowerCase().includes('governance')) tags.push('Governance');
  if (title.toLowerCase().includes('safety')) tags.push('Safety');
  if (title.toLowerCase().includes('methodology')) tags.push('Methodology');
  if (title.toLowerCase().includes('analysis')) tags.push('Analysis');
  if (title.toLowerCase().includes('constitutional')) tags.push('Constitutional');
  if (title.toLowerCase().includes('deterministic')) tags.push('Deterministic');
  
  // Add more tags based on content
  if (articleContent.toLowerCase().includes('bias')) tags.push('Bias');
  if (articleContent.toLowerCase().includes('ethics')) tags.push('Ethics');
  if (articleContent.toLowerCase().includes('compliance')) tags.push('Compliance');
  
  // Remove duplicates
  const uniqueTags = [...new Set(tags)];
  
  return {
    id,
    title,
    slug,
    url,
    headings,
    content: articleContent,
    category,
    tags: uniqueTags,
    readTime: `${readTime} min read`,
    author: 'Edward Meyman',
    date: new Date().toISOString().split('T')[0], // Current date
    featured: false,
    image: 'image.jpg' // Default image, can be updated later
  };
}

// Function to create article directory and files
function createArticleFiles(articleData) {
  const articleDir = path.join(NEW_ARTICLES_DIR, articleData.id);
  
  // Create article directory
  if (!fs.existsSync(articleDir)) {
    fs.mkdirSync(articleDir, { recursive: true });
  }
  
  // Create metadata.json
  const metadata = {
    id: articleData.id,
    title: articleData.title,
    description: articleData.content.substring(0, 200).replace(/\n/g, ' ') + '...',
    author: articleData.author,
    date: articleData.date,
    category: articleData.category,
    tags: articleData.tags,
    featured: articleData.featured,
    readTime: articleData.readTime,
    image: articleData.image,
    slug: articleData.slug,
    url: articleData.url
  };
  
  fs.writeFileSync(
    path.join(articleDir, 'metadata.json'),
    JSON.stringify(metadata, null, 2)
  );
  
  // Create article-data.md
  fs.writeFileSync(
    path.join(articleDir, 'article-data.md'),
    articleData.content
  );
  
  // Copy a default image (you can replace this with actual images later)
  const defaultImagePath = path.join(__dirname, '../public/articles/article-1/image.jpg');
  const newImagePath = path.join(articleDir, 'image.jpg');
  
  if (fs.existsSync(defaultImagePath)) {
    fs.copyFileSync(defaultImagePath, newImagePath);
  }
  
  console.log(`Created article: ${articleData.title} (${articleData.id})`);
}

// Main migration function
function migrateArticles() {
  console.log('Starting article migration...');
  
  // Get all .txt files from old articles directory
  const files = fs.readdirSync(OLD_ARTICLES_DIR)
    .filter(file => file.endsWith('.txt'))
    .filter(file => !file.includes('_1.txt')); // Skip duplicate files
  
  console.log(`Found ${files.length} articles to migrate`);
  
  let successCount = 0;
  let errorCount = 0;
  
  files.forEach((filename, index) => {
    try {
      console.log(`\nProcessing ${index + 1}/${files.length}: ${filename}`);
      
      const filePath = path.join(OLD_ARTICLES_DIR, filename);
      const content = fs.readFileSync(filePath, 'utf8');
      
      const articleData = parseOldArticle(content, filename);
      
      if (articleData.title && articleData.content) {
        createArticleFiles(articleData);
        successCount++;
      } else {
        console.log(`Skipped ${filename}: Missing title or content`);
        errorCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filename}:`, error.message);
      errorCount++;
    }
  });
  
  console.log(`\nMigration complete!`);
  console.log(`Successfully migrated: ${successCount} articles`);
  console.log(`Errors: ${errorCount} articles`);
  console.log(`\nArticles saved to: ${NEW_ARTICLES_DIR}`);
}

// Run migration
migrateArticles();
