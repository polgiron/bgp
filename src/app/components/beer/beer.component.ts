import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() { }
}
