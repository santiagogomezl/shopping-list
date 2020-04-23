function addItem(){

    $('#js-shopping-list-form').submit(function(event){

    event.preventDefault();

    const item = $(this).find('#shopping-list-entry').val();

    if(item != ''){

        $('.shopping-list').append(
            '<li>'+
                '<span class="shopping-item">'+item+'</span>'+
                '<div class="shopping-item-controls">'+
                    '<button class="shopping-item-toggle">'+
                        '<span class="button-label">check</span>'+
                    '</button> '+
                    '<button class="shopping-item-delete">'+
                        '<span class="button-label">delete</span>'+
                    '</button>'+
                '</div>'+
            '</li>'
        );

        $(this).find('#shopping-list-entry').val('');
    }

    });

}

function checkItem(){

    $('ul.shopping-list').on('click', '.shopping-item-toggle',function(){

        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

    })

}

function deleteItem(){

    $('ul.shopping-list').on('click', '.shopping-item-delete', function(){

        $(this).closest('li').remove();
        
    })

}


$(addItem);
$(checkItem);
$(deleteItem);

