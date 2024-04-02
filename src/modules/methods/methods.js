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
    if(firstPoints[0].value === null) {
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
        document.querySelector(view.getElements().userTwoBorder).classList.remove("red");
        view.firstPointDialog(model.setFirstPointUser());
        
    }
}

export const Stop = () => {
    const userOneClassList = document.querySelector(view.getElements().userOneBorder).classList;
    const userTwoClassList = document.querySelector(view.getElements().userTwoBorder).classList;

    userOneClassList.forEach(e => {
        if (e === 'red') {
            userOneClassList.remove("red");
            userTwoClassList.add("red");
        }
        else {
            userOneClassList.add("red");
            userTwoClassList.remove("red");
        }
    });
    model.resetCurrentPoints();
    view.setCurrentPoints(0);

}

export const Hide = () => {
    document.querySelector(view.getElements().firstPointDialog).classList.add("visibility");
    document.querySelector('.currentPoints').classList.remove("visibility");
    view.setCurrentPoints(0);
}
