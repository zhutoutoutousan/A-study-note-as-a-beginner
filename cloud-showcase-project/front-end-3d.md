# Table of Contents
- [Table of Contents](#table-of-contents)
- [New 3D possibilities](#new-3d-possibilities)
  - [Panorama](#panorama)
- [Workflow and teamplay](#workflow-and-teamplay)
- [Methodology overview](#methodology-overview)
  - [Cocos Creator](#cocos-creator)
  - [Unity 3D](#unity-3d)
    - [Tutorial](#tutorial)
    - [Browser---In-game Communication](#browser---in-game-communication)
  - [Panorama](#panorama-1)
    - [Krpano](#krpano)
    - [tpanorama](#tpanorama)
      - [Tutorials](#tutorials)
  - [three.js](#threejs)
    - [Tutorial](#tutorial-1)
- [Project architecture](#project-architecture)
- [Agile development](#agile-development)
- [Interface](#interface)
- [Functions](#functions)
  - [Video](#video)
  - [Tour](#tour)
- [Performance issues](#performance-issues)
  - [Adjustment](#adjustment)
  - [Posts](#posts)
  - [Tools](#tools)
- [Features showcase](#features-showcase)
  - [Movement](#movement)
    - [First person](#first-person)
    - [Fly](#fly)
  - [Collision detection](#collision-detection)
  - [VR](#vr)
- [3D Model](#3d-model)
- [Control panel](#control-panel)
- [Artistic modification](#artistic-modification)
- [Tools](#tools-1)
  - [Format converter](#format-converter)
  - [Shader](#shader)
- [Useful Resource](#useful-resource)
  - [3D model](#3d-model-1)


# New 3D possibilities

## Panorama
- [Tutorial](https://www.youtube.com/watch?v=HtwXJR9uaHU&list=PLOE4AXLr4CPheIXvz4KqLjdg-4ZWJf39P&index=2)
- [Krpano - Sterio 3D](https://krpano.com/releases/1.20.9/viewer/krpano.html?xml=examples/depthmap/depthmap-textured/test.xml)
- [Krpano - Moving elements](https://krpano.com/releases/1.20.9/viewer/krpano.html?xml=examples/webvr-drone-attack/drone-attack.xml&html5=only+webgl)
- [Blender to krpano workflow](https://www.youtube.com/watch?v=A2hk0FLNqYo&list=PLURjB7qnN5eP6BnkZgJyKXKNecB9nozZC&index=6)
# Workflow and teamplay
- [3D动画怎么做？3D动画制作流程是怎么样的？](https://zhuanlan.zhihu.com/p/144272725)

# Methodology overview
## Cocos Creator
- [cocos](https://github.com/cocos-creator)
  - 根据Cocos的技术开发手册，愚总结cocos有三个特点： 1, 适应中国互联网及商业生态环境（接地气: 见https://docs.cocos.com/creator/manual/zh/publish/) 2. 重要技术栈来自开源社区（双刃剑） 3. 具有完整的游戏开发功能（五脏俱全）
## Unity 3D
### Tutorial
- [Tutorial](https://www.youtube.com/watch?v=Sqb-Ue7wpsI&t=302s)
- [Simmer - Quick prototyping](https://simmer.io/)
- [Unity-3D-FPS-Demo](https://github.com/dantheman213/Unity-3D-FPS-Demo)
### Browser---In-game Communication
- [How to Send Data to Unity WebGL from Javascript or PHP](https://www.youtube.com/watch?v=L03EBBixFxw)
## Panorama
### Krpano
- [Krpano - Depthmap](https://krpano.com/releases/1.20.9/viewer/krpano.html?xml=examples/depthmap/gravina-apartment-tour/main2.xml)
### tpanorama
#### Tutorials
- [After reading this, you can also implement a 360-degree panoramic plug-in.](https://developpaper.com/after-reading-this-you-can-also-implement-a-360-degree-panoramic-plug-in/)
- [tpanorama](https://github.com/ConardLi/tpanorama)
## three.js
- Tutorial
  - [用 Three.js 來當個創世神 (30)：總結與心得](https://ithelp.ithome.com.tw/articles/10209169)
  - [Three.js WebGL Game Jamir - 8 minute gameplay](https://www.youtube.com/watch?v=JeJQB1iE9X0)
    - [Game](http://jamir.io/en)
- asfd
- [Dualuniverse](https://www.dualuniverse.game/)
### Tutorial
- Resource

# Project architecture
- [How to organize your Three.js code in a cleaner way](https://medium.com/@soffritti.pierfrancesco/how-to-organize-the-structure-of-a-three-js-project-77649f58fa3f)
# Agile development
- Boilerplate
  - [vue-threejs](https://github.com/fritx/vue-threejs)
  - [react-threejs](https://github.com/fritx/react-threejs)
  - [trois.js](https://github.com/troisjs/trois)
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
      - [Tank](https://threejsfundamentals.org/threejs/lessons/threejs-scenegraph.html)
    - Editor
      - [editor source code](https://github.com/mrdoob/three.js/tree/master/editor)
      - [Editor](https://threejs.org/editor/)
    - Guide progress track
- Format converter
  - [Free online GLB to OBJ Converter](https://products.aspose.app/3d/conversion/glb-to-obj)
  - There are a lot of useful format converters, exporters in the `three.js/util`
# Functions
## Video
- [Video resource](https://medium.com/swlh/video-resource-dives-into-3d-world-with-three-js-90541cf99edf)
- [VideoTexture](https://github.com/mrdoob/three.js/blob/master/src/textures/VideoTexture.js)
- [Three.js YouTube player](https://codepen.io/asjas/pen/pWawPm)
## Tour
- PatrolJS
- three-pathfinding
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