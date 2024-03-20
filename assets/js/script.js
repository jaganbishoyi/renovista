document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll('.flex-item');

    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
            listItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});
