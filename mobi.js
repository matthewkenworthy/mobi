let Analytics = Mobi2Go.Analytics;
let Events = Mobi2Go.Analytics.Events;

// Identify Customer in Klaviyo
Analytics.bind({
    IDENTIFY_CUSTOMER: function(customer) {
       _learnq.push(['identify', {
          '$email': customer.email }]);
    }
})

// When a user clicks the 'Next step' button
Mobi2Go.Analytics.bind({
    EVENTS.STARTED_CHECKOUT: function() {
        // Google tag manager
        var ecommerce = {
            checkout: {
                actionField: {
                    step: 1
                },
                products: [
                    _formatProducts()
                ]
            }
        };

        _event('checkoutPaymentStep1', null, null, null, ecommerce);

        // Generic analytic service (such as Google Analytics)
        acme_tracker.track('start_checkout');
    }
});

// Helpers
function _formatProducts() {
    var products = [];

    _.each(Order.getProducts(), function(product) {
        var product_to_track = _formatProduct(product);
        products.push(product_to_track)
    });

    return products;
}
