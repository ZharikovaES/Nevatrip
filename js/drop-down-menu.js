
function dropDownMenu() {
    const TIME = 3000;

    const btnTopHeader = document.querySelector(".dke_top-header__btn");
    const navbar = document.querySelector(".dke_navbar");
    const btnNavbar = document.querySelector(".dke_header-navbar__btn");
    const mobileMenu = document.querySelector(".dke_menu-mobile");
    const dropDownMenu = document.querySelector(".dke_drop-down-navbar");
    const btnsDropDownMenu = document.querySelectorAll(".dke_item-drop-down__btn");
    const btnsDropDownMenuMobile = document.querySelectorAll(".dke_item-drop-down-mobile__head");

    let isOpenMenu = false;
    
    if (btnTopHeader && navbar && btnNavbar && dropDownMenu && mobileMenu && btnsDropDownMenu && btnsDropDownMenuMobile) {

        // открытие/закрытие меню на desktop
        btnTopHeader.addEventListener("click", function() {
            this.disabled = true;

            toggleAttr(this, "aria-expanded");

            if (dropDownMenu.style.overflowY) dropDownMenu.style.overflowY = null;
            else setTimeout(e => {
                dropDownMenu.style.overflowY = "auto";
            }, TIME);

            dropDownMenu.classList.toggle("_active");
            navbar.classList.toggle("_active");

            if (dropDownMenu.style.maxHeight) dropDownMenu.style.maxHeight = null;
            else dropDownMenu.style.maxHeight = "80vh";

            isOpenMenu = !isOpenMenu;
            this.disabled = false;
        });

        // открытие/закрытие бургер-меню
        btnNavbar.addEventListener("click", function() {
            this.disabled = true;
            const bottomHeight = navbar.getBoundingClientRect()?.bottom;
            mobileMenu.style.top = bottomHeight + "px";

            if (document.body.style.overflowY) document.body.style.overflowY = null;
            else document.body.style.overflowY = "hidden";

            toggleAttr(this, "aria-expanded");
            if (mobileMenu.style.left) mobileMenu.style.left = null;
            else mobileMenu.style.left = 0;

            isOpenMenu = !isOpenMenu;
            this.disabled = false;
        });

        // открытие/закрытие внутренних списков меню на desktop
        btnsDropDownMenu.forEach(element => {
            element.addEventListener("click", e => {
                element.disabled = true;
                element.classList.toggle("_active");
    
                const dropDownParentEl = element?.parentElement;
                const dropDownSublist = element?.nextElementSibling;
    
                if (dropDownParentEl) toggleAttr(dropDownParentEl, "aria-expanded");
                    
                if (dropDownSublist) {
                    if (dropDownSublist.style.overflowY) dropDownSublist.style.overflowY = null;
                    else setTimeout(e => {
                        dropDownSublist.style.overflowY = "auto";
                    }, TIME);
    
                    dropDownSublist.classList.toggle("_active");

                    if (dropDownSublist.style.maxHeight) dropDownSublist.style.maxHeight = null;
                    else dropDownSublist.style.maxHeight = "3000px";
                }
    
                element.disabled = false;
            })
        });

        // открытие/закрытие внутренних списков бургер-меню
        btnsDropDownMenuMobile.forEach(element => {
            element.addEventListener("click", e => {
                element.disabled = true;
                element.classList.toggle("_active");

                const btnArrow = element.querySelector(".dke_item-drop-down-mobile__head-icon_arrow");

                if (btnArrow) {
                    if (btnArrow.style.tranform) btnArrow.style.tranform = null;
                    else btnArrow.style.tranform = "roteate(180deg)";
                }
    
                const dropDownParentEl = element?.parentElement;
                const dropDownSublist = element?.nextElementSibling;
    
                if (dropDownParentEl) toggleAttr(dropDownParentEl, "aria-expanded");
    
                if (dropDownSublist) {
                    if (dropDownSublist.style.overflowY) dropDownSublist.style.overflowY = null;
                    else setTimeout(e => {
                        dropDownSublist.style.overflowY = "auto";
                    }, TIME);

                    dropDownSublist.classList.toggle("_active");

                    if (dropDownSublist.style.maxHeight) dropDownSublist.style.maxHeight = null;
                    else dropDownSublist.style.maxHeight = "1000px";

                }
    
                element.disabled = false;
            })
        });

        window.addEventListener('resize', () => {
            const currentWidthWindow = Math.max(window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth, 0);

            // открытие/зыкрытие меню в зависимости от ширины экрана
            if (isOpenMenu) {
                if (currentWidthWindow > BREAKPOINT3) {
                    document.body.style.overflowY = null;
                    
                    closeMobileMenu();
                    openDropDownMenu();
                } else {
                    document.body.style.overflowY = "hidden";

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
