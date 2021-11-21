const isEven = (number) => {
    return (number % 2) === 0;
}

const generateRandomNumber = (min, max) => {
    return Math.round(Math.random() *(max - min) + min);
};

const game = () => {
    const number = generateRandomNumber(1,10000);
    let correctAnswer;

    if (isEven(number)) {
    correctAnswer = 'да';
    } else {
    correctAnswer = 'нет';
    }
    const answer = prompt(`Является ли число ${number} четным?`);
    if (answer === correctAnswer) {
    alert(`Ответ правильный!`);
    return true;
    } else {
    alert(`Ответ не правильный! Правильный ответ ${correctAnswer}`);
    return false;
    }
}

const roundsGame = () => {
    for (let i = 0; i < 3; i += 1) {
    const isSuccess = game();
    if (!isSuccess) {
        alert('Игра окончена, вы проиграли!')
        } 
    }
    alert('Вы выиграли!!!')
}
