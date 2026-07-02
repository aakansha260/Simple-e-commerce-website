
function toggleFavorite(productId) {
    var productCard = document.getElementById(productId);
    var heartButton = productCard.querySelector('.favorite-heart');
    if (heartButton.classList.contains('favorited')) {
        heartButton.classList.remove('favorited');
    } else {
        heartButton.classList.add('favorited');
        alert("Product added to cart");
    }
}
function filterProductsByPrice() {
    var selectedRange = document.getElementById('priceFilter').value;
    var productCards = document.querySelectorAll('.product-card');
    productCards.forEach(function(card) {
        var cardPrice = parseInt(card.getAttribute('data-price'));
        if (selectedRange === 'none' || (selectedRange === '5000' && cardPrice >= 5000)) {
            card.style.display = 'block';
        } else {
            var rangeValues = selectedRange.split('-');
            if (rangeValues.length === 1) {
                if (cardPrice >= parseInt(rangeValues[0])) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            } else {
                if (cardPrice >= parseInt(rangeValues[0]) && cardPrice <= parseInt(rangeValues[1])) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        }
    });
}

document.getElementById('priceFilter').addEventListener('change', filterProductsByPrice);

    // jQuery for handling Add to Cart button click
    $(document).ready(function() {
        $('.cart-button').click(function() {

        });
    });

    // jQuery for toggling favorites
    $(document).ready(function() {
        $('.favorite-heart').click(function() {
            $(this).toggleClass('favorite'); 
        });
    });

    // jQuery for dynamic filtering
    $(document).ready(function() {
        $('#priceFilter').change(function() {
            var selectedPriceRange = $(this).val();
        });
    });

    // jQuery for animations (example: hover effect)
    $(document).ready(function() {
        $('.product-card').hover(function() {
            $(this).animate({ 'margin-top': '-10px' }, 'fast');
        }, function() {
            $(this).animate({ 'margin-top': '0px' }, 'fast');
        });
    });