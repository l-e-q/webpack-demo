import _ from 'lodash';
import my_name from './myName';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.textContent = my_name('Cody');
    return element;
}

document.body.appendChild(component());