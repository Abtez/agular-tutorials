import { Component, OnInit } from '@angular/core';
import { TurorialserviceService } from 'src/app/turorialservice.service';
import { Tutorials} from '../tutorials'

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
