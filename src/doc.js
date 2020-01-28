import get    from './doc/get.js'
import table  from './doc/table.js'
import create from './doc/create.js'
import createSelect from './doc/createSelect.js'

const doc={
    get:    get,
    create: create,
    createSelect: createSelect,
    table: table,
}

window.doc=window.doc || doc;

if( doc===window.doc ) console.log('>>>>> doc Module Loaded <<<<<'); 


