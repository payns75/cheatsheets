import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as moment from 'moment';
moment.locale('fr');
import 'hammerjs';

// import 'rxjs';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/toArray';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/reduce';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/pairwise';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/count';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/combineLatest';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/groupBy';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/from';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
