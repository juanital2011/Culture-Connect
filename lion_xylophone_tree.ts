import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture-connect',
  templateUrl: './culture-connect.component.html',
  styleUrls: ['./culture-connect.component.css']
})
export class CultureConnectComponent implements OnInit {
  cultures: string[] = ['Culture 1', 'Culture 2', 'Culture 3'];
  searchText: string;
  displayCultures: string[] = [];

  constructor() { }

  ngOnInit() {
    this.setDisplayCultures(this.cultures);
  }

  private setDisplayCultures(cultures: string[]) {
    this.displayCultures = [];
    if (!this.searchText) {
      this.displayCultures = cultures;
    } else {
      this.displayCultures = cultures.filter(culture => {
        return culture.toLowerCase().includes(this.searchText.toLowerCase());
      });
    }
  }

  onSearchTextChange(searchText: string) {
    this.searchText = searchText;
    this.setDisplayCultures(this.cultures);
  }

  onCultureConnectClick(culture: string) {
    console.log(`Connect to culture ${culture}`);
  }
}