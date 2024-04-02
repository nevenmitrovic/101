export const controllers = (view, model) => {
    
    const listeners = () => {
        document.querySelector(view.getElements().submit).addEventListener('click',setNicknames);
    }

    function setNicknames() {
        const nicknames = model.addNicknames();
        const userOne = nicknames.find(e => e.id === 1);
        const userTwo = nicknames.find(e => e.id === 2);
        document.querySelector(view.getElements().userOneNick).textContent = userOne.nick === '' ? 'Player 1' : userOne.nick;
        document.querySelector(view.getElements().userTwoNick).textContent = userTwo.nick === '' ? 'Player 1' : userTwo.nick;
        document.querySelector(view.getElements().dialog).classList.add("hidden");
    }

    return {
        setListeners: () => {
            listeners();
        }
    }
}