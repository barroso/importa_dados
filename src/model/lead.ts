export class Lead {
    nome: string;
    email: string;
    telefone: string;
    cidade: string;
    nota: string;

    constructor(
        nome: string,
        email: string,
        telefone: string,
        cidade: string,
        nota: string
    ) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cidade = cidade;
        this.nota = nota;
    }
}
