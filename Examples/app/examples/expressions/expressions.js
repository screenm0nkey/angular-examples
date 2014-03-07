
// egghead lesson 87
// *****************
ng-click="todoCtrl.addTodo(newTodo)"
ng-click="somearray.push({item:obj, done: false})"
ng-click="TodoService.somearray.push({item:obj, done: false})"
ng-click="$event.preventDefault()">
ng-click="colors.splice($index, 1)"
ng-click="colors.push({})"
ng-click="deleteEmail($index, $event)"
ng-click="onTweet($event, form.$valid)"

ng-repeat="i in [1,2,3,4]"
ng-repeat="item in 'somewords'.split('') track by $id($index)"
ng-repeat="n in [] | range:100"


ng-show="layout === 'grid'"
ng-show="!user.agree || !user.agreeSign"
ng-show="form.uEmail.$dirty && form.uEmail.$invalid"

ng-class="{active: layout == 'list'}" ng-click="layout = 'list'"
ng-model="outputs[input.name]"
ng-checked="outputs[input.name]"
ng-repeat="actor in avengers.cast | orderBy:'name' | limitTo:limitx | filter:search"
ng-disabled="form.$invalid || isUnchanged(user)"



data-ng-class-odd="'odd'" data-ng-class="'even'"

{{ main.test1.length > 0 && 'My data' || 'No data' }}

