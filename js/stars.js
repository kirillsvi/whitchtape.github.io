const ratingItemsList = document.querySelectorAll('.footer-of-footer__rating-item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset
        item.parentNode.dataset.totalValue = item.dataset.itemValue
    }) 
);