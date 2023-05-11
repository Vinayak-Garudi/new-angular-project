import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from 'src/app/housinglocation';
import { HousingService } from 'src/app/housing.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingService = inject(HousingService)
  housingLocation: Housinglocation | undefined

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id'])
    this.housingService.getHousingLocationById(housingLocationId).then((res: any) => {
      this.housingLocation = res
    })
  }

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
  }

}
