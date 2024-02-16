import { Component } from '@angular/core';
import { MENU } from '../../constants/panel.constant';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {
  public menu: any[] = MENU;
}
