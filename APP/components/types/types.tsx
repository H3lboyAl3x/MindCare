// src/types/types.ts

export type RootStackParamList = {
    TelaInicio01: undefined;
    TelaInicio02: undefined;
    Selecao: undefined;
    Sobre: undefined;
    IniciarSessao: undefined;
    CriarConta01: undefined;
    CriarConta02: undefined;
    CriarConta01p: undefined;
    CriarConta02p: undefined;
    Navegacao1: undefined;
    Navegacao2: undefined;
    EditarPerfil: undefined;
    EditarPerfilp: undefined;
    Perfil01: undefined;
    Mensagem: undefined;
    Proficional: undefined;
    DetalhesProfissional: undefined;
    ExibirInformacao: undefined;
    EditarSenha: undefined;
    EditarSenhap: undefined;
    MarcarConsulta: undefined;
    MarcarConsultap: undefined;
    Paciente: undefined;
    DetalhesPaciente: undefined;
    ExibirInformacaop: undefined;
    AnalisarConsultasp: undefined;
    AnalisarConsultas: undefined;
    AdiarConsultap: undefined;
    AdiarConsulta: undefined;
    VideoCall: { link: string }; // 👈 isso diz que a tela espera um link via route.params
  };
  