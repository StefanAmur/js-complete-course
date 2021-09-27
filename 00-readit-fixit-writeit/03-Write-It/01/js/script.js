const movies = [
  'GATE TO HEAVEN',
  'TOUT S’EST BIEN PASSÉ',
  'HERSELF',
  'DUNE',
  'DÉLICIEUX',
  'BENEDETTA',
  'RESPECT',
  'TITANE',
  'GIVE ME LIBERTY',
  'UNE VIE DÉMENTE',
  'PAW PATROL: DE FILM',
  'WOLFWALKERS',
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

document.write(`<ul>`);
movies.forEach((movie) => document.write(wrapWithTag(movie, `li`)));
document.write(`</ul>`);
