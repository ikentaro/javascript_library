import bisection   from './solver/bisection.js'
import newton      from './solver/newton.js'

import bairstow    from './solver/bairstow.js'
import dka         from './solver/dka.js'

const solver={
    bisection: bisection,
    newton: newton,

    bairstow: bairstow,
    dka:      dka,

};

export default solver;
