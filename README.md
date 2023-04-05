# Random Planets

*The territory of the **Intergalactic Federation** is vast, and it's worlds uncountable. This program was built to provide the latest geographic and economic data of each inhabited world within its borders.*

https://planets-generator.vercel.app/

### About

This is a small tech demo utilizing three.js and custom GLSL shaders to randomly generate planets. Additionally, some filler information is randomly generated to accompany the planet.

The scene consists of four distinct mesh elements
- Space
- Planet base layer
- Planet landmass layer
- Planet cloud layer (optional)

Each element has its own GLSL shader that determines its appearance. Depending on the type of planet, there may be variations in the shader behavior, such as color scheme, and cloud density. The planet shaders utilize [Fractal Brownian Motion](https://thebookofshaders.com/13/) to generate the 'topography' before it is colored. 

### Getting Started
This can simply be ran locally with `yarn && yarn dev` and will be avaliable at http://localhost:5173/

### Extending Behavior
There are currently 11 types of planets that can be generated. The range of avaialble planets can be extended by creating new type functions `planet-types.ts` in that return all of the necessary information consumed by the planet builder. This info includes things like color scheme, and number ranges for randomly generating filler information.

### Credit
- The space sprite and shaders come primarily from this three.js [particle example](https://threejs.org/examples/?q=points#webgl_custom_attributes_points), heavily modified.
- Many of the low level GLSL shared helper functions defined in `/src/shaders/helpers.ts` come from this collection of [noise algorithms](https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83).
- The landmass and cloud shaders include code from [Pixel Planets](https://github.com/Deep-Fold/PixelPlanets), heavily modified for 3D.
- Planet names come from the human planet namelist from Stellaris, a Sci-Fi strategy game.



### Possible Planet Types
| Preview     |    Type       |
|-------------|---------------|
|![Temperate](/images/temperate.png) | Temperate |
|![Tropical](/images/tropical.png) | Tropical |
|![Desert](/images/desert.png) | Desert |
|![Ocean](/images/ocean.png) | Ocean |
|![Snowy](/images/snowy.png) | Arctic |
|![Frozen](/images/frozen.png) | Frozen |
|![Moon](/images/moon.png) | Barren |
|![Mineral](/images/mineral.png) | Mineral |
|![Swamp](/images/swamp.png) | Swamp |
|![Toxic](/images/toxic.png) | Toxic |
|![Volcanic](/images/volcanic.png) | Volcanic |

