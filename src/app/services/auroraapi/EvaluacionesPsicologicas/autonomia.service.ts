import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class EvaluacionAutonomiaService {

    _url = 'https://localhost:7226/api/Evaluacion/';

    constructor(
            private http: HttpClient,
            private _cookieService : CookieService
        ) {
            console.log('Evaluacion Service Working')
        }

        PostAPI_EvaluarExamenAutonomiaPreTest(casoPacienteId: number, p01 : number,p02 : number,p03 : number,p04 : number
          ,p05 : number,p06 : number,p07 : number, p08 : number,p09 : number,p10 : number,p11 :number,p12 :number,p13:number,p14:number,p15:number,p16:number,p17:number,p18:number,p19:number,p20:number,p21:number,p22:number,
          p23:number,p24:number,p25:number,p26:number,p27:number,p28:number,p29:number)
    {
      let tokenAccess = this._cookieService.get("TokenAccess");
        let headers = new HttpHeaders().set('Type-content','aplication/json')
          .set('Authorization','bearer '+tokenAccess);

        return this.http.post(this._url + 'EvaluarExamenAutonomiaPre', {
          "casoPacienteId": casoPacienteId,
          "p01": p01,
          "p02": p02,
          "p03": p03,
          "p04": p04,
          "p05": p05,
          "p06": p06,
          "p07": p07,
          "p08": p08,
          "p09": p09,
          "p10": p10,
          "p11": p11,
          "p12": p12,
          "p13": p13,
          "p14": p14,
          "p15": p15,
          "p16": p16,
          "p17": p17,
          "p18": p18,
          "p19": p19,
          "p20": p20,
          "p21": p21,
          "p22": p22,
          "p23": p23,
          "p24": p24,
          "p25": p25,
          "p26": p26,
          "p27": p27,
          "p28": p28,
          "p29": p29
          } , { headers : headers});
    }

    PostAPI_EvaluarExamenAutonomiaPostTest(casoPacienteId: number, p01 : number,p02 : number,p03 : number,p04 : number
      ,p05 : number,p06 : number,p07 : number, p08 : number,p09 : number,p10 : number,p11 :number,p12 :number,p13:number,p14:number,p15:number,p16:number,p17:number,p18:number,p19:number,p20:number,p21:number,p22:number,
      p23:number,p24:number,p25:number,p26:number,p27:number,p28:number,p29:number)
{
    let headers = new HttpHeaders().set('Type-content','aplication/json')

    return this.http.post(this._url + 'EvaluarExamenAutonomiaPost', {
      "casoPacienteId": casoPacienteId,
      "p01": p01,
      "p02": p02,
      "p03": p03,
      "p04": p04,
      "p05": p05,
      "p06": p06,
      "p07": p07,
      "p08": p08,
      "p09": p09,
      "p10": p10,
      "p11": p11,
      "p12": p12,
      "p13": p13,
      "p14": p14,
      "p15": p15,
      "p16": p16,
      "p17": p17,
      "p18": p18,
      "p19": p19,
      "p20": p20,
      "p21": p21,
      "p22": p22,
      "p23": p23,
      "p24": p24,
      "p25": p25,
      "p26": p26,
      "p27": p27,
      "p28": p28,
      "p29": p29
      } , { headers : headers});
}


private _listeners = new Subject<any>();
listen(): Observable<any>{
  return this._listeners.asObservable();
}
filter(filterBy : string){
  this._listeners.next(filterBy)
}

}
