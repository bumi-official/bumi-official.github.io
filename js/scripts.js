/*!
* Start Bootstrap - Shop Homepage v5.0.2 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function openModal(el)
{
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
    })
    var modalToggle = document.getElementById('exampleModal')
    myModal.show(modalToggle)
    
    $('#size').text($(el).data('size'))
    $('#bahan').text($(el).data('bahan'))
    $('#finishing').text($(el).data('finishing'))
    $('#packaging').text($(el).data('packaging'))
    $('#exampleModalLabel').text($(el).data('name'))
    $('#harga').html(`<strong>${$(el).data('harga')}</strong>`)
    $('#p-image').attr('src', $(el).attr('src'))

}
$(document).ready(function () {
    $.getJSON("/js/items.json", function(data, a, b) {
        data.forEach(function(item) {
            $('#products>div').append(`
                <div class="col-lg-3 col-12 col-md-4 mb-5">
                <div class="card h-100">
                    <!-- Product image-->
                    <img class="card-img-top" src="${item.product_image}" alt="${item.product_name}" onclick="openModal(this)" data-size="${item.description.size}" data-bahan="${item.description.bahan}" data-finishing="${item.description.finishing}" data-packaging="${item.description.packaging}" data-name="${item.product_name}" data-harga="${item.product_price}"/>
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product name-->
                            <h5 class="fw-bolder">${item.product_name}</h5>
                            <!-- Product price-->
                            ${item.product_price}
                        </div>
                    </div>
                </div>
            </div>
            `);
        })
    })    
    
});
