

(() => {
	const onGalleryImageClick = () => {
        const galleryImageList = document.querySelectorAll("#aw-gallery li");
        const galleryImages = [...galleryImageList];

        galleryImages.forEach(image => {
        	image.addEventListener("click", event => {
        		galleryImageOpen(event.target);
        	})
        })
	}

const mobileWidth = 680;
const addMenuBackground = () => {
		const pageWidth = window.innerWidth;
		const boddyOffset = document.body.scrollTop || document.documentElement.scrollTop;
const navigation = document.querySelector("header nav");

        if(pageWidth > mobileWidth) {
            boddyOffset > 0 ? navigation.classList.add("po-nav-fixed") : navigation.classList.remove("po-nav-fixed");
        }
	}
const reorderResponsiveMenu = () => {
        const pageWidth = window.innerWidth;
        const navContainer = document.querySelector("header nav .po-container");
        const navigation = document.querySelector("header nav .po-navigation");
        const mobileNavigation = document.querySelector("body > .po-navigation");

        if (pageWidth <= mobileWidth && navigation) {
        	document.body.insertAdjacentElement("afterbegin", navigation);
        } else if (pageWidth > mobileWidth && mobileNavigation) {
        	navContainer.insertAdjacentElement("beforeend", mobileNavigation);
        }

	}
	


	const galleryImageOpen = image => {
		const imageSrc = image.getAttribute("src");
		const openedImage = `<div class='aw-backdrop'><img src='${imageSrc}' alt='' />
		                    <span class="aw-backdrop-close">X</span></div>`;

		document.body.insertAdjacentHTML("beforeend", openedImage);
		galleryImageClose();
	}

	const galleryImageClose = () => {
		const closeButton = document.querySelector(".aw-backdrop-close");

		closeButton.addEventListener("click", () => {
			const backdrop = document.querySelector(".aw-backdrop");
			backdrop.remove();
		})
	}

	const onTestimonialChange = () => {
		let firstChild, lastChild;
        const prevArrow = document.querySelector("#aw-testimonials-prev");
        const nextArrow = document.querySelector("#aw-testimonials-next");
        const testimonials = document.querySelector(".aw-testimonials ul");

        document.addEventListener("click", () => {
        	if(event.target === prevArrow) {
                lastChild = testimonials.lastElementChild;
                testimonials.insertAdjacentElement("afterbegin", lastChild);
        	} else if (event.target === nextArrow) {
                firstChild = testimonials.firstElementChild;
                testimonials.insertAdjacentElement("beforeend", firstChild);
        	}
        })
	}

	const onNavItemClick = () => {
		const navItemList = document.querySelectorAll(".aw-section-link");
		const navItems = [...navItemList];

		navItems.forEach(item => {
			item.addEventListener("click", event => {
				event.preventDefault();

				const sectionId = event.target.getAttribute("href") || event.target.dataset.href;

                scrollToSection(sectionId);
			})
		})
	}
	
	window.addEventListener("resize", () => {
		reorderResponsiveMenu();
	})
    
	onTestimonialChange();
	onGalleryImageClick();
	onNavItemClick();
	reorderResponsiveMenu();
	})();
