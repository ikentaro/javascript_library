import bisection from './solver/bisection.js'
import newton from './solver/newton.js'

const solver={
    bisection: bisection,
    newton: newton,
};

export default solver;
