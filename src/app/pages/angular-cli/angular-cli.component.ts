import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'cheat-angular-cli',
  templateUrl: './angular-cli.component.html',
  styleUrls: ['./angular-cli.component.scss']
})
export class AngularCliComponent implements OnInit {
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.formgroup = fb.group({
      projectname: ['myproject', Validators.required],
      boolitems: this.fb.array(this.booloptions.map(m => this.fb.group(m))),
      prefix: 'app',
      style: 'css',
      directory: '',
      collection: '',
      viewencapsulation: '',
      version: '',
    });
  }

  @ViewChild('cmdtext') cmdtext: ElementRef;
  formgroup: FormGroup;
  finalcmd: string;

  get booloptionsfg() {
    return this.formgroup.get('boolitems') as FormArray;
  }

  private booloptions: { description: string, value: any, type: string, option: string, default: any }[] = [
    // tslint:disable-next-line:max-line-length
    { description: 'Run through without making any changes. Will list all files that would have been created when running "ng new".', value: false, option: '--dry-run', type: 'boolean', default: null },
    { description: 'Adds more details to output logging.', value: false, option: '--verbose', type: 'boolean', default: null },
    // tslint:disable-next-line:max-line-length
    { description: 'Specifies if the style will be in the ts file.', value: false, option: '--inline-style', type: 'boolean', default: null },
    // tslint:disable-next-line:max-line-length
    { description: 'Specifies if the template will be in the ts file.', value: false, option: '--inline-template', type: 'boolean', default: null },
    { description: 'Skip creating spec files.', value: false, option: '--skip-tests', type: 'boolean', default: null },
    { description: 'Skip installing dependency packages.', value: false, option: '--skip-install', type: 'boolean', default: null },
    { description: 'Skip initializing a git repository.', value: false, option: '--skip-git', type: 'boolean', default: null },
    // tslint:disable-next-line:max-line-length
    { description: 'Create a minimal app (no test structure, inline styles/templates).', value: false, option: '--minimal', type: 'boolean', default: null },
    { description: 'Installs the @angular/service-worker.', value: false, option: '--service-worker', type: 'boolean', default: null },
    { description: 'The prefix to apply to generated selectors.', value: 'app', option: '--prefix', type: 'string', default: 'app' },
    { description: 'Generates a routing module.', value: false, option: '--routing', type: 'boolean', default: null },
  ];

  ngOnInit() {
    this.createcmd();

    this.formgroup.valueChanges.subscribe(result => {
      this.createcmd();
    });
  }

  createcmd() {
    const prefix = this.SetStringValue(this.formgroup.get('prefix').value, 'prefix', 'app');
    const style = this.SetStringValue(this.formgroup.get('style').value, 'style', 'css');
    const directory = this.SetStringValue(this.formgroup.get('directory').value, 'directory');
    const collection = this.SetStringValue(this.formgroup.get('collection').value, 'collection');
    const viewencapsulation = this.SetStringValue(this.formgroup.get('viewencapsulation').value, 'viewencapsulation');
    const version = this.SetStringValue(this.formgroup.get('version').value, 'version');

    this.finalcmd = `ng new ${this.formgroup.get('projectname').value}
 ${(this.booloptionsfg.value as any[]).filter(f => f.value).map(m => m.option).join(' ')}
${prefix}${style}${directory}${collection}${viewencapsulation}${version}`;
  }

  private SetStringValue(value: string, name: string, defaultvalue: string = null) {
    if (value && value.trim().length > 0 && value.trim() !== defaultvalue) {
      return ` --${name} ${value}`;
    }

    return '';
  }

  copycmdtext() {
    this.cmdtext.nativeElement.select();
    document.execCommand('Copy');

    this.snackBar.open('Copied', null, {
      duration: 500,
    });
  }
}
