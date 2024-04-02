export const view = (() => {

    const elements = {
        inputOne: '#username1',
        inputTwo: '#username2',
        submit: '.submit',
        userOneNick: '.usernameOne',
        userTwoNick: '.usernameTwo',
        userOneTotal: '.pointsOne',
        userTwoTotal: '.pointsTwo',
        img: '.image',
        start: '.play',
        stop: '.stop',
        currentPoints: '.current',
        dialog: '.dialog'
    };

    return {
        getElements: () => elements,
        getInputOneValue: () => document.querySelector(elements.inputOne).value,
        getInputTwoValue: () => document.querySelector(elements.inputTwo).value,
    }

})();

