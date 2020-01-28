import config from './svg/config.js'
import dump   from './svg/dump.js'
import graph  from './svg/graph.js'
import hist   from './svg/hist.js'

const svg={
    config: config,
    graph: graph,
    dump: dump,
    hist: hist,
};

window.svg=window.svg || svg;

if( window.svg===svg ) console.log('>>>>> svg module Loaded <<<<<');

