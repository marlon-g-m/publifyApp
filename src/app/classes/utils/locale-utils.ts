import { getLocaleId } from '@angular/common';

export class LocaleUtils {

  static getLocale(){
    return getLocaleId('es_CL');
  }
}
