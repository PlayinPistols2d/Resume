document.addEventListener('DOMContentLoaded', function () {
    const indicators = document.querySelectorAll('.indicator');
    const sections = document.querySelectorAll('section');
    
    function changeActiveIndicator() {
        let index = sections.length;
        
        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        indicators.forEach((indicator) => indicator.classList.remove('active'));
        indicators[index].classList.add('active');
    }
    
    changeActiveIndicator();
    window.addEventListener('scroll', changeActiveIndicator);
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            document.querySelector(this.dataset.target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: "images/REEPEConfCertificate-001.jpg", alt: "Participation & Oral Presentation at IEEE REEPE Conference - Certificate" },
        { src: "images/IEEE2ndPlaceCertificate-001.jpg", alt: "Second place for research paper at IEEE REEPE Conference - Certificate" },
        { src: "images/mastersDegreeDiploma-001.jpg", alt: "Master of Software Engineering (MSE) - Diploma" },
        { src: "images/engTranslatorDiploma-001.jpg", alt: "Translator in the field of professional communication (IT) - Diploma" },
        { src: "images/3rdDegreeDiplomaShukhov-001.jpg", alt: "Third Degree Diploma at All-Russian competition of research works in the field of engineering and humanities - Diploma" },
        { src: "images/1rdDegreeDiplomaShukhov-001.jpg", alt: "First Degree Diploma at the XVIII All-Russian Innovation Youth Scientific and Engineering Exhibition “Politechnika” - Diploma" },
        { src: "images/InnostartUmnik-001.jpg", alt: "Participation in the final event of the “UMNIK” program - Certificate" },
        { src: "images/khakhatonDiploma.jpg", alt: "Third place in the programming competition “Autumn Hackathon 2020” - Diploma" }
    ];

    let currentIndex = 0;

    const mainImage = document.getElementById("mainImage");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const close = document.querySelector(".close");
    const prevPreview = document.querySelector(".prev-preview");
    const nextPreview = document.querySelector(".next-preview");

    function showImage(index) {
        modalImg.src = images[index].src;
        captionText.innerHTML = images[index].alt;
        currentIndex = index;
    }

    function updateMainImage(index) {
        mainImage.src = images[index].src;
        mainImage.alt = images[index].alt;
        currentIndex = index;
    }

    mainImage.onclick = function () {
        modal.style.display = "block";
        showImage(currentIndex);
    }

    close.onclick = function () {
        modal.style.display = "none";
    }

    prev.onclick = function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    }

    next.onclick = function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    }

    prevPreview.onclick = function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateMainImage(currentIndex);
    }

    nextPreview.onclick = function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateMainImage(currentIndex);
    }

    document.addEventListener('keydown', function (event) {
        if (modal.style.display === "block") {
            if (event.key === "ArrowLeft") {
                prev.onclick();
            } else if (event.key === "ArrowRight") {
                next.onclick();
            } else if (event.key === "Escape") {
                close.onclick();
            }
        } else {
            if (event.key === "ArrowLeft") {
                prevPreview.onclick();
            } else if (event.key === "ArrowRight") {
                nextPreview.onclick();
            }
        }
    });
});
