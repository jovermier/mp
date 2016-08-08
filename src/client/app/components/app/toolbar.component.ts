// app
import {BaseComponent, LogService} from '../../frameworks/core/index';
import {LangSwitcherComponent} from '../../frameworks/i18n/index';
import {NavbarComponent} from './navbar.component';
import {InputText, Button, Dialog} from 'primeng/primeng';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  directives: [LangSwitcherComponent, NavbarComponent, InputText, Button, Dialog]
})
export class ToolbarComponent {
  public newName: string = '';
  display: boolean = false;

  constructor(private log: LogService) {}

  public showDialog() {
    this.display = true;
  }

  public openLanguages(e: any): void {
    this.log.debug('openLanguages');
  }
}
