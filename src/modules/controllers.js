import { setNicknames, Start, Stop, Hide } from "./methods/methods.js";


export const controllers = (view) => {
    
    const listeners = () => {
        document.querySelector(view.getElements().submit).addEventListener('click', setNicknames);
        document.querySelector(view.getElements().start).addEventListener('click', Start);
        document.querySelector(view.getElements().stop).addEventListener('click', Stop);
        document.querySelector(view.getElements().ok).addEventListener('click', Hide);
    }

    return {
        setListeners: () => {
            listeners();
        }
    }
}