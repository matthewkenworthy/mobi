let Analytics = Mobi2Go.Analytics;
let Events = Mobi2Go.Analytics.Events;

// Identify Customer in Klaviyo
Analytics.bind({
    IDENTIFY_CUSTOMER: function(customer) {
       _learnq.push(['identify', {
          '$email': customer.email }]);
    }
});

// When a user clicks the 'Next step' button
Analytics.bind({
    Events.STARTED_CHECKOUT: function() {
        window.alert(_formatProducts());
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
