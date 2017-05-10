export const NEW_GAME = 'NEW_GAME';
export const NewGame = () => ({
    type: NEW_GAME,
  correctAnswer: Math.round(Math.random() * 100)
});

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const ToggleModal = () => ({
    type: TOGGLE_MODAL
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const MakeGuess = (guess) => ({
    type: MAKE_GUESS,
  guess
});
