const INITIAL_STATE = {
  teams: [],
  carregando: false,
  error: false
};

export default function buscaTeam(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "BUSCA_TEAM_INICIO":
      return {
        carregando: true,
        teams: [],
        error: false
      };
    case "BUSCA_TEAM_SUCSSO":
      return {
        carregando: false,
        teams: action.teams,
        error: false
      };
    case "BUSCA_TEAM_ERRO":
      return {
        carregando: false,
        teams: [],
        error: true
      };
    default:
      return state;
  }
}
