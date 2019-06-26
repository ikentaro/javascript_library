import scene    from './config/scene.js'
import renderer from './config/renderer.js'
import set      from './config/set.js'

const config={
    scene:    scene,
    renderer: renderer,
    camera:   null,
    html:     null,

    set: function(obj){ set(this, obj); }
}

export default config;
