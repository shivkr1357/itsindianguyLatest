// Script to generate favicon.ico from SVG
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

async function generateFavicon() {
  try {
    // Read the SVG file
    const svgPath = path.join(__dirname, '../src/app/icon.svg');
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Create multiple sizes for ICO (16x16, 32x32, 48x48)
    const sizes = [16, 32, 48];
    const pngBuffers = [];
    
    console.log('🔄 Generating PNG images at different sizes...');
    for (const size of sizes) {
      const pngBuffer = await sharp(svgBuffer)
        .resize(size, size, {
          kernel: sharp.kernel.lanczos3
        })
        .png()
        .toBuffer();
      pngBuffers.push(pngBuffer);
      console.log(`   ✓ Generated ${size}x${size} PNG`);
    }
    
    // Convert PNG buffers to ICO format
    console.log('🔄 Converting to ICO format...');
    const icoBuffer = await toIco(pngBuffers);
    
    // Write ICO file
    const outputPath = path.join(__dirname, '../src/app/favicon.ico');
    fs.writeFileSync(outputPath, icoBuffer);
    
    console.log('✅ Successfully created favicon.ico at src/app/favicon.ico');
    console.log('   Sizes included: 16x16, 32x32, 48x48');
    
  } catch (error) {
    console.error('❌ Error generating favicon:', error.message);
    if (error.code === 'MODULE_NOT_FOUND') {
      console.log('   Please install required packages:');
      console.log('   npm install --save-dev sharp to-ico');
    }
    process.exit(1);
  }
}

generateFavicon();

