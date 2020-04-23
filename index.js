function checkItem(){

    $('.shopping-item-toggle .button-label').on('click',function(){

        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        console.log('check');
        
    })

}

function deleteItem(){

    $('.shopping-item-delete .button-label').on('click',function(){

        $(this).closest('li').remove();
        
    })

}

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

$(checkItem);
$(deleteItem);
$(addItem);

