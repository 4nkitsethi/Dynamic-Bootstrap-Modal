/**
 * 
 * *  @author      -  Ankit Sethi
 * *  @date        -  2/20/2020 3:24
 * *  @description -  This plugin will help the developer in creating dynamic modal by just using few classes and attributes. It reduces developers efforts and also there is no use of writing long and lengthy javascript code.
 * *  @version     -  1.0
 *  
 **/

(function( $ ) { 
    $(document).on('click', '.dynamicModal', function (e) {
        e.preventDefault();
        // Object instance 
        $this = $(this);

        // adding directions
        $("#dynamicModal").removeClass('left right').addClass($this.data('direction'));

        // ajax call
        $.ajax({
            url:$this.data("targetUrl"),
            success:function(response){                
                $("#dynamicModal").html(response).modal("show");                
            }
        })        
        return false;
    });    
}( jQuery ));

