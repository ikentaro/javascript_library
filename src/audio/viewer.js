import baseLatency   from './viewer/baseLatency.js'
import outputLatency from './viewer/outputLatency.js'
import currentTime   from './viewer/currentTime.js'
import state from './viewer/state.js'

const viewer={
    baseLatency:   baseLatency,
    outputLatency: outputLatency,
    currentTime:   currentTime,
    state: state,
};

export default viewer;
