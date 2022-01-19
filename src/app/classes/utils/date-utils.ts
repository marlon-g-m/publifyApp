export class DateUtils {

  static getZonaHoraria(): any {

      const dt = new Date();
      const dif = (-dt.getTimezoneOffset() < 0 ? '-' : '+') +
                (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') +
                (Math.abs(dt.getTimezoneOffset() / 60));

      return ('GMT' + dif);
  }
}
