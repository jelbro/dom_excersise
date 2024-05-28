const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.textContent = "Hey I'm red!";

container.appendChild(paragraph);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

const div = document.createElement('div');

div.style['borderStyle'] = 'solid';
div.style.borderColor = 'black';
div.style['backgroundColor'] = 'pink';

const div_h1 = document.createElement('h1');

div_h1.textContent = "I'm in a div";

div.appendChild(div_h1);

const div_p = document.createElement('p');

div_p.textContent = 'ME TOO!';

div.appendChild(div_p);

container.appendChild(div);
