// libs
import {Store} from '@ngrx/store';

// app
import {FormComponent} from '../../frameworks/core/index';
import {NameListService} from '../../frameworks/app/index';
import {Slider} from 'primeng/primeng';

@FormComponent({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [Slider]
})
export class HomeComponent {
  public newName: string = '';
  val:number;
  constructor(private store: Store<any>, public nameListService: NameListService) {
    this.val = 50;

  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }
}
