let button = document.querySelector('#createButton');
let create = function()
{
    let story = document.querySelector('#yourStory');
    let noun = document.querySelector('#noun').value;
    let verb = document.querySelector('#verb').value;
    let adjective = document.querySelector('#adj').value;
    let noun2 = document.querySelector('#noun2').value;
    let place = document.querySelector('#place').value;
    let food = document.querySelector('#food').value;
    let name = document.querySelector('#name').value;
    let adjective2 = document.querySelector('#adj2').value;
    story.innerHTML =
    'There once was a ' + noun + ' who really wanted to ' + verb + '. ' + ' One day while walking in the woods, they found a '
    + adjective + ' ' + noun2 + '. ' + 'They decided to take it back to ' + place + '. ' +
    'When they returned home, they were surprised to find ' + food + ' sitting on the dinner table. ' +
    'The rest of the afternoon involved hanging out with ' + name + '. ' + 
    'It turned out to be a ' + adjective2 + ' day.'
    
};

button.addEventListener('click', create);
