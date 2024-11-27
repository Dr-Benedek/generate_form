import { renderField } from './field.js';

let app = document.getElementById('app')

let globalState = {};

let field1 = renderField({
    state: globalState,
    id: 'text1',
    type: 'text'
});

let field2 = renderField({
    state: globalState,
    id: 'number',
    type: 'number'
});

let field3 = renderField({
    state: globalState,
    id: 'email',
    type: 'email'
});

app.appendChild(field1);
app.appendChild(field2);
app.appendChild(field3);