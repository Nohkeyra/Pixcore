export interface Preset {
  name: string;
  basePrompt: string;
  aspectRatio: string;
  negativePrompt: string;
}

export interface Category {
  category: string;
  presets: Preset[];
}

export const PRESETS: Category[] = [
  {
    "category": "Vector",
    "presets": [
      {
        "name": "Flat Gradient",
        "basePrompt": "masterpiece vector art, flat illustration, smooth gradients, clean geometric shapes, minimalist composition, bold vibrant color palette, no outlines, modern graphic style, high resolution",
        "aspectRatio": "1:1",
        "negativePrompt": "3D, realistic, textured, sketchy, hand-drawn, noisy, blurry"
      },
      {
        "name": "Line Art",
        "basePrompt": "high-quality line art vector, single-weight strokes, minimal detail, crisp black outlines on a clean white background, geometric precision, modern iconography, balanced negative space",
        "aspectRatio": "1:1",
        "negativePrompt": "filled shapes, gradients, colors, shading, realistic, shadows"
      },
      {
        "name": "Isometric",
        "basePrompt": "professional isometric vector illustration, 30-degree projection, vibrant flat colors, clean geometric construction, technical precision, sharp edges, no perspective distortion, infographic style",
        "aspectRatio": "1:1",
        "negativePrompt": "perspective, 3D render, soft shadows, realistic, organic, hand-drawn"
      },
      {
        "name": "Duotone",
        "basePrompt": "striking duotone vector art, high-contrast two-color palette, flat graphic shapes, modern poster design, bold silhouettes, minimalist aesthetic, strong visual impact",
        "aspectRatio": "1:1",
        "negativePrompt": "multicolor, gradients, 3D, realistic, detailed, soft"
      },
      {
        "name": "Geometric Abstract",
        "basePrompt": "abstract geometric vector composition, overlapping shapes, bold primary color palette, Bauhaus influence, mathematical precision, clean edges, modern art print style",
        "aspectRatio": "1:1",
        "negativePrompt": "organic, realistic, 3D, textured, hand-drawn, figurative"
      },
      {
        "name": "Retro Pop",
        "basePrompt": "retro pop art vector, bold halftone dot patterns, vibrant CMYK colors, thick black outlines, 1960s comic book aesthetic, flat graphic illustration, dynamic composition",
        "aspectRatio": "1:1",
        "negativePrompt": "realistic, 3D, muted colors, modern, minimal, photographic"
      },
      {
        "name": "Minimal Icon",
        "basePrompt": "minimal vector icon, single solid color, simple geometric form, pixel-perfect sharp edges, modern UI icon style, scalable design, abundant negative space, clear communication",
        "aspectRatio": "1:1",
        "negativePrompt": "detailed, realistic, gradients, 3D, complex, textured"
      },
      {
        "name": "Glassmorphism",
        "basePrompt": "masterpiece vector art, frosted glass effect, blurred background, vibrant colors, semi-transparent shapes, soft shadows, modern UI aesthetic, sleek and professional",
        "aspectRatio": "1:1",
        "negativePrompt": "opaque, dull colors, 3D render, realistic, messy"
      },
      {
        "name": "3D Claymorphism",
        "basePrompt": "playful 3D claymorphism vector, soft rounded shapes, matte finish, pastel color palette, friendly character design, inflated forms, modern digital art style",
        "aspectRatio": "1:1",
        "negativePrompt": "sharp edges, metallic, realistic, dark, complex textures"
      },
      {
        "name": "Neo-Brutalism",
        "basePrompt": "bold neo-brutalist vector, high contrast, thick black borders, clashing vibrant colors, raw geometric shapes, intentional visual friction, modern graphic design",
        "aspectRatio": "1:1",
        "negativePrompt": "soft, elegant, gradients, realistic, subtle, pastel"
      },
      {
        "name": "Gradient Grain",
        "basePrompt": "sophisticated vector art, smooth color gradients, heavy grainy texture overlay, noise effect, minimalist composition, contemporary aesthetic, atmospheric mood",
        "aspectRatio": "1:1",
        "negativePrompt": "clean digital, flat colors, sharp, realistic, 3D"
      },
      {
        "name": "Abstract 3D Fluid",
        "basePrompt": "dynamic 3D fluid vector, flowing liquid shapes, iridescent pearlescent colors, high gloss, abstract composition, futuristic digital art, smooth motion feel",
        "aspectRatio": "1:1",
        "negativePrompt": "static, geometric, matte, realistic, vintage, monochrome"
      },
      {
        "name": "Minimalist monoline",
        "basePrompt": "ultra-clean monoline vector art, single-weight strokes, sophisticated minimalist design, black and white, geometric precision, modern iconography",
        "aspectRatio": "1:1",
        "negativePrompt": "thick lines, colorful, gradients, 3D, complex shading"
      },
      {
        "name": "Retro-Futurism 80s",
        "basePrompt": "80s retro-futurism vector, synthwave aesthetic, neon grids, chrome reflections, sunset gradient, digital landscape, nostalgic futuristic vibe",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, minimal, organic, realistic, muted colors"
      },
      {
        "name": "Flat 2.0",
        "basePrompt": "modern flat 2.0 vector design, subtle depth with soft shadows, vibrant color palette, clean geometric shapes, professional graphic illustration, balanced composition",
        "aspectRatio": "1:1",
        "negativePrompt": "3D render, realistic, complex textures, messy, old-fashioned"
      },
      {
        "name": "Hand-Drawn Organic",
        "basePrompt": "loose hand-drawn organic vector, sketchy lines, natural feel, earthy color palette, imperfect shapes, artistic and human touch, minimalist nature illustration",
        "aspectRatio": "1:1",
        "negativePrompt": "perfectly geometric, neon, realistic, 3D, industrial"
      },
      {
        "name": "Geometric Memphis 2.0",
        "basePrompt": "updated memphis style vector, modern color palettes, playful geometric patterns, clean lines, dynamic composition, contemporary graphic design aesthetic",
        "aspectRatio": "1:1",
        "negativePrompt": "vintage 80s, muted, realistic, 3D, serious, minimal"
      },
      {
        "name": "Full Color Realism",
        "basePrompt": "high-fidelity vector art, true to life colors, photographic detail, exact color matching from reference, professional vector precision, vibrant and realistic",
        "aspectRatio": "1:1",
        "negativePrompt": "flat, stylized, abstract, monochrome, low detail"
      },
      {
        "name": "Vibrant Pop Vector",
        "basePrompt": "energetic vector illustration, enhanced saturation, true shapes to reference, bold and vibrant colors, dynamic graphic style, high impact",
        "aspectRatio": "1:1",
        "negativePrompt": "muted, realistic, 3D, blurry, soft"
      },
      {
        "name": "Soft Pastel Fidelity",
        "basePrompt": "accurate vector representation, soft pastel tones, smooth color transitions, faithful to source image shapes, elegant and clean aesthetic",
        "aspectRatio": "1:1",
        "negativePrompt": "high contrast, neon, sharp, messy, 3D"
      },
      {
        "name": "High-Fidelity Pro",
        "basePrompt": "maximum detail vectorization, exact color palette from image, professional grade precision, clean paths, true to source geometry",
        "aspectRatio": "1:1",
        "negativePrompt": "stylized, artistic, flat, low poly, abstract"
      },
      {
        "name": "Natural Palette Vector",
        "basePrompt": "realistic vector art, earthy and natural tones, faithful to source image colors and shapes, clean and professional finish, organic feel",
        "aspectRatio": "1:1",
        "negativePrompt": "neon, artificial, geometric, 3D, stylized"
      },
      {
        "name": "Neon Glow",
        "basePrompt": "vibrant neon glow vector, bright fluorescent lines, dark background for high contrast, glowing edges effect, cyberpunk futuristic aesthetic, clean vector paths, electric energy",
        "aspectRatio": "1:1",
        "negativePrompt": "realistic, daylight, muted colors, organic, textured, soft"
      },
      {
        "name": "Swiss Style",
        "basePrompt": "swiss international style vector graphic, strict grid-based layout, bold sans-serif typography, red, black, and white color palette, minimalist geometric shapes, clean modernist design",
        "aspectRatio": "1:1",
        "negativePrompt": "decorative, ornate, realistic, 3D, hand-drawn, serif"
      },
      {
        "name": "Blob Shape",
        "basePrompt": "organic blob vector shapes, soft amorphous forms, smooth gradient mesh fills, modern web design aesthetic, fluid composition, vibrant friendly colors, contemporary graphic style",
        "aspectRatio": "1:1",
        "negativePrompt": "sharp edges, geometric, realistic, 3D, vintage, symmetrical"
      },
      {
        "name": "Outline Illustration",
        "basePrompt": "elegant continuous outline vector, single line weight, minimal color fills, modern editorial illustration style, clean confident strokes, ample white space, sophisticated aesthetic",
        "aspectRatio": "1:1",
        "negativePrompt": "fully colored, realistic, 3D, complex shading, busy"
      },
      {
        "name": "Risograph",
        "basePrompt": "risograph print effect vector, limited color palette (e.g., blue, red, yellow), subtle grain texture overlay, intentional misregistration, vintage print aesthetic, bold graphic shapes",
        "aspectRatio": "1:1",
        "negativePrompt": "clean digital, realistic, 3D, photographic, smooth gradients, perfect alignment"
      },
      {
        "name": "Memphis Style",
        "basePrompt": "memphis design vector pattern, 1980s geometric shapes, bold squiggles and confetti, vibrant clashing color palette, playful postmodern aesthetic, dynamic and chaotic composition",
        "aspectRatio": "1:1",
        "negativePrompt": "minimal, muted, realistic, 3D, serious, elegant"
      },



      {
        "name": "Art Deco",
        "basePrompt": "art deco vector pattern, geometric symmetry and repetition, gold and black color palette, 1920s glamour, sunburst motifs, elegant sharp lines, luxurious aesthetic",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, minimal, realistic, organic, casual, hand-drawn"
      },
      {
        "name": "Flat Character",
        "basePrompt": "flat character vector illustration, simplified geometric shapes, no outlines, limited and friendly color palette, modern corporate style, clean design, expressive poses",
        "aspectRatio": "1:1",
        "negativePrompt": "realistic, 3D, detailed, shaded, complex anatomy, outlines"
      },

      {
        "name": "Cyberpunk Glitch",
        "basePrompt": "cyberpunk glitch vector art, digital signal distortion, neon cyan and magenta color scheme, high-contrast, futuristic tech aesthetic, sharp geometric fragments, anaglyph effect",
        "aspectRatio": "1:1",
        "negativePrompt": "smooth, organic, realistic, soft colors, vintage, analog"
      },
      {
        "name": "Bauhaus Poster",
        "basePrompt": "bauhaus style vector poster design, primary colors (red, yellow, blue), geometric abstraction, strong grid-based composition, clean modernist shapes, sans-serif typography, minimal aesthetic",
        "aspectRatio": "1:1",
        "negativePrompt": "ornate, decorative, realistic, 3D, textured, serif"
      },
      {
        "name": "Vaporwave Aesthetic",
        "basePrompt": "vaporwave vector landscape, pastel pink and teal palette, 80s retro grid lines, sunset gradient, lo-fi digital aesthetic, geometric palm trees, nostalgic and surreal mood",
        "aspectRatio": "1:1",
        "negativePrompt": "dark, realistic, modern, sharp, high-contrast, monochrome"
      },
      {
        "name": "Brutalist Block",
        "basePrompt": "brutalist vector graphic, heavy black geometric blocks, raw and industrial aesthetic, high-contrast monochrome, minimal detail, bold and imposing graphic impact, modular design",
        "aspectRatio": "1:1",
        "negativePrompt": "soft, organic, colorful, decorative, realistic, elegant"
      },
      {
        "name": "Organic Line",
        "basePrompt": "organic line vector illustration, flowing, varied-weight hand-drawn lines, warm earth tone palette, minimalist nature-inspired forms, clean strokes, serene and calm aesthetic",
        "aspectRatio": "1:1",
        "negativePrompt": "sharp geometric, neon, realistic, complex, 3D, rigid"
      },
      {
        "name": "Futuristic HUD",
        "basePrompt": "futuristic HUD vector elements, technical UI display, glowing blue holographic interface, data visualization graphics, geometric precision, sci-fi aesthetic, complex information design",
        "aspectRatio": "1:1",
        "negativePrompt": "organic, vintage, realistic, hand-drawn, warm colors, analog"
      },
      {
        "name": "Vintage Travel Poster",
        "basePrompt": "vintage travel poster vector illustration, flat color blocks, subtle grainy texture overlay, nostalgic 1950s art style, bold sans-serif typography, clean simplified landscapes and landmarks",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, neon, 3D render, realistic photo, sharp digital, complex"
      },
      {
        "name": "Abstract Liquid",
        "basePrompt": "abstract liquid vector shapes, fluid and organic forms, vibrant mesh gradients, modern digital art aesthetic, smooth color transitions, contemporary and dynamic composition",
        "aspectRatio": "1:1",
        "negativePrompt": "sharp edges, geometric, realistic, monochrome, vintage, static"
      },
      {
        "name": "Sticker Style",
        "basePrompt": "die-cut sticker style vector art, thick white border, bold and clean outlines, playful character design, vibrant flat colors, graphic and collectible look",
        "aspectRatio": "1:1",
        "negativePrompt": "realistic, 3D, thin lines, muted colors, complex shading, no border"
      },
      {
        "name": "Engraving Style",
        "basePrompt": "vintage engraving vector illustration, fine cross-hatching and parallel lines for shading, monochrome, antique bookplate aesthetic, high technical precision, classic and detailed look",
        "aspectRatio": "1:1",
        "negativePrompt": "color, gradients, modern, flat design, 3D, bold shapes"
      }
    ]
  },
  {
    "category": "Typography Art",
    "presets": [
      {
        "name": "3D Isometric",
        "basePrompt": "masterpiece 3D isometric typography, architectural letter forms with clean geometric extrusion, hard drop shadows creating depth, rendered in a minimalist vector style, vibrant flat color palette on a solid background, high resolution",
        "aspectRatio": "1:1",
        "negativePrompt": "realistic, photographic, gradients, organic, textured, complex background"
      },
      {
        "name": "Floral",
        "basePrompt": "masterpiece typography, letters intricately woven with lush, detailed botanical flowers and vines, elegant script or serif font base, soft pastel color palette, on a clean, solid-colored background, whimsical and romantic, high detail illustration",
        "aspectRatio": "1:1",
        "negativePrompt": "realistic, 3D render, dark colors, minimal, plain, complex background"
      },
      {
        "name": "Retro Bubble",
        "basePrompt": "masterpiece of 70s retro bubble letter typography, glossy, inflated, and rounded letterforms with shiny highlights, groovy psychedelic aesthetic, vibrant and warm color palette (oranges, yellows, browns), on a clean solid background, vector illustration",
        "aspectRatio": "1:1",
        "negativePrompt": "sharp edges, minimal, realistic, modern, dark, complex background"
      },
      {
        "name": "Neon Sign",
        "basePrompt": "masterpiece neon sign typography, realistic glowing glass tubes forming letters, bright, electric colors (pink, blue, green) with a vibrant hum, mounted on a dark brick wall or solid dark background for high contrast, retro-futuristic, 80s aesthetic",
        "aspectRatio": "1:1",
        "negativePrompt": "realistic photo, daylight, muted colors, minimal, complex background"
      },
      {
        "name": "Paper Cut",
        "basePrompt": "masterpiece paper cut typography, intricate layers of colored paper creating dimensional letters, subtle soft drop shadows to enhance depth, handmade craft aesthetic, clean-cut edges, on a solid, contrasting background, high detail vector",
        "aspectRatio": "1:1",
        "negativePrompt": "realistic, flat 2D, dark colors, complex, detailed, complex background"
      },
      {
        "name": "Liquid Chrome",
        "basePrompt": "masterpiece liquid chrome typography, futuristic Y2K aesthetic, melting fluid metal letters, high-gloss chrome with realistic reflections and refractions, abstract and dynamic, on a dark solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "matte, realistic photo, vintage, minimal, dark, complex background"
      },
      {
        "name": "Puffy 3D",
        "basePrompt": "masterpiece puffy 3D typography, inflated soft-touch letterforms, marshmallow aesthetic, matte finish, playful and rounded, vibrant pastel colors, on a clean solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "sharp edges, metallic, realistic, dark, complex textures"
      },
      {
        "name": "Kinetic Distortion",
        "basePrompt": "masterpiece kinetic distortion typography, stretched and warped letterforms, dynamic motion blur effect, high energy, futuristic graphic design, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "static, clean, minimal, realistic, vintage"
      },
      {
        "name": "Retro Serif 70s",
        "basePrompt": "masterpiece 70s retro serif typography, bold and groovy letterforms, warm vintage color palette, psychedelic aesthetic, clean vector illustration, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, minimal, sharp, neon, futuristic"
      },
      {
        "name": "Glass Refraction",
        "basePrompt": "masterpiece glass refraction typography, letters distorted through thick glass, realistic light caustics and refractions, elegant and modern crystal style, on a dark solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "opaque, flat, realistic photo, dark, heavy, textured"
      },
      {
        "name": "Cyberpunk Glitch 2.0",
        "basePrompt": "masterpiece cyberpunk glitch typography, digital signal distortion, RGB split, pixelation, futuristic tech aesthetic, sharp geometric fragments, on a dark solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "smooth, organic, realistic, soft colors, vintage"
      },
      {
        "name": "Lush Tropical Botanical",
        "basePrompt": "masterpiece tropical botanical typography, letters woven with realistic exotic flowers and jungle leaves, vibrant and lush color palette, high detail illustration, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "geometric, industrial, dark, minimal, plain"
      },
      {
        "name": "Minimalist Swiss",
        "basePrompt": "masterpiece minimalist swiss typography, bold sans-serif letterforms, strict grid-based composition, clean modernist shapes, high contrast, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "decorative, ornate, realistic, 3D, hand-drawn, serif"
      },
      {
        "name": "Neon Tubing 3D",
        "basePrompt": "masterpiece 3D neon tubing typography, realistic glowing glass tubes, bright electric colors, retro-futuristic 80s aesthetic, high contrast on a dark solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "realistic photo, daylight, muted colors, minimal"
      },
      {
        "name": "Brutalist Block Type",
        "basePrompt": "masterpiece brutalist block typography, heavy solid industrial letterforms, raw and imposing graphic impact, high-contrast monochrome, minimal detail, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "soft, organic, colorful, decorative, elegant"
      },
      {
        "name": "Wildstyle Graffiti",
        "basePrompt": "masterpiece wildstyle graffiti typography, complex interlocking letterforms, arrows and flourishes, vibrant spray paint colors, street art aesthetic, dynamic and urban, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "clean, corporate, minimal, elegant, realistic"
      },
      {
        "name": "Bubble Throw-up",
        "basePrompt": "masterpiece bubble throw-up graffiti, rounded and bubbly letterforms, thick bold outlines, fast and energetic street art style, vibrant colors, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "sharp, minimal, realistic, modern, dark"
      },
      {
        "name": "Stencil Street Art",
        "basePrompt": "masterpiece stencil street art typography, high contrast spray paint effect, banksy-style aesthetic, realistic drips and overspray, bold graphic impact, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "clean, smooth, colorful, realistic, 3D"
      },
      {
        "name": "Marker Tag",
        "basePrompt": "masterpiece marker tag typography, hand-written street calligraphy, fluid and fast strokes, ink bleed effect, urban graffiti aesthetic, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "geometric, clean, minimal, realistic, 3D"
      },
      {
        "name": "Blockbuster Graffiti",
        "basePrompt": "masterpiece blockbuster graffiti typography, massive solid square letterforms, high impact urban style, bold outlines, vibrant colors, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "small, thin, minimal, elegant, realistic"
      },
      {
        "name": "Geometric Block",
        "basePrompt": "masterpiece of geometric block typography, letters constructed from bold, solid shapes (circles, squares, triangles), Bauhaus and constructivist influence, primary color palette, on a clean solid background, minimalist and architectural",
        "aspectRatio": "1:1",
        "negativePrompt": "organic, realistic, decorative, complex, gradients, complex background"
      },
      {
        "name": "Chrome Liquid",
        "basePrompt": "masterpiece of chrome liquid typography, futuristic Y2K aesthetic with letters appearing as melting, fluid metal, high-gloss chrome with realistic reflections and refractions, on a dark, solid background, abstract and dynamic",
        "aspectRatio": "1:1",
        "negativePrompt": "matte, realistic photo, vintage, minimal, dark, complex background"
      },
      {
        "name": "Sticker Bomb",
        "basePrompt": "masterpiece of sticker bomb typography, letters formed by a collage of overlapping, colorful die-cut stickers, street art and urban graffiti aesthetic, chaotic and vibrant composition, on a clean solid background, vector illustration",
        "aspectRatio": "1:1",
        "negativePrompt": "clean, minimal, realistic, elegant, muted, complex background"
      },


      {
        "name": "Balloon",
        "basePrompt": "masterpiece of balloon typography, letters illustrated as inflated foil mylar balloons, realistic shiny reflections and crinkles, celebratory party aesthetic, vibrant metallic colors, on a clean solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "deflated, realistic photo, dark, muted, serious, complex background"
      },
      {
        "name": "Ribbon",
        "basePrompt": "masterpiece ribbon typography, letters formed from a single, elegantly flowing and folded ribbon, creating a sense of depth and movement, subtle shading on the folds, on a solid, contrasting background, classic and decorative",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, minimal, realistic fabric, dark, plain, complex background"
      },
      {
        "name": "Pixel Art",
        "basePrompt": "masterpiece of 8-bit pixel art typography, crisp, blocky letterforms, retro video game aesthetic, limited color palette, perfect grid alignment, on a solid, dark background, nostalgic and digital",
        "aspectRatio": "1:1",
        "negativePrompt": "smooth, realistic, modern, high resolution, gradients, complex background"
      },
      {
        "name": "Graffiti",
        "basePrompt": "masterpiece of graffiti wildstyle typography, complex and interlocking letterforms with arrows and flourishes, vibrant spray paint colors with drips and overspray effects, street art aesthetic on a clean solid background, dynamic and urban",
        "aspectRatio": "1:1",
        "negativePrompt": "clean, corporate, realistic, minimal, elegant, complex background"
      },
      {
        "name": "Botanical",
        "basePrompt": "masterpiece of botanical typography, letters seamlessly integrated with realistic leaves, vines, and branches, organic and natural aesthetic, lush green color palette, on a solid, earth-toned background, detailed illustration",
        "aspectRatio": "1:1",
        "negativePrompt": "geometric, realistic, industrial, dark, minimal, complex background"
      },

      {
        "name": "Glass",
        "basePrompt": "masterpiece of glass typography, letters made of transparent, clear glass with realistic light refraction and caustics, elegant and modern crystal style, on a dark, solid background to emphasize transparency, high detail 3D render look",
        "aspectRatio": "1:1",
        "negativePrompt": "opaque, realistic photo, dark, heavy, textured, complex background"
      },
      {
        "name": "Cartoon",
        "basePrompt": "masterpiece of cartoon typography, bouncy, expressive, and animated letterforms with bold black outlines, vibrant flat colors, playful and fun comic book style, on a simple solid background, dynamic and energetic",
        "aspectRatio": "1:1",
        "negativePrompt": "realistic, serious, minimal, elegant, muted, complex background"
      },
      {
        "name": "Holographic",
        "basePrompt": "masterpiece of holographic typography, letters with an iridescent, rainbow sheen that shifts with light, futuristic Y2K aesthetic, glowing and ethereal effect, on a dark, solid background, prismatic and dreamy",
        "aspectRatio": "1:1",
        "negativePrompt": "matte, realistic, vintage, dark, monochrome, complex background"
      },
      {
        "name": "Liquid Metal",
        "basePrompt": "masterpiece of liquid metal typography, letters appearing as molten, flowing chrome or gold, high-gloss surface with intense specular highlights, futuristic and industrial aesthetic, on a dark solid background, powerful and dynamic",
        "aspectRatio": "1:1",
        "negativePrompt": "matte, realistic, vintage, organic, colorful, complex background"
      },
      {
        "name": "Glow-in-the-Dark",
        "basePrompt": "masterpiece of glow-in-the-dark typography, letters with a strong phosphorescent green or blue glow, eerie and radioactive aesthetic, requires a dark solid background to be visible, bold and simple letterforms",
        "aspectRatio": "1:1",
        "negativePrompt": "daylight, realistic, muted, soft, elegant, complex background"
      },
      {
        "name": "Origami Folded",
        "basePrompt": "masterpiece of origami typography, letters constructed from intricately folded paper, with sharp creases and geometric facets, subtle shadows to show depth, on a solid, contrasting background, clean and precise paper art style",
        "aspectRatio": "1:1",
        "negativePrompt": "smooth, realistic, liquid, metallic, dark, complex background"
      },
      {
        "name": "Graffiti Throw-up",
        "basePrompt": "masterpiece of graffiti throw-up typography, big, rounded, and bubbly letterforms with a thick, bold outline, often filled with one or two colors, fast and energetic street art style, on a clean solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "clean, corporate, minimal, elegant, realistic, complex background"
      },
      {
        "name": "Steampunk Gear",
        "basePrompt": "masterpiece of steampunk typography, letters constructed from intricate brass and copper gears, cogs, and pipes, industrial Victorian aesthetic, detailed mechanical elements, on a dark, textured background",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, minimal, plastic, bright colors, organic, complex background"
      },
      {
        "name": "Cloud-like",
        "basePrompt": "masterpiece of cloud-like typography, letters formed from soft, fluffy, white cumulus clouds, dreamy and ethereal aesthetic, set against a clear blue sky or solid colored background, light and airy feel",
        "aspectRatio": "1:1",
        "negativePrompt": "sharp, heavy, dark, metallic, industrial, complex background"
      },
      {
        "name": "Molten Lava",
        "basePrompt": "masterpiece of molten lava typography, letters appearing as glowing, cracking magma with intense heat and light emanating from within, fiery orange and red colors, on a dark, volcanic rock background, powerful and volatile",
        "aspectRatio": "1:1",
        "negativePrompt": "cold, water, realistic, soft, minimal, complex background"
      },
      {
        "name": "Digital Glitch",
        "basePrompt": "masterpiece of digital glitch typography, letters distorted with RGB split, pixelation, and datamoshing effects, futuristic cyberpunk aesthetic, on a dark, solid background, chaotic and technological",
        "aspectRatio": "1:1",
        "negativePrompt": "clean, smooth, vintage, organic, realistic, complex background"
      },

      {
        "name": "Neon Wireframe",
        "basePrompt": "masterpiece of neon wireframe typography, letters constructed from a 3D glowing grid of lines, retro-futuristic 80s digital aesthetic, vibrant cyan and magenta colors, on a dark solid background, technical and abstract",
        "aspectRatio": "1:1",
        "negativePrompt": "solid, realistic, vintage, organic, matte, complex background"
      }
    ]
  },
  {
    "category": "Monogram Art",
    "presets": [
      {
        "name": "Luxury Crest",
        "basePrompt": "masterpiece luxury crest monogram, a central serif letter embossed in gold, surrounded by an ornate, baroque-style frame with lions and crowns, on a solid navy blue background, royal and prestigious emblem",
        "aspectRatio": "1:1",
        "negativePrompt": "casual, modern, realistic, plain, colorful, complex background"
      },
      {
        "name": "Minimalist Circle",
        "basePrompt": "masterpiece minimalist monogram, a single, clean sans-serif letter perfectly centered within a thin, geometric circle, modern and balanced branding, on a solid white background, high-resolution vector",
        "aspectRatio": "1:1",
        "negativePrompt": "ornate, decorative, realistic, complex, colorful, complex background"
      },
      {
        "name": "Floral Wreath",
        "basePrompt": "masterpiece floral wreath monogram, an elegant script letter centered within a delicate, hand-drawn circle of watercolor flowers and leaves, romantic wedding aesthetic, on a soft blush pink background",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, geometric, realistic, dark, masculine, complex background"
      },
      {
        "name": "Art Deco",
        "basePrompt": "masterpiece Art Deco monogram, a bold, geometric sans-serif initial set within a symmetrical, gold-lined frame with sunburst motifs, 1920s Gatsby glamour, on a solid black background, high contrast",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, casual, realistic, organic, colorful, complex background"
      },
      {
        "name": "Vintage Seal",
        "basePrompt": "masterpiece vintage seal monogram, a classic serif initial inside a circular badge with a slightly distressed, ink-stamped texture, heritage and authentic branding, on a solid cream-colored background",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, clean, realistic, bright colors, minimal, complex background"
      },
      {
        "name": "Geometric Split",
        "basePrompt": "masterpiece geometric split monogram, a bold initial cleanly divided by abstract, colorful shapes, contemporary and modern branding, coral and teal color palette, on a solid background, vector art",
        "aspectRatio": "1:1",
        "negativePrompt": "traditional, ornate, realistic, vintage, complex, complex background"
      },
      {
        "name": "Watercolor",
        "basePrompt": "masterpiece watercolor monogram, a soft, flowing script initial painted with transparent watercolor, showing brush strokes and color bleeds, delicate and artistic aesthetic, on a textured paper or solid white background",
        "aspectRatio": "1:1",
        "negativePrompt": "sharp, digital, realistic, bold, geometric, complex background"
      },
      {
        "name": "Shield Heraldic",
        "basePrompt": "masterpiece heraldic shield monogram, a bold, medieval-style letter on a classic knight's shield, possibly with a lion or dragon emblem, prestigious and historical coat of arms, on a solid burgundy background",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, casual, realistic, simple, playful, complex background"
      },
      {
        "name": "Neon Outline",
        "basePrompt": "masterpiece neon outline monogram, a single letter formed by a glowing, electric blue or pink neon tube, cyberpunk and futuristic aesthetic, on a dark, solid purple background for high contrast, vibrant and energetic",
        "aspectRatio": "1:1",
        "negativePrompt": "vintage, muted, realistic, daylight, traditional, complex background"
      },
      {
        "name": "Modern Minimalist",
        "basePrompt": "masterpiece modern minimalist monogram, ultra-clean geometric sans-serif initials, high-end branding aesthetic, perfectly balanced, on a solid white background, vector precision",
        "aspectRatio": "1:1",
        "negativePrompt": "ornate, decorative, realistic, complex, colorful"
      },
      {
        "name": "Luxury Gold Foil",
        "basePrompt": "masterpiece luxury gold foil monogram, realistic metallic gold texture, embossed letterforms, prestigious branding, elegant and sophisticated, on a solid dark background",
        "aspectRatio": "1:1",
        "negativePrompt": "casual, cheap, flat, colorful, messy"
      },
      {
        "name": "Interlocking Initials",
        "basePrompt": "masterpiece interlocking initials monogram, sophisticated fashion-style interlocked letterforms, minimalist and elegant, high contrast, on a solid background, vector art",
        "aspectRatio": "1:1",
        "negativePrompt": "separated, ornate, realistic, colorful, busy"
      },
      {
        "name": "Geometric Shield",
        "basePrompt": "masterpiece geometric shield monogram, modern heraldry, sharp lines and geometric construction, tech-focused branding, bold and imposing, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "organic, vintage, realistic, soft, traditional"
      },
      {
        "name": "Floral Crest",
        "basePrompt": "masterpiece floral crest monogram, delicate hand-drawn flowers forming a circular frame, elegant script initial, romantic and artistic aesthetic, on a soft solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, geometric, realistic, dark, masculine"
      },
      {
        "name": "Abstract Monoline",
        "basePrompt": "masterpiece abstract monoline monogram, single continuous line forming initials, sophisticated minimalist design, geometric precision, modern and clean, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "thick lines, colorful, gradients, 3D, complex shading"
      },
      {
        "name": "Cyberpunk Emblem",
        "basePrompt": "masterpiece cyberpunk emblem monogram, neon lines and futuristic shapes, dark background for high contrast, glowing edges, electric energy, tech-noir aesthetic",
        "aspectRatio": "1:1",
        "negativePrompt": "vintage, muted, realistic, daylight, traditional"
      },
      {
        "name": "Vintage Heritage",
        "basePrompt": "masterpiece vintage heritage monogram, classic timeless letterforms, hand-drawn feel, antique branding aesthetic, sophisticated and authentic, on a solid cream background",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, neon, sharp digital, 3D render, realistic"
      },
      {
        "name": "3D Glass Monogram",
        "basePrompt": "masterpiece 3D glass monogram, transparent refractive glass letterforms, realistic light refraction and caustics, elegant and modern crystal style, on a dark solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "opaque, flat, realistic photo, dark, heavy, textured"
      },
      {
        "name": "Brutalist Stamp",
        "basePrompt": "masterpiece brutalist stamp monogram, bold raw ink-stamped aesthetic, heavy solid letterforms, intentional imperfections, high impact graphic design, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "soft, organic, colorful, decorative, elegant"
      },
      {
        "name": "Extreme Brutalist",
        "basePrompt": "masterpiece extreme brutalist monogram, massive raw distorted geometry, imposing graphic impact, raw industrial aesthetic, high-contrast monochrome, modular design",
        "aspectRatio": "1:1",
        "negativePrompt": "soft, organic, colorful, decorative, elegant"
      },
      {
        "name": "Glitch Core",
        "basePrompt": "masterpiece glitch core monogram, digital corruption and fragmented initials, RGB split, pixelation, futuristic cyberpunk aesthetic, chaotic and technological",
        "aspectRatio": "1:1",
        "negativePrompt": "clean, smooth, vintage, organic, realistic"
      },
      {
        "name": "Liquid Metal Extreme",
        "basePrompt": "masterpiece liquid metal monogram, molten flowing chrome or gold, extreme reflections and specular highlights, futuristic and industrial aesthetic, dynamic and powerful",
        "aspectRatio": "1:1",
        "negativePrompt": "matte, realistic, vintage, organic, colorful"
      },
      {
        "name": "Bio-Mechanical",
        "basePrompt": "masterpiece bio-mechanical monogram, organic meets industrial, complex mechanical details integrated with biological forms, intricate and detailed, on a dark background",
        "aspectRatio": "1:1",
        "negativePrompt": "simple, minimal, bright colors, clean, flat"
      },
      {
        "name": "Dark Gothic Extreme",
        "basePrompt": "masterpiece dark gothic monogram, sharp aggressive medieval-inspired letterforms, ornate and dark aesthetic, high contrast, on a solid dark background",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, minimal, futuristic, bright colors, simple"
      },
      {
        "name": "Botanical Frame",
        "basePrompt": "masterpiece botanical monogram, a clean serif initial framed by an elegant border of hand-drawn leaves and branches, natural and organic aesthetic, on a solid sage green background",
        "aspectRatio": "1:1",
        "negativePrompt": "geometric, industrial, realistic, urban, minimal, complex background"
      },
      {
        "name": "Ribbon Banner",
        "basePrompt": "masterpiece ribbon banner monogram, a bold initial integrated into a flowing, three-dimensional ribbon with elegant folds and subtle shading, classic and decorative vintage style, on a solid ivory background",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, minimal, realistic, plain, geometric, complex background"
      },



      {
        "name": "Laurel Wreath",
        "basePrompt": "masterpiece laurel wreath monogram, a classic Roman-style initial encircled by a detailed laurel wreath, symbolizing victory and prestige, on a solid white marble background, timeless and elegant",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, casual, realistic, playful, colorful, complex background"
      },
      {
        "name": "Overlapping Letters",
        "basePrompt": "masterpiece of overlapping letters monogram, two or three initials elegantly interlocked, minimalist and sophisticated fashion brand style, high contrast black and white, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "separated, ornate, realistic, colorful, busy, complex background"
      },
      {
        "name": "Circular Badge",
        "basePrompt": "masterpiece circular badge monogram, a bold initial and surrounding text within a round emblem, vintage American collegiate or heritage brand style, navy blue and white color scheme, on a solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, minimal, realistic, abstract, complex, complex background"
      },
      {
        "name": "Ornate Victorian",
        "basePrompt": "masterpiece ornate Victorian monogram, a highly detailed and intricate script initial surrounded by elaborate, swirling flourishes and filigree, antique and romantic aesthetic, on a deep green background",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, minimal, realistic, simple, casual, complex background"
      },
      {
        "name": "Gradient Modern",
        "basePrompt": "masterpiece modern gradient monogram, a clean geometric letter filled with a smooth, vibrant color transition (e.g., blue to purple), contemporary tech branding, on a light grey solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "vintage, ornate, realistic, flat color, traditional, complex background"
      },
      {
        "name": "Tech Circuit",
        "basePrompt": "masterpiece tech circuit monogram, an initial formed by glowing, futuristic circuit board traces and nodes, digital and cyberpunk aesthetic, on a dark, solid background, high-tech branding",
        "aspectRatio": "1:1",
        "negativePrompt": "organic, vintage, realistic, soft, traditional, complex background"
      },

      {
        "name": "Gothic Blackletter",
        "basePrompt": "masterpiece Gothic blackletter monogram, a traditional, calligraphic initial with ornate, medieval details, dark and historical aesthetic, on a parchment-textured or solid dark background",
        "aspectRatio": "1:1",
        "negativePrompt": "modern, minimal, futuristic, bright colors, simple, complex background"
      },
      {
        "name": "Modern Abstract",
        "basePrompt": "masterpiece modern abstract monogram, an initial deconstructed into minimalist geometric shapes and lines, contemporary and artistic branding, on a clean, solid white background",
        "aspectRatio": "1:1",
        "negativePrompt": "ornate, traditional, realistic, vintage, complex, complex background"
      },
      {
        "name": "Royal Gold",
        "basePrompt": "masterpiece royal gold monogram, a prestigious serif initial with a realistic embossed gold texture and bevel, luxury and regal aesthetic, on a rich, velvet red solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "casual, modern, cheap, simple, colorful, complex background"
      },
      {
        "name": "Eco-Friendly Leaf",
        "basePrompt": "masterpiece eco-friendly monogram, a letter formed by or integrated with green, detailed leaves, symbolizing nature and sustainability, on a clean, solid white background, natural branding",
        "aspectRatio": "1:1",
        "negativePrompt": "industrial, metallic, dark, geometric, realistic, complex background"
      },
      {
        "name": "Industrial Steel",
        "basePrompt": "masterpiece industrial steel monogram, a bold, sans-serif initial with a brushed metal texture and visible rivets, rugged and masculine aesthetic, on a dark grey, solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "soft, organic, colorful, elegant, delicate, complex background"
      },
      {
        "name": "Cosmic Nebula",
        "basePrompt": "masterpiece cosmic nebula monogram, an initial filled with a vibrant, colorful galaxy and starfield, ethereal and celestial space aesthetic, on a dark, solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "flat, simple, realistic, daylight, monochrome, complex background"
      },
      {
        "name": "Minimalist Line",
        "basePrompt": "masterpiece minimalist line monogram, an initial elegantly formed from a single, continuous, uniform-weight line, modern and sophisticated branding, on a solid white background",
        "aspectRatio": "1:1",
        "negativePrompt": "complex, ornate, realistic, colorful, bold, complex background"
      },
      {
        "name": "Pop Art",
        "basePrompt": "masterpiece Pop Art monogram, a bold initial with a vibrant color scheme, thick black outlines, and Ben-Day dot patterns, inspired by Andy Warhol and Roy Lichtenstein, playful and energetic, on a bright solid background",
        "aspectRatio": "1:1",
        "negativePrompt": "minimal, muted, realistic, serious, elegant, complex background"
      }
    ]
  }
];
