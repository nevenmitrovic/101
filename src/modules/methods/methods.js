import { view } from "../view.js";
import { model } from "../model.js";

export const setNicknames = () => {
    const nicknames = model.addNicknames();
    view.addNicknames(nicknames);
    view.dialogVisibility();
};  

export const Start = () => {
    const number = Math.floor((Math.random() * 6) + 1);
    const firstPoints = model.getFirstPoints();
    view.setImg(number);
    view.setCurrentPoints(model.getCurrentPoints(number));
    document.querySelector(view.getElements().img).classList.forEach(e => {
        if (e === 'visibility') {
            document.querySelector(view.getElements().img).classList.remove("visibility");
        }
    });
    if (firstPoints[0].value === null) {
        document.querySelector(view.getElements().userOneBorder).classList.add("red");
        model.setUserOneFirstPoint(number);
        model.resetCurrentPoints();
    }
    else if (firstPoints[1].value === null) {
        document.querySelector(view.getElements().userOneBorder).classList.remove("red");
        document.querySelector(view.getElements().userTwoBorder).classList.add("red");
        model.setUserTwoFirstPoint(number);
        model.resetCurrentPoints();
    }
    else {
        if (model.getUsers().userOne.totalPoints > 101) {
            view.openWinner(view.getInputOneValue() === '' ? 'Player 1' : view.getInputOneValue())
        }
        if (model.getUsers().userTwo.totalPoints > 101) {
            view.openWinner(view.getInputTwoValue() === '' ? 'Player 1' : view.getInputTwoValue())
        }
        document.querySelector(view.getElements().userTwoBorder).classList.remove("red");
        if (model.getUsers().userOne.flag === 0 && model.getUsers().userTwo.flag === 0){
            view.firstPointDialog(model.setFirstPointUser());
            document.querySelector(view.getElements().img).classList.add("visibility");
        }
        if (model.getUsers().userOne.flag === 1) {
            document.querySelector(view.getElements().userOneBorder).classList.add("red");
            document.querySelector(view.getElements().userTwoBorder).classList.remove("red");
            if (number === 1) {
                model.setUserOneTotal(number);
                model.setUserOneFlag(0);
                model.setUserTwoFlag(1);
                view.setTotalPoints({ id: 1, value: model.getUsers().userOne.totalPoints });
            }
            if (number === 6) {
                model.setUserOneTotal(number);
                model.setUserOneFlag(0);
                model.setUserTwoFlag(1);
                view.setTotalPoints({ id: 1, value: model.getUsers().userOne.totalPoints });
                model.resetCurrentPoints();
                if (model.getUsers().userOne.totalPoints > 101) {
                    view.openWinner(view.getInputOneValue() === '' ? 'Player 1' : view.getInputOneValue())
                }
                if (model.getUsers().userTwo.totalPoints > 101) {
                    view.openWinner(view.getInputTwoValue() === '' ? 'Player 1' : view.getInputTwoValue())
                }
            }
        }
        else {
            document.querySelector(view.getElements().userOneBorder).classList.remove("red");
            document.querySelector(view.getElements().userTwoBorder).classList.add("red");
            if (model.getUsers().userOne.totalPoints > 101) {
                view.openWinner(view.getInputOneValue() === '' ? 'Player 1' : view.getInputOneValue())
            }
            if (model.getUsers().userTwo.totalPoints > 101) {
                view.openWinner(view.getInputTwoValue() === '' ? 'Player 1' : view.getInputTwoValue())
            }
            if (number === 1) {
                model.setUserTwoFlag(0);
                model.setUserTwoTotal(number);
                model.setUserOneFlag(1);
                view.setTotalPoints({ id: 2, value: model.getUsers().userTwo.totalPoints });
            }
            if (number === 6) {
                model.setUserTwoFlag(0);
                model.setUserTwoTotal(number);
                model.setUserOneFlag(1);
                view.setTotalPoints({ id: 2, value: model.getUsers().userTwo.totalPoints });
                model.resetCurrentPoints();
                if (model.getUsers().userOne.totalPoints > 101) {
                    view.openWinner(view.getInputOneValue() === '' ? 'Player 1' : view.getInputOneValue())
                }
                if (model.getUsers().userTwo.totalPoints > 101) {
                    view.openWinner(view.getInputTwoValue() === '' ? 'Player 1' : view.getInputTwoValue())
                }
            }
        }
    }
}

export const Stop = () => {
    if (model.getUsers().userOne.flag === 1) {
        document.querySelector(view.getElements().userOneBorder).classList.add("red");
        document.querySelector(view.getElements().userTwoBorder).classList.remove("red");
            model.setUserOneTotal(0);
            model.setUserOneFlag(0);
            model.setUserTwoFlag(1);
            view.setTotalPoints({ id: 1, value: model.getUsers().userOne.totalPoints });
            model.resetCurrentPoints();
    }
    else {
        model.setUserTwoFlag(0);
        model.setUserTwoTotal(0);
        model.setUserOneFlag(1);
        view.setTotalPoints({ id: 2, value: model.getUsers().userTwo.totalPoints });
        model.resetCurrentPoints();
        if (model.getUsers().userOne.totalPoints > 101) {
            view.openWinner(view.getInputOneValue() === '' ? 'Player 1' : view.getInputOneValue())
        }
        if (model.getUsers().userTwo.totalPoints > 101) {
            view.openWinner(view.getInputTwoValue() === '' ? 'Player 1' : view.getInputTwoValue())
        }
    }
}

export const Hide = () => {
    document.querySelector(view.getElements().firstPointDialog).classList.add("visibility");
    document.querySelector('.currentPoints').classList.remove("visibility");
    model.resetCurrentPoints();
    view.setCurrentPoints(0);
    view.stopVisibility();
}
