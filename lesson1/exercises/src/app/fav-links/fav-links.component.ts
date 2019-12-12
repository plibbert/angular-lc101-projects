import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title = "Links"
  favLinks = ['https://catanacomics.com/', 'https://narratively.com/', 'https://www.mymcpl.org/']
  constructor() { }

  ngOnInit() {
  }

}
