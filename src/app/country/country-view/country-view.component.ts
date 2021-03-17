import { ICountry } from '../country.model';
import { CountryService } from '../services/country.service';
import './country-view.component.scss';

class CountryViewController {

  country: ICountry;

  constructor(private $state: angular.ui.IStateService, private countryService: CountryService) {
    'ngInject';
  }

  $onInit() {
    this.country = this.$state.params.country as ICountry;
    const borders = this.country.borders as string[];
    if (Array.isArray(borders)) {
      this.countryService.getCountriesByCodes(borders)
      .then(
        borders => {
          if (Array.isArray(borders.data) && borders.data.length > 0) {
            this.country.borders = borders.data;
          } else {
            this.country.borders = null;
          }
        }
      ).catch(() => {
        this.country.borders = null;
      });
    }
  }

  public goBack() {
    this.$state.go('country');
  }

  public viewCountry(country: ICountry) {
    this.$state.go('country/view', {country});
  }

}

export class CountryViewComponent implements angular.IComponentOptions {
  static selector = 'countryView';
  static template = require('./country-view.component.html');
  static controller = CountryViewController;
}
