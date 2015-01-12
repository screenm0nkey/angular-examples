by.addLocator
by.binding
by.select
by.selectedOption
by.input
by.model
by.buttonText
by.partialButtonText
by.textarea
by.repeater
by.className
by.css
by.id
by.linkText
by.js
by.name
by.partialLinkText
by.tagName
by.xpath


browser.wait - >
return browser.isElementPresent(By.select('service')).then(el) - >
return el
is
true;

// This selects the first eleement in a list
element.all(By.repeater('item in items')).then(items) - >
expect(items.length).toBe(5)
items[0].findElement(By.tagName("button")).click()

// and this does the same as above but with slightlt differt syntax
btns = element.all(By.repeater('item in items'))
expect(btns.count()).toBe(5)
btns.first().then(button) - >
button.findElement(By.tagName("button")).click()


element.all(by.selectedOption('dayColor.color')).then(function (arr) {
    expect(arr.length).toEqual(3);
    expect(arr[0].getText()).toBe('red');
    expect(arr[1].getText()).toBe('green');
    expect(arr[2].getText()).toBe('blue');
});


element(by.repeater('baz in days | filter:\'T\'').row(0).column('{{baz.initial}}'));
element(by.repeater('allinfo in days').column('name').row(1));


element.all(by.css('option')).then(function (optionsFromLongForm) {
    $$('option').then(function (optionsFromShortcut) {

        expect(optionsFromShortcut.length).toEqual(optionsFromLongForm.length);

        optionsFromLongForm.forEach(function (option, i) {
            option.getText().then(function (textFromLongForm) {
                expect(optionsFromShortcut[i].getText()).toEqual(textFromLongForm);
            });
        });
    })
})


it('includes a user gravatar per-element', function () {
    var elems = element.all(by.repeater('d in data'));
    elems.first().then(function (elm) {
        elm.findElement(by.tagName('img')).then(function (img) {
            img.getAttribute('src').then(function (src) {
                expect(src).toMatch(/gravatar\.com\/avatar/);
            });
        })
    });
});


// delete all cookies
browser.manage().deleteAllCookies();
// sleep 5 seconds
browser.sleep(5000);
//load the url
browser.get("/");
// disable jQuery animation effects
browser.driver.executeScript("$.fx.off = true;");
// get a reference to the username input and send specified keys ("John32")
browser.findElement(by.input("username")).sendKeys("John32");
// get a reference to the password input and send specified keys ("40b2104b47")
browser.findElement(by.input("password")).sendKeys("40b2104b47");
// get a reference to the submit button then clicks on it
browser.findElement(by.css("#login-modal button[type='submit']")).click();
element(by.model('postcode')).sendKeys('SE220HU');

expect(browser.findElement(by.css('.btn-primary')).getText()).toBe('Find')

element(by.binding('user.name'));

browser.findElement(by.css('.btn-primary')).click();
browser.debugger();


// waits for angular to finish its work
browser.waitForAngular();
// get a reference to the modal
modal = browser.findElement(by.id("login-modal"));

browser.get('/angular-1.2/affiliate/9884736621?base=jl_fc&category=at_home_FCconsultation&SHID=bypass');
browser.sleep(5000);
browser.findElement(by.css('div.ui-view')).getText().
    browser.getCurrentUrl()
element.all(by.css('.dfdf')).get(4).sendKeys('foo');


describe('angularjs homepage', function () {
    it('should greet the named user', function () {
        // Load the AngularJS homepage.
        browser.get('http://www.angularjs.org');
        // Find the element with ng-model matching 'yourName' - this will
        // find the <input type="text" ng-model="yourName"/> element - and then
        // type 'Julie' into it.
        element(by.model('yourName')).sendKeys('Julie');
        // Find the element with binding matching 'yourName' - this will
        // find the <h1>Hello {{yourName}}!</h1> element.
        var greeting = element(by.binding('yourName'));

        // Assert that the text element has the expected value.
        // Protractor patches 'expect' to understand promises.
        expect(greeting.getText()).toEqual('Hello Julie!');
    });
});
