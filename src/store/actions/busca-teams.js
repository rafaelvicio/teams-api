import fakeAPI from "../../api/fake";

export const buscaTeamInicio = () => {
  return {
    type: "BUSCA_TEAM_INICIO",
    carregando: true,
    error: false
  };
};

export const buscaTeamSucesso = teams => {
  return {
    type: "BUSCA_TEAM_SUCSSO",
    teams: teams,
    carregando: false,
    error: false
  };
};

export const buscaTeamErro = erro => {
  return {
    type: "BUSCA_TEAM_ERRO",
    carregando: false,
    error: true
  };
};

export const buscaTeam = () => {
  return dispatch => {
    dispatch(buscaTeamInicio());
    fakeAPI
      .get("/5bfe063f31000064002cfb96")
      .then(data => {
        dispatch(buscaTeamSucesso(data.data))
      }
        )
      .catch(erro => {
        dispatch(buscaTeamErro(erro)) 
      });
  };
};
