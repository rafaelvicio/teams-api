const INITIAL_STATE = {
  team: {}
};

export default function detalhaTeam(state = INITIAL_STATE, action) {
  if (action.type === "DETALHA_TEAM") {
    return {
      team: action.team
    };
  } else {
    return state;
  }
}
