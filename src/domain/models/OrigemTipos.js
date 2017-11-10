export const REDE_SOCIAL = genOrigemTipo(1, "REDE_SOCIAL", "Rede Social");
export const EVENTO = genOrigemTipo(2, "EVENTO", "Evento");
export const MARKETING = genOrigemTipo(3, "MARKETING", "Marketing");

const genOrigemTipo = (id, chave, descricao) => ({
  id,
  chave,
  descricao
});
