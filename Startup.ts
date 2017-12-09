import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomerModule } from './Modules/CustomerModule';
const platform = platformBrowserDynamic();
platform.bootstrapModule(CustomerModule);