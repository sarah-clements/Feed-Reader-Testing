
/* All of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        // This first test was provided by Udacity and tests that the allFeeds object is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL and Name defined
         * and that they are not empty.
         */
        for(var i = 0; i < allFeeds.length; i++) {
            var feedURL = allFeeds[i].url;
            var feedName = allFeeds[i].name;

            it('URLs are defined and not empty strings', function(){
                expect(feedURL).toBeDefined();
                expect(feedURL).not.toBe("");
            });

            it('Names are defined and not empty strings', function(){
                expect(feedName).toBeDefined();
                expect(feedName).not.toBe("");
            });
        }
    });

    describe('The menu', function(){

        var toggleMenu = $('.menu-icon-link');
        
        // Ensures the menu element is hidden by default. 
        it('Menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
        // This tests for menu visibility when the menu icon is clicked. Got some tips on this via the Udacity forum here (https://discussions.udacity.com/t/menu-link-toggle-question/189577).
        it('Menu changes when clicked', function(){
            toggleMenu.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            toggleMenu.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });    
    });
 
    describe('Initial Entries', function(){

    });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
