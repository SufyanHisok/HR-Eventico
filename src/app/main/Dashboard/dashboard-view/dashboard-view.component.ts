import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OnboardingComponent } from '../../onboarding/onboarding.component';
import { VenueService } from 'src/app/Services/venue.service';
import { venue } from 'src/app/models/venue.model';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  obj:venue;
  dataVenues:any[] = [];

  constructor(public dialog: MatDialog,
    public venueService:VenueService) {
      this.obj = new venue();
     }

  ngOnInit(): void {
    this.getVenue();
  }

  openOnboarding() {
    const dialogRef = this.dialog.open(OnboardingComponent, {
      width:"100%",
      maxWidth:"100%",
      maxHeight:"100%",
      height:"100%"
    });
  }

  getVenue(){
    this.venueService.getAllVenue().subscribe({
    next: (venue) => {
      this.dataVenues = venue as any;
      console.log(venue)
    },
    error:(response) => {
      console.log(response)
    }

    }
     
    )
  }


  SaveVenue(){
    this.venueService.post(this.obj).subscribe({
      next: (venue) => {
        console.log(venue)
        this.getVenue();     }
    });
  }

}
