export interface UsuarioPretest{
    dni:string,
    nombre:string,
    tipoViolencia:string,
    riesgo:string,
    motivacionCambioE:boolean,
    copersmithE:boolean,
    nivelTomaDecisionesE:boolean, //incipiente de capacidad - capacidad en proceso - capacidad suficiente
    autonomiaE:boolean, //control positiva - control negativa -deseo de control - agente de control interno - agente de control externo
    info_MotiCambio : string,
    info_CoperSmith : string,
    info_TomaDeci : string,
    info_Autonomia: string
  }
