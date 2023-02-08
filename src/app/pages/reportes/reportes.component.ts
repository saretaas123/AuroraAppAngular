import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { EstadisticaPacientesService } from 'src/app/services/auroraapi/estadisticaPacientes.service';
import { UbigeoService} from 'src/app/services/auroraapi/ubigeo.service'
import { GraficoAutoestimaComponent } from './grafico-autoestima/grafico-autoestima.component';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  LosFiltrosSeHanModificado : boolean = false;
  DepartamentList: any;
  g_cookie_CargoId : any;
  html_pintarEsAdmi : boolean = false;

  outPutParametersFilter =
  {
    outPut_RegionsId : [],
    outPut_Distritos : [0,1],
    outPut_Ano : 0,
    outPut_EdadMinima : 0,
    outPut_EdadMaxima :  0,
    outPut_TipoViolencia : "",
    outPut_Riesgo : ""
  }

   // CREACION DE PDF
   downloadPDF() {
    // Extraemos el
    const DATA : any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options)
    .then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(
        img,
        'PNG',
        bufferX,
        bufferY,
        pdfWidth,
        pdfHeight,
        undefined,
        'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_Reportes.pdf`);
    });
  }
  //FIN CREACION DE PDF

  form_array_ListDepartamento : Array<any> = [
    {
      DistritoId:0,
      RutaNombre : "",
      DistritoNombre:""
    }
  ];

  g_FromUser_PsicologoId: any = -1;

  private ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  public objPsicologoFullInfo : any = {
    /*nombres: '',
    apellidoMaterno:'',
    apellidoPaterno:'',
    cantPacientes : 0,
    correo : '',
    dni : '',
    especialidad : '',
    numeroDeColegiaturaDelPeru : '',
    psicologoId : 0,
    telefono : '',
    usuarioId : 0*/
    psicologoId: 0,
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    dni: "",
    correo: "",
    cargoId: 0,
    ubigeoId: 0,
    ubigeoNombre: 0,
    usuarioId: 0,
    cantPacientes: 0
  };

  ApiFullobjListarDepartamento : any ={
    mnsj: "",
    rpta: [
      {
      depaId: 0,
      nombreDepa: ""
      },
    ]
  };

  ApiFullobjListarProvincia : any ={
    mnsj: "",
    rpta: [
      {
        provId: 0,
        nombreProv: "",
        depaId: 0
      },
    ]
  };

  ApiFullobjListarDistrito : any ={
    mnsj: "",
    rpta: [
      {
        distId: 0,
        nombreDist: "",
        provId: 0
      },
    ]
  };



  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  constructor(
    private PsicologoService: PsicologoService,
    private _EstadisticaPacientesService : EstadisticaPacientesService,
    private _UbigeoService:UbigeoService,
    private _cookieService : CookieService) { }

  ngOnInit(): void {
    this.outPutParametersFilter ={outPut_RegionsId : [],outPut_Distritos : [],outPut_Ano : 0,outPut_EdadMinima : 0,
      outPut_EdadMaxima :  0,outPut_TipoViolencia : "",outPut_Riesgo : ""};
    this.form_array_ListDepartamento = [];

    this.g_FromUser_PsicologoId = this._cookieService.get("PsicologoId");
    console.log("this.g_FromUser_PsicologoId:",this.g_FromUser_PsicologoId);


    this.g_cookie_CargoId = this._cookieService.get("PsicologoCargo").split('y')[2];
    if(this.g_cookie_CargoId === null)
    {
      this._cookieService.deleteAll();
    }
    else if(this.g_cookie_CargoId === "d")
    {
      this.html_pintarEsAdmi = false;
    }
    else if(this.g_cookie_CargoId === "j")
    {
      this.html_pintarEsAdmi = true;
    }

    this.ObtenerPsicologoInfo();
    this.ObtenerDepartamentos();
    this.ObtenerProvincia();
    this.ObtenerDistrito();
  }

  cbo_DepartamentoSelected = null;
  cbo_ProvinciaSelected = null;
  cbo_DistritoSelected = null;

  listDepartamentosForFilter :
    [{
      depaId: 0,
      nombreDepa: ""
    }] = [{ depaId: 0, nombreDepa: "" }];

  listProvinciasForFilter :
    [{
      provId: 0,
      nombreProv: "",
      depaId: 0
    }] = [{ provId: 0, nombreProv: "", depaId: 0 }];

  listDistritosForFilter :
    [{
      distId: 0,
      nombreDist: "",
      provId: 0
    }] = [{ distId: 0, nombreDist: "", provId: 0 }];

  ObtenerPsicologoInfo()
  {
    this.PsicologoService.GetPsicologoFullInfoByPsicologoId(this.g_FromUser_PsicologoId+"").subscribe(apiRpta => {
      this.ApiFullobjPsicologoFullInfo = apiRpta;
      console.log(this.ApiFullobjPsicologoFullInfo);
      this.objPsicologoFullInfo = this.ApiFullobjPsicologoFullInfo.rpta;
    });
  }

  ObtenerDepartamentos(){
    this._UbigeoService.GetDepartamentoListar().subscribe(apiRpta1 => {
      this.ApiFullobjListarDepartamento = apiRpta1;

      this.listDepartamentosForFilter = this.ApiFullobjListarDepartamento.rpta;
    })
  }

  ObtenerProvincia(){
    this._UbigeoService.GetProvinciaListar().subscribe(apiRpta2 => {
      this.ApiFullobjListarProvincia = apiRpta2;

      this.listProvinciasForFilter = this.ApiFullobjListarProvincia.rpta;
    })
  }

  ObtenerDistrito(){
    this._UbigeoService.GetDistritoListar().subscribe(apiRpta3 => {
      this.ApiFullobjListarDistrito = apiRpta3;

      this.listDistritosForFilter = this.ApiFullobjListarDistrito.rpta;
    })
  }

  Departamento_isChanged : number = -1;
  CBOPrinvinciaEstaDesactivado : boolean = true;
  onChange_DepartamentoSeleccionado(idDepartamentoSeleccionado : any){

    if(this.Departamento_isChanged===-1){
      this.Departamento_isChanged = 0;

      this.CBOPrinvinciaEstaDesactivado = false;
      this.CBODistritoEstaDesactivado = true;

      this.FiltrarResultados_Departamento_a_Provincia(idDepartamentoSeleccionado);
      this.listDistritosForFilter = [{distId: 0,nombreDist: "",provId: 0}];
    }else if(this.Departamento_isChanged===0){
      this.Departamento_isChanged = 1;

      this.CBOPrinvinciaEstaDesactivado = false;
      this.CBODistritoEstaDesactivado = true;

      this.FiltrarResultados_Departamento_a_Provincia(idDepartamentoSeleccionado);
      this.listDistritosForFilter = [{distId: 0,nombreDist: "",provId: 0}];
    }else if(this.Departamento_isChanged===1){
      //Sirve para corregir la seleccion ciclica > NO ELIMINAR
      this.Departamento_isChanged = 0;
    }
  }

  Provincia_isChanged : number = -1;
  CBODistritoEstaDesactivado : boolean = true;
  onChange_ProvinciaSeleccionado(idProvinciaSeleccionado : any){

    if(this.Provincia_isChanged===-1){
      this.Provincia_isChanged = 0;

      this.CBODistritoEstaDesactivado = false;
      this.FiltrarResultados_Provincia_a_Distrito(idProvinciaSeleccionado);
      this.cbo_DistritoSelected = null;
    }else if(this.Provincia_isChanged===0){
      this.Provincia_isChanged = 1;

      this.CBODistritoEstaDesactivado = false;
      this.FiltrarResultados_Provincia_a_Distrito(idProvinciaSeleccionado);
      this.cbo_DistritoSelected = null;
    }else if(this.Provincia_isChanged===1){
      //Sirve para corregir la seleccion ciclica > NO ELIMINAR
      this.Provincia_isChanged = 0;
    }
  }

  temp_array_ListDepartamento : Array<any> = [];
  onChange_DistritoSeleccionado(DistritoIdSeleccionado : any, DistritoNombreSeleccionado : any){

    let distritoSelected = this.listDistritosForFilter.filter(
      (x:
        {
          distId: 0,
          nombreDist: "",
          provId: 0
        }) => x.distId === DistritoIdSeleccionado)[0];

    let provinciaSelected = this.listProvinciasForFilter.filter(
      (x:
        {
          provId: 0,
          nombreProv: "",
          depaId: 0
        }) => x.provId === distritoSelected.provId)[0];

    let departamentoSelected = this.listDepartamentosForFilter.filter(
      (x:
        {
          depaId: 0,
          nombreDepa: ""
        }) => x.depaId === provinciaSelected.depaId)[0];


    this.temp_array_ListDepartamento = this.form_array_ListDepartamento;
    if(this.temp_array_ListDepartamento.filter(x => x.DistritoId === DistritoIdSeleccionado).length <= 0)
    {
      this.LosFiltrosSeHanModificado = true;
      this.temp_array_ListDepartamento.push(
        {
          DistritoId: DistritoIdSeleccionado,
          RutaNombre: departamentoSelected.nombreDepa+"/"+provinciaSelected.nombreProv+"/",
          DistritoNombre: distritoSelected.nombreDist
        }
      );
      this.form_array_ListDepartamento = this.temp_array_ListDepartamento;
    }
  }

  OnClick_QuitarElementoListToFiltro(DistritoId : any)
  {
    this.temp_array_ListDepartamento = this.form_array_ListDepartamento;

    this.temp_array_ListDepartamento = this.temp_array_ListDepartamento.filter(x => x.DistritoId != DistritoId);

    this.form_array_ListDepartamento = this.temp_array_ListDepartamento;
    this.LosFiltrosSeHanModificado = true;
  }

  FiltrarResultados_Departamento_a_Provincia(idDepartamentoSeleccionado : any)
  {
    this.listProvinciasForFilter = this.ApiFullobjListarProvincia.rpta.filter(
        (x:
          {
            provId: 0,
            nombreProv: "",
            depaId: 0
          }) => x.depaId === idDepartamentoSeleccionado);
  }

  FiltrarResultados_Provincia_a_Distrito(idProvinciaSeleccionado : any)
  {
    this.listDistritosForFilter = this.ApiFullobjListarDistrito.rpta.filter(
        (x:
          {
            distId: 0,
            nombreDist: "",
            provId: 0
          }) => x.provId === idProvinciaSeleccionado);
  }

  onChange_CBO_TipoViolencia()
  {
    this.LosFiltrosSeHanModificado = true;
  }

  onChange_CBO_Riesgo()
  {
    this.LosFiltrosSeHanModificado = true;
  }

  htmlbtn_AplicarFiltros(TipoDeViolencia : any , NivelDeRiesgo : any, pDesdeEdad : any , pHastaEdad: any)
  {
    this.outPutParametersFilter = {
      outPut_RegionsId : [],
      outPut_Distritos : this.form_array_ListDepartamento,
      outPut_Ano : 0,
      outPut_EdadMinima : Number(pDesdeEdad),
      outPut_EdadMaxima :  Number(pHastaEdad),
      outPut_TipoViolencia : TipoDeViolencia===null || TipoDeViolencia===undefined?"": TipoDeViolencia,
      outPut_Riesgo : NivelDeRiesgo===null || NivelDeRiesgo===undefined?"": NivelDeRiesgo,
    }
    this.LosFiltrosSeHanModificado = false;
  }
}
