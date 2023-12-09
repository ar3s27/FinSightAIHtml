var content = document.querySelector('.content');
var whiteSection = document.querySelector('.white-section');
var overlay = document.querySelector('.overlay');

// Mouse tekerleği hareketi algılandığında
document.addEventListener('wheel', function(event) {
    // Tekerleği aşağı kaydırıyorsa
    if (event.deltaY > 0) {
        content.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Saydam arka plan
        overlay.style.filter = 'brightness(0.3)'; // Saydamlık efekti
        whiteSection.style.transform = 'translateY(0%)'; // Beyaz alanı aşağı kaydır
    } else {
        content.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Orijinal arka plan rengi
        overlay.style.filter = 'brightness(0.7)'; // Orijinal parlaklık
        whiteSection.style.transform = 'translateY(100%)'; // Beyaz alanı yukarı kaydır
    }
});