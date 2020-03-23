import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI: string = '';
  apiKey = '428e20a04559cc0c3d4bbb2e534e1e81';

  constructor(private http: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
   }

   getWeather(cityName:string, countryCode:string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
   }
}
