// SPA --> Single Page Aplication
// Client side 
// IIFE --> Immediatley invoked function expression
(function(){
    function Start()
    {
        console.log("App Started");
        window.addEventListener("load", Start)

        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(Button of deleteButtons)
        {
            Button.addEventListener('click',(event)=>{
                if(!confirm("Are you sure to delete this?"))
                {
                    event.preventDefault();
                    window.location.assign('/assignmentslist');
                }
            });
        }
    }
    window.addEventListener("load", Start)
})();


$(document).ready(function() {
    $('.nav-link-clicked').on('click', function() {
      // Remove 'clicked' class from all links
      $('.nav-link-clicked').removeClass('clicked');
      // Add 'clicked' class to the clicked link
      $(this).addClass('clicked');
    });
  });

  