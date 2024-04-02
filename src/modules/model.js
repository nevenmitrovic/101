import { view } from "./view.js";

export const model = (() => {
    
    let currentPoints = 0;
    let users = {
        userOne: {
            totalPoints: 0,
            firstPoint: null,
            flag: 0
        },
        userTwo: {
            totalPoints: 0,
            firstPoint: null,
            flag: 0
        }
    };

    return {
        addNicknames: () => {
            const nicknames = [
                {
                    id: 1,
                    nick: view.getInputOneValue()
                },
                {
                    id: 2,
                    nick: view.getInputTwoValue()
                }
            ];
            return nicknames;
        },
        getCurrentPoints: (number) => {
            if (number === 1) {
                currentPoints = 0;
            }
            else if (number === 6) {
                currentPoints *= 2;
            }
            else {
                currentPoints += number;
            }
            return currentPoints;
        },
        resetCurrentPoints: () => {
            currentPoints = 0;
        },
        getFirstPoints: () => {
            let firstPoints = [
            {
                id: 1, value: users.userOne.firstPoint
            },
            {
                id: 2, value: users.userTwo.firstPoint
            }
            ];
            return firstPoints;
        },
        setUserOneFirstPoint: (number) => {
            users.userOne.firstPoint = number;
        },
        setUserTwoFirstPoint: (number) => {
            users.userTwo.firstPoint = number;
        },
        setFirstPointUser: () => {
            if (users.userOne.firstPoint > users.userTwo.firstPoint) {
                users.userOne.flag = 1;
                return view.getElements().inputOne ? 'Player 1' : view.getElements().inputOne;
            }
            else {
                users.userTwo.flag = 1;
                return view.getElements().inputTwo ? 'Player 2' : view.getElements().inputTwo;
            }
        }
    }
})();