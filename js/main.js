const BREAKPOINT3 = 767;

function ready() {
    const btnTopHeader = document.querySelector(".dke_top-header__btn");
    const btnBottomHeader = document.querySelector(".dke_bottom-header__btn");
    const mobileMenu = document.querySelector(".dke_menu-mobile-header");
    const dropDownMenu = document.querySelector(".dke_drop-down-menu");
    const btnsDropDownMenu = document.querySelectorAll(".dke_item-drop-down__btn");
    const btnsDropDownMenuMobile = document.querySelectorAll(".dke_item-drop-down-mobile__head");
    
    if (btnTopHeader && btnBottomHeader && dropDownMenu && mobileMenu && btnsDropDownMenu && btnsDropDownMenuMobile) {
        btnTopHeader.addEventListener("click", e => {
            btnBottomHeader.classList.toggle("_active");
            dropDownMenu.classList.toggle("_active");

            if (dropDownMenu.style.maxHeight) dropDownMenu.style.maxHeight = null;
            else dropDownMenu.style.maxHeight = "80vh";
            if (dropDownMenu.style.overflowY) dropDownMenu.style.overflowY = null;
            else dropDownMenu.style.overflowY = "auto";
        });

        btnBottomHeader.addEventListener("click", e => {
            if (mobileMenu.style.left) mobileMenu.style.left = null;
            else mobileMenu.style.left = 0;
        });
        btnsDropDownMenu.forEach(element => {
            element.addEventListener("click", e => {
                
                element.style.pointerEvents = "none";
    
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
        btnsDropDownMenuMobile.forEach(element => {
            element.addEventListener("click", e => {
                
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
            
            
            if (currentWidthWindow > BREAKPOINT3) {
                closeMobileMenu();
            } else {
                closeDropDownMenu();
            }
        });
    


        function closeMobileMenu() {
            mobileMenu.style.left = null;
        }
        function closeDropDownMenu() {
            btnBottomHeader.classList.remove("_active");
            dropDownMenu.classList.remove("_active");

            dropDownMenu.style.maxHeight = null;
            dropDownMenu.style.overflowY = null;
        }

    }
}

function load() {

    document.body.classList.remove("preload");
}

window.addEventListener("load", load);

document.addEventListener("DOMContentLoaded", ready);
