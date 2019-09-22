window.doc=window.doc || {
    create: (tag)=>{ document.createElement(tag) },
}

console.log('===== doc module print =====');
console.log(window.doc);
