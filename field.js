export function renderField({ state, id, type, label, labelOnTop }) {
    let inputElement = null;

    switch (type) {
        case 'text':
            inputElement = renderText(label, labelOnTop);
            break;
        case 'number':
            inputElement = renderNumber(label, labelOnTop);
            break;
        case 'email':
            inputElement = renderEmail(id, state, label, labelOnTop);
            break;
        default:
            inputElement = renderDefault();
    }

    inputElement.querySelector('input').value = state[id] || "";

    if (type !== "email") {
        inputElement.querySelector('input').addEventListener('input', (event) => {
            state[id] = event.target.value;
            console.log('Current state:', JSON.stringify(state));
        });
    }

    return inputElement;
}

function renderText(label, labelOnTop) {
    return createInputElement('text', label, labelOnTop);
}

function renderNumber(label, labelOnTop) {
    return createInputElement('number', label, labelOnTop);
}

function renderEmail(id, state, label, labelOnTop) {
    const emailWrapper = document.createElement('div');
    emailWrapper.className = 'input-field';

    if (label) {
        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        labelElement.style.display = labelOnTop ? 'block' : 'inline';
        emailWrapper.appendChild(labelElement);
    }

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

function createInputElement(type, label, labelOnTop) {
    const wrapper = document.createElement('div');
    wrapper.className = 'input-field';

    if (label) {
        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        labelElement.style.display = labelOnTop ? 'block' : 'inline';
        wrapper.appendChild(labelElement);
    }

    const inputElement = document.createElement('input');
    inputElement.type = type;
    wrapper.appendChild(inputElement);

    return wrapper;
}