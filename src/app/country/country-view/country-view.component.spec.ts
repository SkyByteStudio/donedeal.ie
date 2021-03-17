import * as angular from 'angular';
import 'angular-mocks';
import { CountryViewComponent } from './country-view.component';

describe('CountryViewComponent component', () => {
    beforeEach(() => {
        angular
            .module('app', [])
            .component(CountryViewComponent.selector, CountryViewComponent);
        angular.mock.module('app');
    });

    it('should exist', angular.mock.inject(($componentController: any) => {
        const component = $componentController(CountryViewComponent.selector, {}, {});
        expect(component).toBeDefined();
    }));

});
