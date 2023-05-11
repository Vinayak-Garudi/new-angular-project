import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { HousingService } from 'src/app/housing.service';
import { Housinglocation } from 'src/app/housinglocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = []
  filteredLocationList: Housinglocation[] = [];

  constructor(private housingService: HousingService) {
   this.housingService.getAllHousingLocations().then((res:Housinglocation[]) => {
    this.housingLocationList = res
    this.filteredLocationList = res
   })
  }

  filterResults(text: string) {
    if (!text || text.length <= 0) {
      this.filteredLocationList = this.housingLocationList
      console.log("filteredData", this.filteredLocationList)
    }
    this.filteredLocationList = this.housingLocationList.filter(x => {
      return x?.city.toLowerCase().includes(text.toLowerCase())
    })
  }
}
