import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TurorialserviceService } from 'src/app/turorialservice.service';
import { Tutorials} from '../tutorials'

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.scss']
})
export class AddTutorialComponent implements OnInit {

  tutorial:Tutorials = {
    title:'',
    description:'',
    image:'',
    content:'',
    author:'',
    Published:false,
    created_on:new Date(),
  }

  submitted = false

  constructor(private tutorialService: TurorialserviceService) { }

  ngOnInit(): void {
  }

}
