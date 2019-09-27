# JavaScript Library for Browser

## Depndency
Please refer package.json.  
External library use as below in HTML file.
```
<script src="node_modules/node_modules/three/build/three.min.js"></scirp>
<script src="node_modules/snapsvg/dist/snap.svg-min.js"></script>
```
or use CDN.

## How to use
Only read in HTML file.  
Transpile do below `$ yarn run dev` or `$ yarn run pro`

## Notation 
In this library, module name or (method) function name match directory or file name, respectively.

## Modules
This library includes below modules

### Audio module
This module is WebAudioAPI utility.  
WebAudioAPI is API near very low level, so this is not user friendly.  
For that reason, I write wrapper library for WebAudioAPI.

### Math module
This module is mathmatiral calculation helper for JavaScript.  
This library includes Complex, Liner Algebra (Vector and Matrix) and numerical differentical and integral.  
and also this library includes some simple solver for non-linear equation and differential equattion.

### SVG module
This module is Graph/Hist utility using Snap.svg.

### 3DCG(WebGL) module
This moudle is three.js wrapper moudle.


## samples
### test.html
Mathmatic library `src/math.js` demonstration.  
Result is dumped at developer tools.

### three_lorentz.html
lorenz atracta is animated by three.js  
lorenz equation was solved by 3rd order Runge-Kutta method.

### audio.html
WebAudioAPI wrapper library sample.  
AnalyzerNode display uses Snap.svg.js  
Music samples uses Creative Common Library

In this page use creative commons by-lisence music ![by-lisence](https://komtmt.files.wordpress.com/2015/04/by.png?w=150&h=52)

## reference
### math module

### audio module
[Web Audio Apps | g200kg Music & Software](https://www.g200kg.com/jp/webaudio/)  
[WEB SOUNDER - Web Audio API 解説](https://weblike-curtaincall.ssl-lolipop.jp/portfolio-web-sounder/)