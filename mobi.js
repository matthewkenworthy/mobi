let Analytics = Mobi2Go.Analytics;
let Events = Mobi2Go.Analytics.Events;

// When a user clicks the 'Next step' button
Analytics.bind({
    EVENTS.STARTED_CHECKOUT: function() {
        window.alert(_formatProducts());
    }
})

// Identify Customer in Klaviyo
Analytics.bind({
    IDENTIFY_CUSTOMER: function(customer) {
       _learnq.push(['identify', {
          '$email': customer.email }]);
    }
})

// Helpers
function _formatProducts() {
    var products = [];

    _.each(Order.getProducts(), function(product) {
        var product_to_track = _formatProduct(product);
        products.push(product_to_track)
    });

    return products;
}
