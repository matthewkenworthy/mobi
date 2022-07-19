let Analytics = Mobi2Go.Analytics;
let Events = Mobi2Go.Analytics.Events;

// When a product menu category is viewed
Mobi2Go.Analytics.bind({
    VIEWED_PRODUCT_CATEGORY: function(category) {
        // Google tag manager
        window.alert(category.name);
        // Generic analytic service (such as Google Analytics)
        //        acme_tracker.track('opened_category', {method: category[0].name});
    }
});

// Helper methods
function startSession() {
    window.dataLayer.appName = Mobi2Go.app.getPlatform();
    window.dataLayer.appId = Mobi2Go.headoffice.domain_name + '-' + Mobi2Go.app.getPlatform();
    window.dataLayer.currencyCode = Mobi2Go.headoffice.currency_abrv;
}

