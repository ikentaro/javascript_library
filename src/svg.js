import config from './svg/config.js'
import dump   from './svg/dump.js'
import graph  from './svg/graph.js'
import hist   from './svg/hist.js'

window.svg=window.svg || {
    config: config,
    graph: graph,
    dump: dump,
    hist: hist,
}

console.log('===== svg module print =====');
console.log(window.svg);
