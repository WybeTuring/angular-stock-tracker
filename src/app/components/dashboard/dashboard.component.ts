import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: Array<StockInterface>;
  symbols: Array<String>;

  constructor(private service: StocksService) {
    this.symbols = service.get();
   }

  ngOnInit(): void {
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }

}
