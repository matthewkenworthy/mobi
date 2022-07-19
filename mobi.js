let Analytics = Mobi2Go.Analytics;
let Events = Mobi2Go.Analytics.EVENTS;
let Order = Mobi2Go.Order;
let QueryString = Mobi2Go.helpers.getQueryStringAsObject()
let Sanitiser = Mobi2Go.helpers.sanitiser.phoneNumber

window.onload = function() {
    if(typeof QueryString['add_product'] !== "undefined") {
        _addProductToOrder(Sanitiser(QueryString['add_product'])); // 5256001
    }
};

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
        console.log(_formatProducts());
    }
});

// Helpers
function _getProduct(mobi_id) {
    return Mobi2Go.Menu.getProducts().collection.find( ({ id }) => id === parseInt(mobi_id) );
}

function _addProductToOrder(mobi_id) {
    Order.addProduct(_getProduct(mobi_id));
}

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
        lightspeed_id: parseInt(product.menu_product.plu) || parseInt(product.size.menu_modifier.plu),
        price: product.price.toFloat(),
        quantity: product.quantity,
        image_url: product.menu_product.image_src,
        location: Order.getLocation().name,
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
