let Analytics = Mobi2Go.Analytics;
let Events = Mobi2Go.Analytics.Events;


Analytics.bind({
   IDENTIFY_CUSTOMER: function(customer) {
       window.alert(`ID: ${customer.id}Email: ${customer.email}`)
   }
});

// Helper methods
function startSession() {
    window.dataLayer.appName = Mobi2Go.app.getPlatform();
    window.dataLayer.appId = Mobi2Go.headoffice.domain_name + '-' + Mobi2Go.app.getPlatform();
    window.dataLayer.currencyCode = Mobi2Go.headoffice.currency_abrv;
}

