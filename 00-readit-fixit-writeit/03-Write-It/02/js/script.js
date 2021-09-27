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
for (let i = movies.length - 1; i >= 0; i--) {
  document.write(wrapWithTag(movies[i].toLowerCase(), `li`));
}
document.write(`</ul>`);
