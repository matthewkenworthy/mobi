let Analytics = Mobi2Go.Analytics;

Mobi2Go.Analytics.bind({
    IDENTIFY_CUSTOMER: function(customer) {
        // Identify in Klaviyo
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

