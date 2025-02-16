// Dropdown functionality
document.addEventListener('DOMContentLoaded', function () {
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            const dropdown = this.querySelector('.dropdown');
            dropdown.classList.toggle('active');
        });
    });

    document.addEventListener('click', function () {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });
});

// Generate blog posts
const posts = [
    {
        title: 'Pesona Candi Borobudur di Pagi Hari',
        content: 'Menyaksikan matahari terbit di Candi Borobudur adalah pengalaman yang tak terlupakan. Kabut tipis menyelimuti stupa-stupa megah, menciptakan pemandangan mistis yang mempesona...',
        date: '10 Februari 2025'
    },
    {
        title: 'Mengungkap Misteri Candi Prambanan',
        content: 'Di balik kemegahan arsitekturnya, Candi Prambanan menyimpan berbagai kisah menarik. Dari legenda Roro Jonggrang hingga makna filosofis di setiap ukiran relievnya...',
        date: '5 Februari 2025'
    },
    {
        title: 'Sensasi Kuliner Malam di Malioboro',
        content: 'Jalan Malioboro berubah menjadi surga kuliner saat matahari terbenam. Dari gudeg hingga angkringan, setiap sudut menawarkan citarasa autentik Yogyakarta...',
        date: '16 Februari 2025'
    }
];

const articlesSection = document.querySelector('.articles');

posts.forEach(post => {
    const article = document.createElement('article');
    const linkHref = post.title.toLowerCase().includes('borobudur') ? 'pages/borobudur.html' :
        post.title.toLowerCase().includes('prambanan') ? 'pages/prambanan.html' :
            'pages/malioboro.html';

    article.innerHTML = `
        <h2><a href="${linkHref}" style="text-decoration: none; color: inherit; transition: color 0.3s;">${post.title}</a></h2>
        <p class="date">${post.date}</p>
        <p>${post.content}</p>
    `;
    articlesSection.appendChild(article);
});

// Image Slider
const images = [
    'images/slider1.jpg',
    'images/slider2.jpg',
    'images/slider3.jpg'
];
let currentImageIndex = 0;
const sliderImage = document.getElementById('slider-image');

// Enhanced image transition
function showImage(index) {
    sliderImage.style.opacity = '0';
    sliderImage.style.transform = 'scale(0.95)';

    setTimeout(() => {
        sliderImage.src = images[index];
        sliderImage.style.opacity = '1';
        sliderImage.style.transform = 'scale(1)';
    }, 300);
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

// Auto slide
setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}, 5000);