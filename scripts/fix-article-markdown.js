import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of all article directories
const articleDirs = [
  'article-1757458029272-4fxqlysc4',
  'article-1757458029288-gwacbzql8',
  'article-1757458029302-8jrabvq19',
  'article-1757458029328-xyoz0w3li',
  'article-1757458029333-v2llhqodv',
  'article-1757458029339-fubjiz7bn',
  'article-1757458029345-t4tvdr25c',
  'article-1757458029357-7h7378m70',
  'article-1757458029371-dqkmbusol',
  'article-1757458029382-g88xlqm8p',
  'article-1757458029387-gqwr9o1wj',
  'article-1757458029404-ermy7asyj',
  'article-1757458029415-mq9458ltz',
  'article-1757458029428-e2vz2kbir',
  'article-1757458029441-udu61tt32',
  'article-1757458029447-tzdnuavd0'
];

const articlesPath = path.join(__dirname, '..', 'public', 'articles');

// Footer content to remove
const footerContent = `FERZ—Formalizing Emergent Reasoning Zones—advances the frontier of AI precision through deterministic governance. In an era defined by probabilistic systems, we deliver frameworks that enforce clarity, consistency, and control where others accept uncertainty. Our work spans linguistic formalization, AI output validation, and cross-domain compliance—empowering organizations to govern intelligent systems with the rigor high-stakes environments demand.

Headquartered in the Northern  Virginia / Washington, D.C. Metropolitan Area (Engagements available globally;  consultations by appointment)

+1 212 380 6044

contact@ferzconsulting.com

FERZ

FERZ — Formalizing Emergent Reasoning Zones © 2025 FERZ LLC`;

// Common heading patterns to detect and convert
const headingPatterns = [
  // Section headings (usually standalone lines that are not paragraphs)
  { pattern: /^The [A-Z][a-zA-Z\s]+$/, level: 2 },
  { pattern: /^[A-Z][a-zA-Z\s]+:$/, level: 3 },
  { pattern: /^[A-Z][a-zA-Z\s]+\s[A-Z][a-zA-Z\s]+$/, level: 2 },
  { pattern: /^[A-Z][a-zA-Z\s]+\s[A-Z][a-zA-Z\s]+\s[A-Z][a-zA-Z\s]+$/, level: 2 },
  // Specific known headings
  { pattern: /^The Cathedral of Credentials$/, level: 2 },
  { pattern: /^The Innovation Prison$/, level: 2 },
  { pattern: /^AI as Crystallization Engine$/, level: 2 },
  { pattern: /^The Art of Asking Questions$/, level: 2 },
  { pattern: /^Descriptive Questions$/, level: 3 },
  { pattern: /^Analytical Questions$/, level: 3 },
  { pattern: /^Strategic Questions$/, level: 3 },
  { pattern: /^Ontological Questions$/, level: 3 },
  { pattern: /^Authority Retention Protocols$/, level: 2 },
  { pattern: /^Meta-Recursive Validation$/, level: 2 },
  { pattern: /^Compounding Cognitive Enhancement$/, level: 2 },
  { pattern: /^Preserving Cognitive Scaffolding$/, level: 2 },
  { pattern: /^Practical Applications$/, level: 2 },
  { pattern: /^Conclusion$/, level: 2 },
  { pattern: /^Introduction$/, level: 2 },
  { pattern: /^Background$/, level: 2 },
  { pattern: /^Methodology$/, level: 2 },
  { pattern: /^Results$/, level: 2 },
  { pattern: /^Discussion$/, level: 2 },
  { pattern: /^Implications$/, level: 2 },
  { pattern: /^Future Work$/, level: 2 },
  { pattern: /^References$/, level: 2 }
];

function isHeading(line) {
  const trimmed = line.trim();
  
  // Skip empty lines
  if (!trimmed) return false;
  
  // Skip lines that are clearly not headings
  if (trimmed.length > 100) return false;
  if (trimmed.includes('.')) return false;
  if (trimmed.includes(',')) return false;
  if (trimmed.includes('"')) return false;
  if (trimmed.includes("'")) return false;
  if (trimmed.includes('(')) return false;
  if (trimmed.includes(')')) return false;
  if (trimmed.includes('—')) return false;
  if (trimmed.includes('–')) return false;
  if (trimmed.includes('•')) return false;
  if (trimmed.includes('-')) return false;
  if (trimmed.includes('*')) return false;
  if (trimmed.includes('[')) return false;
  if (trimmed.includes(']')) return false;
  if (trimmed.includes('{')) return false;
  if (trimmed.includes('}')) return false;
  if (trimmed.includes('$')) return false;
  if (trimmed.includes('%')) return false;
  if (trimmed.includes('&')) return false;
  if (trimmed.includes('@')) return false;
  if (trimmed.includes('#')) return false;
  if (trimmed.includes('+')) return false;
  if (trimmed.includes('=')) return false;
  if (trimmed.includes('!')) return false;
  if (trimmed.includes('?')) return false;
  if (trimmed.includes(';')) return false;
  if (trimmed.includes(':')) return false;
  if (trimmed.includes('|')) return false;
  if (trimmed.includes('\\')) return false;
  if (trimmed.includes('/')) return false;
  if (trimmed.includes('<')) return false;
  if (trimmed.includes('>')) return false;
  if (trimmed.includes('^')) return false;
  if (trimmed.includes('~')) return false;
  if (trimmed.includes('`')) return false;
  if (trimmed.includes('_')) return false;
  if (trimmed.includes('0') || trimmed.includes('1') || trimmed.includes('2') || 
      trimmed.includes('3') || trimmed.includes('4') || trimmed.includes('5') || 
      trimmed.includes('6') || trimmed.includes('7') || trimmed.includes('8') || 
      trimmed.includes('9')) return false;
  
  // Check against known patterns
  for (const { pattern, level } of headingPatterns) {
    if (pattern.test(trimmed)) {
      return { level, text: trimmed };
    }
  }
  
  // Check for common heading structures
  if (trimmed.length > 10 && trimmed.length < 80) {
    // Check if it's a standalone line that could be a heading
    const words = trimmed.split(' ');
    if (words.length >= 2 && words.length <= 8) {
      // Check if most words are capitalized (title case)
      const capitalizedWords = words.filter(word => 
        word.length > 0 && word[0] === word[0].toUpperCase()
      );
      if (capitalizedWords.length >= words.length * 0.7) {
        return { level: 2, text: trimmed };
      }
    }
  }
  
  return false;
}

function fixMarkdownStructure(content) {
  const lines = content.split('\n');
  const fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Skip empty lines
    if (!trimmed) {
      fixedLines.push(line);
      continue;
    }
    
    // Check if this line should be a heading
    const headingResult = isHeading(line);
    if (headingResult) {
      // Add the heading with proper markdown syntax
      const headingPrefix = '#'.repeat(headingResult.level);
      fixedLines.push(`${headingPrefix} ${headingResult.text}`);
      fixedLines.push(''); // Add blank line after heading
    } else {
      fixedLines.push(line);
    }
  }
  
  return fixedLines.join('\n');
}

function processArticle(articleDir) {
  const articleDataPath = path.join(articlesPath, articleDir, 'article-data.md');
  
  if (!fs.existsSync(articleDataPath)) {
    console.log(`Article data file not found: ${articleDataPath}`);
    return false;
  }

  try {
    let content = fs.readFileSync(articleDataPath, 'utf8');
    let hasChanges = false;
    
    // Remove footer content if it exists
    if (content.includes('FERZ—Formalizing Emergent Reasoning Zones—advances the frontier')) {
      content = content.replace(footerContent, '').trim();
      hasChanges = true;
      console.log(`  ✅ Removed footer content`);
    }
    
    // Fix markdown structure
    const originalContent = content;
    content = fixMarkdownStructure(content);
    
    if (content !== originalContent) {
      hasChanges = true;
      console.log(`  ✅ Fixed markdown headings`);
    }
    
    // Write the updated content back to the file
    if (hasChanges) {
      fs.writeFileSync(articleDataPath, content, 'utf8');
      console.log(`✅ Updated: ${articleDir}`);
      return true;
    } else {
      console.log(`⚠️  No changes needed: ${articleDir}`);
      return false;
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${articleDir}:`, error.message);
    return false;
  }
}

// Process all articles
console.log('Starting article markdown fix process...\n');

let successCount = 0;
let totalCount = articleDirs.length;

articleDirs.forEach(articleDir => {
  console.log(`Processing ${articleDir}...`);
  if (processArticle(articleDir)) {
    successCount++;
  }
  console.log(''); // Add blank line between articles
});

console.log(`📊 Summary:`);
console.log(`   Total articles processed: ${totalCount}`);
console.log(`   Successfully updated: ${successCount}`);
console.log(`   No changes needed: ${totalCount - successCount}`);

if (successCount > 0) {
  console.log('\n✅ Article markdown fix completed successfully!');
} else {
  console.log('\n⚠️  No articles were updated.');
}
