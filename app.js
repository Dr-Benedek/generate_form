import { renderField } from './field.js';

let app = document.getElementById('app');
let globalState = {};

let field1 = renderField({
    state: globalState,
    id: 'text1',
    type: 'text',
    label: 'Text Field',
    labelOnTop: true
});

let field2 = renderField({
    state: globalState,
    id: 'number',
    type: 'number',
    label: 'Number Field'
});

let field3 = renderField({
    state: globalState,
    id: 'email',
    type: 'email',
    label: 'Email Field',
    labelOnTop: true
});

app.appendChild(field1);
app.appendChild(field2);
app.appendChild(field3);