
function dropDownMenu() {
    const btnTopHeader = document.querySelector(".dke_top-header__btn");
    const btnBottomHeader = document.querySelector(".dke_bottom-header__btn");
    const mobileMenu = document.querySelector(".dke_menu-mobile-header");
    const dropDownMenu = document.querySelector(".dke_drop-down-menu");
    const btnsDropDownMenu = document.querySelectorAll(".dke_item-drop-down__btn");
    const btnsDropDownMenuMobile = document.querySelectorAll(".dke_item-drop-down-mobile__head");

    let isOpenMenu = false;
    
    if (btnTopHeader && btnBottomHeader && dropDownMenu && mobileMenu && btnsDropDownMenu && btnsDropDownMenuMobile) {

        // открытие/закрытие меню на desktop
        btnTopHeader.addEventListener("click", e => {
            dropDownMenu.classList.toggle("_active");

            if (dropDownMenu.style.maxHeight) dropDownMenu.style.maxHeight = null;
            else dropDownMenu.style.maxHeight = "80vh";
            if (dropDownMenu.style.overflowY) dropDownMenu.style.overflowY = null;
            else dropDownMenu.style.overflowY = "auto";

            isOpenMenu = !isOpenMenu;
        });

        // открытие/закрытие бургер-меню
        btnBottomHeader.addEventListener("click", e => {
            if (mobileMenu.style.left) mobileMenu.style.left = null;
            else mobileMenu.style.left = 0;

            isOpenMenu = !isOpenMenu;
        });

        // открытие/закрытие внутренних списков меню на desktop
        btnsDropDownMenu.forEach(element => {
            element.addEventListener("click", e => {
                
                element.style.pointerEvents = "none";
                element.classList.toggle("_active");
    
                const dropDownSublist = element?.nextElementSibling;
    
                if (dropDownSublist) {
                    if (dropDownSublist.style.maxHeight) dropDownSublist.style.maxHeight = null;
                    else dropDownSublist.style.maxHeight = "500px";
                    if (dropDownSublist.style.overflowY) dropDownSublist.style.overflowY = null;
                    else dropDownSublist.style.overflowY = "auto";
                }
    
                element.style.pointerEvents = null;
            })
        });

        // открытие/закрытие внутренних списков бургер-меню
        btnsDropDownMenuMobile.forEach(element => {
            element.addEventListener("click", e => {
                
                element.classList.toggle("_active");
                element.style.pointerEvents = "none";
                const btnArrow = element.querySelector(".dke_item-drop-down-mobile__head-icon_arrow");

                if (btnArrow) {
                    if (btnArrow.style.tranform) btnArrow.style.tranform = null;
                    else btnArrow.style.tranform = "roteate(180deg)";
                }
    
                const dropDownSublist = element?.nextElementSibling;
    
                if (dropDownSublist) {
                    if (dropDownSublist.style.maxHeight) dropDownSublist.style.maxHeight = null;
                    else dropDownSublist.style.maxHeight = "1000px";
                    if (dropDownSublist.style.overflowY) dropDownSublist.style.overflowY = null;
                    else dropDownSublist.style.overflowY = "auto";

                    dropDownSublist.classList.toggle("_active");
                }
    
                element.style.pointerEvents = null;
            })
        });

        window.addEventListener('resize', () => {
            const currentWidthWindow = Math.max(window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth, 0);

            // открытие/зыкрытие меню в зависимости от ширины экрана
            if (isOpenMenu) {
                if (currentWidthWindow > BREAKPOINT3) {
                    closeMobileMenu();
                    openDropDownMenu();
                } else {
                    closeDropDownMenu();
                    openMobileMenu();
                }
            }
        });


        // закрытие бургер-меню
        function closeMobileMenu() {
            mobileMenu.style.left = null;
        }

        // закрытие меню на desktop
        function closeDropDownMenu() {
            dropDownMenu.classList.remove("_active");

            dropDownMenu.style.maxHeight = null;
            dropDownMenu.style.overflowY = null;
        }

        // открытие бургер-меню
        function openMobileMenu() {
            mobileMenu.style.left = 0;
        }

        // закртие меню на desktop
        function openDropDownMenu() {
            dropDownMenu.classList.add("_active");

            dropDownMenu.style.maxHeight = "80vh";
            dropDownMenu.style.overflowY = "auto";
        }

    }
}
