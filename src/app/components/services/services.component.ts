import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor( private router: Router,
                private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  onReload(){
    this.router.navigate(['services'], { relativeTo: this.route });
  }

}
