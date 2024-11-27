export function renderField({ state, id, type }) {
    let inputElement = null;
    switch (type) {
        case 'text':
            inputElement = renderText();
            break;
        case 'number':
            inputElement = renderNumber();
            break;
        case 'email':
            inputElement = renderEmail(id, state);
            break;
        default:
           inputElement = renderDefault();
    }
    
    inputElement.value = state[id] || "";

    if (type != "email"){
        inputElement.addEventListener('input', (event) => {
            state[id] = event.target.value;
            console.log('Current state:', JSON.stringify(state));
        });
    }

    return inputElement;
}

function renderText() {
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    return inputElement;
}

function renderNumber() {
    const inputElement = document.createElement('input');
    inputElement.type = 'number';
    return inputElement;
}

function renderEmail(id, state) {
    const emailWrapper = document.createElement('div');

    const part1 = document.createElement('input');
    part1.type = 'text';    
    const atSymbol = document.createElement('span');
    atSymbol.textContent = '@';

    const part2 = document.createElement('input');
    part2.type = 'text';

    emailWrapper.appendChild(part1);
    emailWrapper.appendChild(atSymbol);
    emailWrapper.appendChild(part2);

    const updateEmailState = () => {
        state[id] = `${part1.value}@${part2.value}`;
        console.log('Current state:', JSON.stringify(state));
    };

    part1.addEventListener('input', updateEmailState);
    part2.addEventListener('input', updateEmailState);

    return emailWrapper;
}

function renderDefault() {
    const defaultDiv = document.createElement('div');
    return defaultDiv;
}
