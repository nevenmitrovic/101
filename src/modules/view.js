export const view = (() => {

    const elements = {
        inputOne: '#username1',
        inputTwo: '#username2',
        submit: '.submit',
        userOneNick: '.usernameOne',
        userTwoNick: '.usernameTwo',
        userOneTotal: '.pointsOne',
        userTwoTotal: '.pointsTwo',
        img: '.dice',
        start: '.play',
        stop: '.stop',
        currentPoints: '.current',
        dialog: '.dialog',
        userOneBorder: '.player1',
        userTwoBorder: '.player2',
        firstPointDialog: '.firstPointDialog',
        FirstPointUser: '.name',
        ok: '.ok',
        winnerDialog: '.winner',
        winner: '.userWinner'
    };

    return {
        getElements: () => elements,
        getInputOneValue: () => document.querySelector(elements.inputOne).value,
        getInputTwoValue: () => document.querySelector(elements.inputTwo).value,
        setImg: (number) => {
            document.querySelector(elements.img).innerHTML = `
                <img src="src/assets/img/${number}.png" alt="dice">
            `;
        },
        setCurrentPoints: (currentPoints) => {
            document.querySelector(elements.currentPoints).textContent = currentPoints;
        },
        setTotalPoints: (user) => {
            if (user.id === 1) {
                document.querySelector(elements.userOneTotal).textContent = user.value;
            }
            else {
                document.querySelector(elements.userTwoTotal).textContent = user.value;
            }
        },
        firstPointDialog: (name) => {
            document.querySelector(elements.firstPointDialog).classList.remove("visibility");
            document.querySelector(elements.FirstPointUser).textContent = `${name}`;
        },
        dialogVisibility: () => {
            document.querySelector(view.getElements().dialog).classList.add("hidden");
        },
        addNicknames: (nicknames) => {
            const userOne = nicknames.find(e => e.id === 1);
            const userTwo = nicknames.find(e => e.id === 2);
            document.querySelector(view.getElements().userOneNick).textContent = userOne.nick === '' ? 'Player 1' : userOne.nick;
            document.querySelector(view.getElements().userTwoNick).textContent = userTwo.nick === '' ? 'Player 2' : userTwo.nick;
        },
        openWinner: (nick) => {
            document.querySelector(elements.winnerDialog).classList.remove("visibility");
            document.querySelector(elements.winner).textContent = `${nick}`;
        },
        stopVisibility: () => {
            document.querySelector(elements.stop).classList.remove("visibility");
        }
    }

})();

