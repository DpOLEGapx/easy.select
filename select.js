function easySelect() {

    const easySelectSourse = document.querySelectorAll('.set__easySelect');

    //Initialization easySelect
    easySelectSourse.forEach(function(item) {
        
        const easySelectContainer = '<div class="easySelect"><div class="easySelect__selected">' + item.options[0].text + '</div><div class="easySelect__list"></div></div>';
        
        item.insertAdjacentHTML('afterEnd', easySelectContainer);
    });

    const easySelect = document.querySelectorAll('.easySelect');
    const easySelectSelected = document.querySelectorAll('.easySelect__selected');
    const easySelectList = document.querySelectorAll('.easySelect__list');
    
    //Fill easySelect options
    easySelectList.forEach(function(item, index) {

        for (let i = 0; i < easySelectSourse[index].options.length; i++) {

            const easySelectItem = '<div class="easySelect__item" value="' + easySelectSourse[index].options[i].value + '">' + easySelectSourse[index].options[i].text + '</div>';

            item.insertAdjacentHTML('beforeEnd', easySelectItem);         
        }         
    });

    //Fill easySelect customize selected
    const easySelectItem = document.querySelectorAll('.easySelect__item');

    easySelectItem.forEach(function(item) {

        item.addEventListener('click', function() {

            const currentSelected = this.parentElement.previousElementSibling;

            currentSelected.setAttribute('value', this.getAttribute('value'));
            currentSelected.textContent = this.textContent;
            this.closest('.easySelect').classList.remove('easySelect_show');

            fillSelected();          
        });
    });


    //Fill easySelect native selected
    function fillSelected() {

        easySelectSelected.forEach(function(item, index) {

            if (easySelectSourse[index].options[0].value != item.getAttribute('value')) {

                easySelectSourse[index].options[0].value = item.getAttribute('value');
            }

            if (easySelectSourse[index].options[0].text != easySelectSelected[index].textContent) {

                easySelectSourse[index].options[0].text = easySelectSelected[index].textContent;
            }                
        });
    };

    //Show/Hide easySelect
    easySelectSelected.forEach(function(item) {

        item.addEventListener('click', function() {

            easySelect.forEach(function(elem) {
                
                elem.classList.remove('easySelect_show');
            });
              
            if (this.parentElement.classList.contains('easySelect_show') != true) {
                
                this.parentElement.classList.add('easySelect_show');
            }
            else {

                this.parentElement.classList.remove('easySelect_show');
            };      
        });   
         
    });

    //Hide all open easySelect
    document.addEventListener("click", function() { 
		
        easySelect.forEach(function(item) {
 
            item.classList.remove('easySelect_show');
        });      
	});

    easySelect.forEach(function(item) {

        item.addEventListener("click", function(elem) { 
            elem.stopPropagation();
        });
    });
};

easySelect();