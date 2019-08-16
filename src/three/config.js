import scene    from './config/scene.js'
import renderer from './config/renderer.js'
import set      from './config/set.js'
import dump     from './config/dump.js'

const config={
    scene:    scene,
    renderer: renderer,
    camera:   null,
    html:     null,

    set: (obj)=>{ set(config, obj); },
    dump: ()=>{ dump(config); }
}

export default config;
