let accordionItemTop = document.querySelectorAll('.accordion-item-top');

for (let i = 0; i < accordionItemTop.length; i++) {
  accordionItemTop[i].onclick = function() {
    let accordionItemThis = this.closest('.accordion-item');
    let parent = this.closest('.accordion');
    if (parent.querySelector('.accordion-active')) {
      let activeItem = parent.querySelector('.accordion-active');
      activeItem.classList.remove('accordion-active');
      if (activeItem !== accordionItemThis) {
        accordionItemThis.classList.add('accordion-active');
      }
    }
    else {
      accordionItemThis.classList.add('accordion-active');
    }
  }
}
