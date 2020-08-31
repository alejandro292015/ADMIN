import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  tema = document.querySelector('#theme')

  constructor() {

    const url =  localStorage.getItem('theme') || './assets/css/colors/default-dark.css'
    this.tema.setAttribute('href',url)
    
   }
   changeTheme(theme:string){
    const url = `./assets/css/colors/${theme}.css`

    this.tema.setAttribute('href',url)

    localStorage.setItem('theme',  url)

  }
}
