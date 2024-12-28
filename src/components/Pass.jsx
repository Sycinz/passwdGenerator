import { useState } from "react"

const passGenerate = (length, numbers, symbols, result, setResult) => {
    const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "0123456789";
    const sym = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = alpha;
    let password = "";

    // Ensure at least one number and one symbol
    if (numbers) {
        characters += num;
        password += num[Math.floor(Math.random() * num.length)];
        length--;
    }
    if (symbols) {
        characters += sym;
        password += sym[Math.floor(Math.random() * sym.length)];
        length--;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    // Shuffle the password to ensure randomness
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    setResult(password);
}

export default passGenerate;