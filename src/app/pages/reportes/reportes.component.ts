import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { EstadisticaPacientesService } from 'src/app/services/auroraapi/estadisticaPacientes.service';
import { UbigeoService} from 'src/app/services/auroraapi/ubigeo.service'

interface distrito {
  value: string;
  viewValue: string;
}

interface departamento {
  value: string;
  viewValue: string;
}

interface provincia {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  distritos: distrito[] = [
    {value: '0', viewValue: 'Bagua'},
    {value: '1', viewValue: 'Chachapoyas'},
    {value: '2', viewValue: 'Huarmey'},
    {value: '3', viewValue: 'Casma'},
    {value: '4', viewValue: 'Nuevo Chimbote'},
    {value: '5', viewValue: 'Ate'},
    {value: '6', viewValue: 'Carabayllo'},
    {value: '7', viewValue: 'Comas'},
    {value: '8', viewValue: 'Chaclacayo'},
    {value: '9', viewValue: 'San juan de Lurigancho'},
    {value: '10', viewValue: 'Independencia'},
    {value: '11', viewValue: 'La victoria'},
    {value: '12', viewValue: 'Lince'},
    {value: '13', viewValue: 'Breña'},
    {value: '14', viewValue: 'Los olivos'},
    {value: '15', viewValue: 'Ancon'},
    {value: '16', viewValue: 'Rimac'},
    {value: '17', viewValue: 'San juan de Miraflores'},
    {value: '18', viewValue: 'San martin de porres'},
    {value: '19', viewValue: 'San Luis'},
    {value: '20', viewValue: 'Villa el salvador'},
    {value: '21', viewValue: 'Huaral'},
    {value: '22', viewValue: 'Huacho'},
    {value: '23', viewValue: 'Barranca'},
    {value: '24', viewValue: 'Imperial'},
    {value: '25', viewValue: 'Santa Maria'},
    {value: '26', viewValue: 'Huaraz'},
    {value: '27', viewValue: 'Carhuaz'},
    {value: '28', viewValue: 'Yungay'},

  ];

  provincias: provincia[] = [
    {value: '0', viewValue: 'Bagua'},
    {value: '1', viewValue: 'Chachapoyas'},
    {value: '2', viewValue: 'Huarmey'},
    {value: '3', viewValue: 'Casma'},
    {value: '4', viewValue: 'Santa'},
    {value: '5', viewValue: 'Lima'},
    {value: '6', viewValue: 'Huaral'},
    {value: '8', viewValue: 'Huaura'},
    {value: '9', viewValue: 'Barranca'},
    {value: '10', viewValue: 'Cañete'},
    {value: '11', viewValue: 'Huaraz'},
    {value: '12', viewValue: 'Carhuaz'},
    {value: '13', viewValue: 'Yungay'},
    {value: '14', viewValue: 'Abancay'},
    {value: '15', viewValue: 'Andahuaylas'},
    {value: '16', viewValue: 'Arequipa'},
    {value: '17', viewValue: 'Ascope'},
  ];

  departamentos: departamento[] = [
    {value: '-1', viewValue: '...Cargando'}
  ];

  DepartamentList: any;

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

  g_FromUser_PsicologoId: number = 1;

  private ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  public objPsicologoFullInfo : any = {
    nombres: '',
    apellidoMaterno:'',
    apellidoPaterno:'',
    cantPacientes : 0,
    correo : '',
    dni : '',
    especialidad : '',
    numeroDeColegiaturaDelPeru : '',
    psicologoId : 0,
    telefono : '',
    usuarioId : 0
  };

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  constructor(
    private PsicologoService: PsicologoService,
    private _EstadisticaPacientesService : EstadisticaPacientesService,
    private _UbigeoService:UbigeoService) { }

  ngOnInit(): void {
    this.ObtenerPsicologoInfo();
    this.ObtenerDepartamentosCBO();
  }

  ObtenerPsicologoInfo()
  {
    this.PsicologoService.GetPsicologoFullInfoByPsicologoId(this.g_FromUser_PsicologoId+"").subscribe(apiRpta => {
      this.ApiFullobjPsicologoFullInfo = apiRpta;
      this.objPsicologoFullInfo = this.ApiFullobjPsicologoFullInfo.rpta;
    });
  }

  ObtenerDepartamentosCBO()
  {
    this._UbigeoService.GetDepartamentoListar().subscribe((data:any)=>{
      this.DepartamentList=data;
    })
  }


}
