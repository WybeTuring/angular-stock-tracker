import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let stocks: Array<String> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface{
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  // Method to get the stocks
  get(){
    return stocks.slice();
  }

  //Method to add a new stock
  add(stock: string){
    stocks.push(stock);
    return this.get();
  }

  //Method to remove a stock
  remove(stock: string){
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  //Method to call HttpClient service to load stock values from API
  load(symbols){
    if(symbols){
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}
