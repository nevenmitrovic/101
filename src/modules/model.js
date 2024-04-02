import { view } from "./view.js";

export const model = (() => {

    const currentPoints = [];
    const totalPoints = [];

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
        }
    }
})();