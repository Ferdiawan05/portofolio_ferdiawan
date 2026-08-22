const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});

function showSkill(skillName, button) {

    // Sembunyikan semua panel
    document.querySelectorAll(".skill-panel").forEach(panel => {
        panel.classList.remove("active");
    });

    // Hapus active dari semua tombol
    document.querySelectorAll(".skill-tab").forEach(tab => {
        tab.classList.remove("active");
    });

    // Tampilkan panel yang dipilih
    document.getElementById(skillName).classList.add("active");

    // Aktifkan tombol yang diklik
    button.classList.add("active");
}

/* =====================================================
   ACHIEVEMENT DATA
====================================================== */

const achievementData = {


    /* =================================================
       ACHIEVEMENT 01
       JUARA II IT E-SPORT
       2 FOTO
    ================================================== */

    achievement1: {

        year: "2022",

        title:
            "Juara II IT E-Sport Mobile Legends",

        place:
            "Institut Informatika dan Bisnis Darmajaya",

        images: [

            "achievement_img/2darmajaya.jpeg",

            "achievement_img/2darmajaya1.jpeg"

        ],

        description:
            "Meraih Juara II dalam kompetisi IT E-Sport Mobile Legends yang diselenggarakan oleh Institut Informatika dan Bisnis Darmajaya."

    },


    /* =================================================
       ACHIEVEMENT 02
       JUARA II E-SPORT
       1 FOTO
    ================================================== */

    achievement2: {

        year: "2022",

        title:
            "Juara II E-Sport Mobile Legends",

        place:
            "HIMAJIP FKIP Universitas Lampung",

        images: [

            "achievement_img/2unila.jpeg"

        ],

        description:
            "Meraih Juara II pada kompetisi E-Sport Mobile Legends yang diselenggarakan oleh HIMAJIP FKIP Universitas Lampung."

    },


    /* =================================================
       ACHIEVEMENT 03
       JUARA I TOURNAMENT
       2 FOTO
    ================================================== */

    achievement3: {

        year: "2023",

        title:
            "Juara I Tournament Mobile Legends",

        place:
            "Ganjar Milenial Center Lampung",

        images: [

            "achievement_img/1center.jpeg",

            "achievement_img/1center1.jpeg"

        ],

        description:
            "Meraih Juara I dalam Tournament Mobile Legends yang diselenggarakan oleh Ganjar Milenial Center Lampung."

    },


    /* =================================================
       ACHIEVEMENT 04
       WISUDAWAN
       1 FOTO
    ================================================== */

    achievement4: {

        year: "2025",

        title:
            "Wisudawan Berprestasi Bidang Nonakademik",

        place:
            "Institut Informatika dan Bisnis Darmajaya",

        images: [

            "achievement_img/piagam.jpeg"

        ],

        description:
            "Mendapatkan penghargaan sebagai Wisudawan Berprestasi Bidang Nonakademik atas pencapaian dan kontribusi selama masa perkuliahan."

    }

};



/* =====================================================
   OPEN ACHIEVEMENT
====================================================== */

function openAchievement(id) {


    const data =
        achievementData[id];


    /* =================================================
       CEK DATA
    ================================================== */

    if (!data) {

        console.error(
            "Achievement tidak ditemukan:",
            id
        );

        return;

    }


    /* =================================================
       INFORMASI
    ================================================== */

    document
        .getElementById("achievementYear")
        .textContent = data.year;


    document
        .getElementById("achievementTitle")
        .textContent = data.title;


    document
        .getElementById("achievementPlace")
        .textContent = data.place;


    document
        .getElementById("achievementDescription")
        .textContent = data.description;



    /* =================================================
       FOTO
    ================================================== */

    const imageContainer =
        document.getElementById(
            "achievementImages"
        );


    imageContainer.innerHTML = "";


    data.images.forEach(
        function(image, index) {


            const imageWrapper =
                document.createElement(
                    "div"
                );


            imageWrapper.className =
                "achievement-image-item";


            const img =
                document.createElement(
                    "img"
                );


            img.src = image;


            img.alt =
                data.title +
                " - Foto " +
                (index + 1);


            img.loading = "lazy";


            img.draggable = false;


            img.onerror = function() {

                console.error(
                    "FOTO TIDAK DITEMUKAN:",
                    image
                );

            };


            imageWrapper.appendChild(img);


            imageContainer.appendChild(
                imageWrapper
            );

        }
    );



    /* =================================================
       BUKA MODAL
    ================================================== */

    document
        .getElementById(
            "achievementModal"
        )
        .classList.add("active");


    document.body.classList.add(
        "modal-open"
    );

}



/* =====================================================
   CLOSE ACHIEVEMENT
====================================================== */

function closeAchievement() {

    document
        .getElementById(
            "achievementModal"
        )
        .classList.remove("active");


    document.body.classList.remove(
        "modal-open"
    );

}



/* =====================================================
   KLIK AREA LUAR MODAL
====================================================== */

const achievementModal =
    document.getElementById(
        "achievementModal"
    );


if (achievementModal) {

    achievementModal.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                achievementModal
            ) {

                closeAchievement();

            }

        }
    );

}



/* =====================================================
   TOMBOL ESC
====================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            achievementModal &&
            achievementModal.classList.contains(
                "active"
            )
        ) {

            closeAchievement();

        }

    }
);

// ================================================
// CERTIFICATION
// ================================================

const certificationData = {
    
    cert1: {
        year: "BNSP · 2025",
        title: "System Analyst",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        images: [
            "certification_img/sistem.jpeg",
            "certification_img/sistem1.jpeg"
        ],
        description:
            "Sertifikasi kompetensi yang menunjukkan kemampuan dalam menganalisis kebutuhan sistem, menyusun spesifikasi sistem, serta mendukung proses perancangan solusi teknologi informasi."
    },

    cert2: {
        year: "BNSP · 2025",
        title: "Junior Web Developer",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        images: [
            "certification_img/web.jpeg",
            "certification_img/web1.jpeg"
        ],
        description:
            "Sertifikasi kompetensi yang menunjukkan kemampuan dalam membangun, menguji, dan mengelola aplikasi web sesuai dengan standar kompetensi yang ditetapkan."
    },

    cert3: {
        year: "Speak-Up Academy Hub · 2026",
        title: "Clear Communication Mastery",
        issuer: "Speak-Up Academy Hub",
        images: [
            "certification_img/speakup.png"
        ],
        description:
            "Sertifikat pelatihan yang berfokus pada kemampuan komunikasi, khususnya dalam menyampaikan ide secara jelas, terstruktur, percaya diri, dan efektif."
    },

    cert4: {
        year: "BPJPH · 2025",
        title: "Pendamping Proses Produk Halal",
        issuer:
            "Badan Penyelenggara Jaminan Produk Halal (BPJPH) Kementerian Agama RI",
        images: [
            "certification_img/pendamping.png"
        ],
        description:
            "Sertifikat tanda lulus pelatihan Pendamping Proses Produk Halal yang diselenggarakan oleh Badan Penyelenggara Jaminan Produk Halal Kementerian Agama RI."
    }

};


function openCertification(id) {

    const data = certificationData[id];

    if (!data) {
        console.error(
            "Data certification tidak ditemukan:",
            id
        );
        return;
    }

    document.getElementById(
        "certificationYear"
    ).textContent = data.year;

    document.getElementById(
        "certificationTitle"
    ).textContent = data.title;

    document.getElementById(
        "certificationIssuer"
    ).textContent = data.issuer;

    document.getElementById(
        "certificationDescription"
    ).textContent = data.description;


    const imageContainer =
        document.getElementById(
            "certificationImages"
        );

    imageContainer.innerHTML = "";


    data.images.forEach(function(image, index) {

        const imageWrapper =
            document.createElement("div");

        imageWrapper.className =
            "certification-image-item";


        const img =
            document.createElement("img");

        img.src = image;

        img.alt =
            data.title +
            " - Foto " +
            (index + 1);

        img.loading = "lazy";

        img.draggable = false;


        imageWrapper.appendChild(img);

        imageContainer.appendChild(
            imageWrapper
        );

    });


    document.getElementById(
        "certificationModal"
    ).classList.add("active");

    document.body.classList.add(
        "modal-open"
    );
}


function closeCertification() {

    document.getElementById(
        "certificationModal"
    ).classList.remove("active");

    document.body.classList.remove(
        "modal-open"
    );
}


const certificationModal =
    document.getElementById(
        "certificationModal"
    );


if (certificationModal) {

    certificationModal.addEventListener(
        "click",
        function(event) {

            if (event.target === this) {
                closeCertification();
            }

        }
    );

}


document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            certificationModal &&
            certificationModal.classList.contains("active")
        ) {
            closeCertification();
        }

    }
);