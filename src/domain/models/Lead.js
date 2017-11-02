export default class Lead {
  constructor(email, nome, sobrenome, cargo, dataNascimento, decisor) {
    this.nome = nome;
    this.email = email;
    this.sobrenome = sobrenome;
    this.cargo = cargo;
    this.dataNascimento = new Date(dataNascimento.getTime());
  }

  get dataNascimento() {
    return new Date(this.dataNascimento);
  }

  // nome: this.state.leadNome,
  // sobrenome: this.state.leadSobrenome,
  // email: this.state.leadEmail,
  // nascimento: this.state.leadNascimento,
  // cargo: this.state.leadCargo,
  // origem: this.state.leadOrigem,
  // decisor: this.state.leadDecisor
}
