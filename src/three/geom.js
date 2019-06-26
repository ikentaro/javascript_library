import plane     from './geom/plane.js'
import box       from './geom/box.js'
import sphere    from './geom/sphere.js'
import circle    from './geom/circle.js'
import cube      from './geom/cube.js'
import cylinder  from './geom/cylinder.js'
import torus     from './geom/torus.js'
import torusKnot from './geom/torusKnot.js'
import lathe     from './geom/lathe.js'

const geom={
    plane:     plane,
    box:       box,
    sphere:    sphere,
    circle:    circle,
    cube:      cube,
    torusKnot: torusKnot,
    lathe:     lathe,
}

export default geom;
