const passwordOutput = document.getElementById('passwordOutput');
const copyBtn = document.getElementById('copyBtn');
const generateBtn = document.getElementById('generateBtn');

const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const excludeDuplicate = document.getElementById('excludeDuplicate');
const includeSpaces = document.getElementById('includeSpaces');

const characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*'
};

function generatePassword() {
    let staticPassword = '';
    let randomPassword = '';
    let excludeDuplicateCount = false;
    
    if(!lowercase.checked && !uppercase.checked && !numbers.checked && !symbols.checked) {
        alert('Please select at least one option');
        return;
    }

    if(lowercase.checked) staticPassword += characters.lowercase;
    if(uppercase.checked) staticPassword += characters.uppercase;
    if(numbers.checked) staticPassword += characters.numbers;
    if(symbols.checked) staticPassword += characters.symbols;
    if(includeSpaces.checked) staticPassword += '  ';

    for(let i = 0; i < 12; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if(excludeDuplicate.checked) {
            if(!randomPassword.includes(randomChar) || randomChar == " ") {
                randomPassword += randomChar;
            } else {
                i--;
            }
        } else {
            randomPassword += randomChar;
        }
    }
    
    passwordOutput.value = randomPassword;
}

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordOutput.value);
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
        copyBtn.textContent = 'Copy';
    }, 1500);
});

generateBtn.addEventListener('click', generatePassword);

// Generate a password when the page loads
generatePassword();