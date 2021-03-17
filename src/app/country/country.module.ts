// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */
import { CountryViewComponent } from './country-view/country-view.component';
import { CountryListComponent } from './country-list/country-list.component';

/**
 * Import Module Services
 */
import { CountryService } from './services/country.service';

/**
 * Import Module Routing
 */
import { routing } from './country.routes';

export const moduleName =
  angular.module('application.countries', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */
  .component(CountryViewComponent.selector, CountryViewComponent)
  .component(CountryListComponent.selector, CountryListComponent)

  /**
   * Register Module Services
   */
  .service(CountryService.selector, CountryService)

  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
