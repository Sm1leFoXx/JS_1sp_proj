const isEven = (number) => {
    return (number % 2) === 0;
}

const generateRandomNumber = (min, max) => {
    return Math.round(Math.random() *(max - min) + min);
};

const game = () => {
    const number = generateRandomNumber(1,100);
    let correctAnswer;

    if (isEven(number)) {
    correctAnswer = 'да';
    correctAnswer = 'Да';
    } else {
    correctAnswer = 'нет';
    }
    const answer = prompt(`Является ли число ${number} четным?`);
    if (answer === correctAnswer) {
    alert(`Ответ правильный!`);
    } else {
    alert(`Ответ не правильный! Правильный ответ ${correctAnswer}`);
    }
};
