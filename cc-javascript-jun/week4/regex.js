let song = `Sometimes all I think about is you
Late nights in the middle of June
Heat waves been faking me out
Can't make you happier now`;

// console.log(song.search(/you/ig));
let newLyrics = song.replace(/You/gi, 'Tems');
// console.log(newLyrics);
// console.log(song[74], song[75], song[76], song[77], song[78]);
// console.log(song.search(/\s/ig));
console.log(/you/ig.exec(song));