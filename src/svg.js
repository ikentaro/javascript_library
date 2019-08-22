import config from './svg/config.js'
import dump   from './svg/dump.js'
import graph  from './svg/graph.js'

window.svg=window.svg || {
    config: config,
    graph: graph,
    dump: dump,
}

console.log('===== svg module print =====');
console.log(window.svg);
