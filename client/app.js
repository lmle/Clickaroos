'use strict';

angular.module('clickaroos', [
  'ui.router',
  'ui.bootstrap',
  'clickaroos.config',
  'clickaroos.directives',
  'clickaroos.directives.clientDoughnutDirective',
  'clickaroos.directives.deviceDoughnutDirective',
  'clickaroos.directives.timeSeriesDirective',
  'clickaroos.account',
  'clickaroos.dashboard',
  'clickaroos.createCampaign',
  'clickaroos.campaignPage',
  'clickaroos.abTest',
  'clickaroos.dashboard'
])

// todo: Update accordingly
// .constant('appServerUrl', 'http://localhost:3000')
.constant('appServerUrl', '')

;