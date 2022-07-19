let Analytics = Mobi2Go.Analytics;

Mobi2Go.Analytics.bind({
    IDENTIFY_CUSTOMER: function(customer) {
        // Google tag manager
        window.dataLayer.userId = customer.id;
        _event('customer', 'set customer', 'set customer', customer.id);

        // Identify in klaviyo
       _learnq.push(['identify', {
          '$email': customer.email }]);
    }
});

// Helper methods
function startSession() {
    window.dataLayer.appName = Mobi2Go.app.getPlatform();
    window.dataLayer.appId = Mobi2Go.headoffice.domain_name + '-' + Mobi2Go.app.getPlatform();
    window.dataLayer.currencyCode = Mobi2Go.headoffice.currency_abrv;
}

