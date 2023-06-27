import { Component} from '@angular/core';

@Component({
  selector: 'app-timestamps',
  templateUrl: './timestamps.component.html',
  styleUrls: ['./timestamps.component.css']
})
export class TimestampsComponent {
  buttonClicked = false;
  stamps = [];

  onButtonClick(){
    this.stamps.push(new Date());
    this.buttonClicked = true;
  }

}
