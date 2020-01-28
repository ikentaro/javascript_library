import property from './set/property.js'
import style    from './set/style.js'

const set={
    property: property,
    value: (elem, func, isExec=false)=>{ property(elem, func, isExec); },
}

export default set;
