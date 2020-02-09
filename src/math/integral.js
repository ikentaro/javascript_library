import trapezoid from './integral/trapezoid.js'
import simpson   from './integral/simpson.js'
import de from './integral/de.js'

const integral={
    trapezoid: trapezoid,
    simpson: simpson,
    // double exponential
    de: de,
};

export default integral;
