import { Component, OnInit } from '@angular/core';
import { TurorialserviceService } from 'src/app/turorialservice.service';
import { Tutorials} from '../tutorials'

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.scss']
})
export class TutorialListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
