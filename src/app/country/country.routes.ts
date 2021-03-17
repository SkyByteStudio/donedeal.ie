import { CountryListComponent } from './country-list/country-list.component';
import { CountryViewComponent } from './country-view/country-view.component';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('country', {
      parent: 'app',
      url: '/country',
      component: CountryListComponent.selector
    })

    .state('country/view', {
      parent: 'app',
      url: '/country/view',
      params: {
        country: null
      },
      component: CountryViewComponent.selector
    });


 };
