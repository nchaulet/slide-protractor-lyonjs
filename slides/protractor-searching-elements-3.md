
Par reapeter:

```javascript
element(
	by.repeater('user in users').row(0).column('name')
)
```
```html
<ul>
  <li ng-repeat="user in users">
      <span>{{user.name}}</span>
  </li>
</ul>
```