const fs = require('fs');
const path = require('path');

// Read all files from public/memes directory
const memesDir = path.join(__dirname, '..', 'public', 'memes');
const imgArrayPath = path.join(__dirname, '..', 'src', 'config', 'imgArray.ts');

try {
  // Get all image files from the directory
  const files = fs.readdirSync(memesDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
  });

  // Sort files alphabetically
  files.sort();

  // Create the new imgArray content
  const namesArray = files.map(file => `"${file}"`).join(',');
  const content = `export const imgArray = {
    names : [${namesArray}]
}`;

  // Read existing array to compare
  let existingCount = 0;
  try {
    const existingContent = fs.readFileSync(imgArrayPath, 'utf8');
    const existingMatch = existingContent.match(/names\s*:\s*\[(.*?)\]/s);
    if (existingMatch) {
      existingCount = existingMatch[1].split(',').filter(item => item.trim()).length;
    }
  } catch (e) {
    // File might not exist or be readable
  }

  // Write to imgArray.ts
  fs.writeFileSync(imgArrayPath, content, 'utf8');

  const removedCount = existingCount > 0 ? existingCount - files.length : 0;
  
  console.log(`✅ Successfully synced ${files.length} images to imgArray.ts`);
  if (existingCount > 0) {
    console.log(`📊 Previous count: ${existingCount} images`);
    console.log(`📊 Current count: ${files.length} images`);
    if (removedCount > 0) {
      console.log(`🗑️  Removed ${removedCount} deleted image(s) from the array`);
    } else if (removedCount < 0) {
      console.log(`➕ Added ${Math.abs(removedCount)} new image(s) to the array`);
    } else {
      console.log(`✅ All images are in sync`);
    }
  }
  console.log(`\nFirst 10 images:`, files.slice(0, 10));
  console.log(`\nLast 10 images:`, files.slice(-10));
} catch (error) {
  console.error('❌ Error syncing images:', error.message);
  process.exit(1);
}

