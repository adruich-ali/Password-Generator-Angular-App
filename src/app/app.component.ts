import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includSymbols = false;
  includNumbers = false;
  password ='';
  length = 0;

  onChangeLength(value: string){
  const parsedValue = parseInt(value);

  if(!isNaN(parsedValue)){
    this.length = parsedValue;
  }
}

  onChangeuseLetters(){
    this.includeLetters = !this.includeLetters ;
  }
  onChangeSymbols(){
    this.includSymbols = !this.includSymbols ;
  }
  onChangeNumbers(){
    this.includNumbers = !this.includNumbers ;
  }
  onButtonClick(){
  const numers = '1234567890';
  const letters = 'qwertyuiopasdfghjklzxcvbnm';
  const Symbols = '@#!$%^^&()';

  let validChars = '';
  if(this.includeLetters){
    validChars += letters;
  }
  if(this.includNumbers){
    validChars += numers;
  }
  if(this.includSymbols){
    validChars += Symbols;
  }
  let generatedPassword = '';
  for(let i = 0 ;i < this.length ; i++){
    const index = Math.floor(Math.random() * validChars.length);
    generatedPassword += validChars[index];
  }
  this.password = generatedPassword;
  }
}
