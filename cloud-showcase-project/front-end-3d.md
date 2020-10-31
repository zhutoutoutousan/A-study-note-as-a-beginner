# Current top priority task
- Workflow instantiation
  - Get familiar with three.js
    - [ ] Assets loading
      - [ ] fbx
  - Draw a sphere using Blender and import it to three.js

# Accesory study progress track
- Three.js fundamentals
  - [link](https://threejsfundamentals.org/)
  - [threejs - scenegraph](https://threejsfundamentals.org/threejs/lessons/threejs-scenegraph.html)
    - Progress: Check the file 
    - File: `scenegraph-practice`(code-playground)
- Discover three.js
  - [link](https://discoverthreejs.com/)
- Service side rendering
  - [Introduction to NuxtJS - Nested and dynamic pages, layouts, asyncData + axios, meta tags, and VueX](https://www.youtube.com/watch?v=NS0io3Z75GI)
- Three.js learn from Chrome DevTools
  - A lot of examples can be learned from the Google Chrome DevTools
- 3D Programming Fundamentals C++
  - [Entry](https://www.youtube.com/watch?v=uehGqieEbus&list=PLqCJpWy5Fohe8ucwhksiv9hTF5sfid8lA)
    - Process(Stupid process to understand faceculling)
      - Tutorial 6
        - Progress: 18:07/35:17
- [Explaining basic 3D theory - MDN](https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_on_the_web/Basic_theory)
# Agile development
- Boilerplate
  - [vue-threejs](https://github.com/fritx/vue-threejs)
  - [react-threejs](https://github.com/fritx/react-threejs)
- 3D design framework
  - nunuStudio
# Interface 
- Higher level tools
  - [nunuStudio](https://github.com/tentone/nunuStudio)
- 3D render library
  - AR.JS
  - Unity/Unreal
  - babylon.js
  - Playcanvas
  - A-frame
    - Toy-level, not suitable
    - You can use all your three.js knowledge to create objects, and use aframe to handle the life cycle and interactions to have a good experience in VR.
  - three.js
    - Examples
      - [Tank](https://codepen.io/pen/?&editable=true&editors=101=https%3A%2F%2Fthreejsfundamentals.org%2F)
    - Editor
      - [editor source code](https://github.com/mrdoob/three.js/tree/master/editor)
      - [Editor](https://threejs.org/editor/)
    - Guide progress track
- Format converter
  - [Free online GLB to OBJ Converter](https://products.aspose.app/3d/conversion/glb-to-obj)
  - There are a lot of useful format converters, exporters in the `three.js/util`
# Performance issues

- Manifestation
  - Developer side
    - 3D Model designers suffers from the long loading time when rendering to see the effects
      - The services like cloud rendering doesn't seem to be possible any time soon.
      - Some more high-end hardware doens't seem to be possible for the current business model
  - Client side
- Stats.js -- Mrdoob
## Adjustment
- Top level
  - 1
- Tech level
  - Possible useful methods
    - `renderer.setPixelRatio( window.devicePixelRatio )`
## Posts
- [Three.js: ways to reduce file size of models? - Stack Overflow](https://stackoverflow.com/questions/45144656/three-js-ways-to-reduce-file-size-of-models#:~:text=The%20OBJ%20file%20is%20around,JSON%20file%20is%20almost%20100mb.)
- [Loading Big .Obj file about 300 Mb will crash te browser and take much time to load](https://discourse.threejs.org/t/loading-big-obj-file-about-300-mb-will-crash-te-browser-and-take-much-time-to-load/1401)
- [Reduce .STL or .OBJ File Size Using Blender](https://www.youtube.com/watch?v=lcTDBJt9MfE)
  - Problem: Imported file too big
## Tools
- [obj simplify - github](https://github.com/jonnenauha/obj-simplify)
- [Blender three.js json file output](https://github.com/repsac/io_three)
- There are a lot of useful format converters, exporters in the `three.js/util`

# Features showcase
## Movement
### First person
- See `code-playground`
### Fly
- See `code-playground`
## Collision detection
- [How to detect collision in three.js?](https://stackoverflow.com/questions/11473755/how-to-detect-collision-in-three-js)
## VR
- [WebXR](https://mixedreality.mozilla.org/hello-webxr/)

# 3D Model
- Blender

# Control panel
- Google: dat.GUI
  - [Source code](https://github.com/dataarts/dat.gui)
- Control
  - [First person shooter game](https://codepen.io/viniciusSouza/pen/gOPVmKV)
  - [Fly control](https://threejs.org/examples/misc_controls_fly.html)
# Artistic modification



# Tools
## Format converter
- [FBX2glTF](https://github.com/facebookincubator/FBX2glTF)
  - [Instruction](https://developers.facebook.com/docs/sharing/3d-posts/glb-tutorials/#convert-from-fbx)
  - Why won't Windows Powershell work
## Shader
- [Shadertoy](https://www.shadertoy.com/)

# Useful Resource
## 3D model
- I want to get some free 3d Models
  - [Clara](https://clara.io/)