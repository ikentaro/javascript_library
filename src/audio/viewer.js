import baseLatency   from './viewer/baseLatency.js'
import outputLatency from './viewer/outputLatency.js'
import currentTime   from './viewer/currentTime.js'
import state from './viewer/state.js'
import analyzer from './viewer/analyzer.js'

const viewer={
    baseLatency:   baseLatency,
    outputLatency: outputLatency,
    currentTime:   currentTime,
    state: state,
    analyzer: analyzer,
};

export default viewer;
