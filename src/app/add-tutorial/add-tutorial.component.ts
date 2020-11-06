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

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      image: this.tutorial.image,
      content: this.tutorial.content,
      author: this.tutorial.description,
      Published: this.tutorial.Published,
      created_on: this.tutorial.created_on,
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      image: this.tutorial.image,
      content: this.tutorial.content,
      author: this.tutorial.description,
      Published: this.tutorial.Published,
      created_on: this.tutorial.created_on,
    };
  }

}
