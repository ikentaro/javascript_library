import create from './create.js'

const createSelect=(options=[])=>{
    const select=document.createElement('select');
    for( const a of options ){
	if( typeof a ==='string' || typeof a==='number' ){
	    const option=create('option', { innerHTML: a });
	    select.appendChild(option);
	}
	else if( typeof a ==='object' ){
	    select.appendChild(create('option', a));
	}
    }
    return select;
}

export default createSelect;
