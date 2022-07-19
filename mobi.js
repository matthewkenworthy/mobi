let Analytics = Mobi2Go.Analytics;
let Events = Mobi2Go.Analytics.EVENTS;

// Identify Customer in Klaviyo
Analytics.bind({
    IDENTIFY_CUSTOMER: function(customer) {
       _learnq.push(['identify', {
          '$email': customer.email }]);
    }
});

// When a user clicks the 'Next step' button
Analytics.bind({
    STARTED_CHECKOUT: function() {
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

function _formatProduct(product) {
    var product = {
        id: product.menu_product.id,
        name: product.menu_product.name,
        price: product.price.toFloat(),
        quantity: product.quantity,
        variant: product.size ? product.size.menu_modifier.name : null,
        category: product.menu_product.category
            ? product.menu_product.category.name
            : null,
        position: product.menu_product.category_list_position
            ? product.menu_product.category_list_position
            : null
    };

    return product;
}
