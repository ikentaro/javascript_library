import create from '../../create.js'

const td=(array)=>{
    const tr=document.createElement('tr');
    array.forEach(a=>{
	const td=create('td', a);
	tr.append(td);
    });
    return tr;
}

export default td;
