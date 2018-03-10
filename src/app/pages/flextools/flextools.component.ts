import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cheat-flextools',
  templateUrl: './flextools.component.html',
  styleUrls: ['./flextools.component.scss']
})
export class FlextoolsComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.flexgroup = fb.group({
      flexdirection: this.containerstyle['flex-direction'],
      justifycontent: this.containerstyle['justify-content'],
      alignitems: this.containerstyle['align-items'],
    });
  }

  flexgroup: FormGroup;
  containerstyle: { [key: string]: string } = {
    'flex-direction': 'row',
    'justify-content': 'space-around',
    'align-items': 'center',
  };

  ngOnInit() {
    this.flexgroup.valueChanges.subscribe(result => {
      this.containerstyle['flex-direction'] = result.flexdirection;
      this.containerstyle['justify-content'] = result.justifycontent;
      this.containerstyle['align-items'] = result.alignitems;
    });
  }
}
