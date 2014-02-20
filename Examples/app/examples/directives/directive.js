// These are the same in the eyes of AngularJS. In fact, AngularJS even gives
// you other options for invoking directives with name prefixes. These are all
// equivalent, as well:
ng-bind=“directivename”:
ng:bind=“directivename”:
ng_bind=“directivename”:
x-ng-bind=“directivename”:
data-ng-bind=“directivename”:
// The last two are are the only methods of invoking directives that are HTML5
// compliant and that will pass HTML5 validators.


'A' - <span ng-sparkline></span>
'E' - <ng-sparkline></ng-sparkline>
'C' - <span class="ng-sparkline"></span>
'M' - <!-- directive: ng-sparkline -->