import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.services'

@Component({
  selector: 'app-fake-news',
  templateUrl: './fake-news.component.html',
  styleUrls: ['./fake-news.component.css'],
  
})
export class FakeNewsComponent implements OnInit {

  public resultado: any;
  texto: String;

  constructor(private data: DataService) { }

  ngOnInit(): void {

  }

  submitForm()  {
    console.log(this.texto);

    this.data.getFromUrl("https://www.bbc.com/news/business-53617966")
      .subscribe((data) => {
      
      console.log(data);

      this.resultado = data;

    }),(err) => console.log(err);
  }

}
