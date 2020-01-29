const th=(array)=>{
    const tr=document.createElement('tr');
    array.forEach(a=>{
        const th=document.createElement('th');
        th.innerHTML=a;
        tr.appendChild(th);
    });
    return tr;
}

export default th;
