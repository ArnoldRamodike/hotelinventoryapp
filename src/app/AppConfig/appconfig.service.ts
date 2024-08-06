import { InjectionToken } from "@angular/core";
import { AppCOnfig } from "./appconfig.interface";
import { environment } from '../../../environments/environment'
export const APP_SERVICE_CONFIG = new InjectionToken<AppCOnfig>('app.config');

export const APP_CONFIG: AppCOnfig = {
    apiEndpoint: environment.apiEndPoint
}