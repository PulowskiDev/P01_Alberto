/**
 * Archico js relacionado con el proyecto P01_Alberto
 */
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');

item1.addEventListener('click', (e) => {
    setTimeout(() => {
        window.open("file:///C:/Users/alber/OneDrive/Escritorio/Curso%20Javascript/P01_Alberto/pagina1.html", '_blank');
    }, 2000);
});
item2.addEventListener('click', (e) => {
    setTimeout(() => {
        window.open("file:///C:/Users/alber/OneDrive/Escritorio/Curso%20Javascript/P01_Alberto/pagina2.html", '_blank');
    }, 2000);
    
});
item3.addEventListener('click', (e) => {
    setTimeout(() => {
        window.open("file:///C:/Users/alber/OneDrive/Escritorio/Curso%20Javascript/P01_Alberto/pagina3.html", '_blank' );
    }, 2000);
    console.log('hola3');
    
});