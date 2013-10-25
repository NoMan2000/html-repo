document.querySelector('.grid').addEventListener('click', function(e){
    console.log(e);
    console.dir(e.target);
    if (e.target.tagName === 'IMG'){
        // Check to make sure that the target is an image.
        var howMany = this.querySelectorAll('li').length; // Check if elements have less than one picture.
        console.log(this);
        if (howMany > 1){
            // Do not remove unless there is more than one picture left.
        var removeTarget = e.target.parentNode;
        removeTarget.parentNode.removeChild(removeTarget);    
        }else{
            var photoTitle = e.target.alt;
            document.querSelector('#art p').innerHTML = "<p>You've picked: " + photoTitle + "</p>";
        }
    }
   
    // This is also removing the main div parent as well if an empty space.
    }, false);