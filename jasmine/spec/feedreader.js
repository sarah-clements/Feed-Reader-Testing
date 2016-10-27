$(function() {
    describe('RSS Feeds', function() {
        // This first test was provided by Udacity and tests that the allFeeds object is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds object
         * and ensures it has a URL and Name defined and that they are not empty.*/
        for (var i = 0; i < allFeeds.length; i++) {
            var feedURL = allFeeds[i].url;
            var feedName = allFeeds[i].name;

            it('URLs are defined and not empty strings', function() {
                expect(feedURL).toBeDefined();
                expect(feedURL).not.toBe("");
            });

            it('Names are defined and not empty strings', function() {
                expect(feedName).toBeDefined();
                expect(feedName).not.toBe("");
            });
        }
    });

    describe('The menu', function() {
        var toggleMenu = $('.menu-icon-link');

        // Ensures the menu element is hidden by default. 
        it('Menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // This tests for menu visibility when the menu icon is clicked. Got some tips on this via the Udacity forum here (https://discussions.udacity.com/t/menu-link-toggle-question/189577).
        it('Menu changes when clicked', function() {
            toggleMenu.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            toggleMenu.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        // Tests for a at least one entry when the loadFeed is initially called on page load
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('should load at least one entry', function() {
            var entry = $('.feed .entry')[0];
            expect(entry).not.toBe('');
        });
    });

    describe('New Feed Selection', function() {
        // Tests for a new feed entry when the loadFeed is called (from menu click handler)
        var oldFeed;
        var newFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed .entry').find("h2").first().html();
                done();
                console.log(oldFeed);
            });
        });

        // This test ensures when a new feed is loaded by the
        // loadFeed function that the content actually changes
        it('should load new feed', function(done) {
            loadFeed(1, function() {
                newFeed = $('.feed .entry').find("h2").first().html();
                done();
                console.log(newFeed);
            });

            expect(oldFeed).not.toBe(newFeed);
        });
    });
}());