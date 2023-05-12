const { createApp } = Vue;

createApp({
    
    components:{
        "encabezado" :{
            template: '<header><a href="index.html" class="enlace"><img src="../img/ico/ico.jpg" alt="" class="logo"></a><h1 class="title">Mesa12</h1><nav><input type="checkbox" id="check"><label for="check" class="checkbtn"><i class="fas fa-bars"></i></label><ul class="n-bar"><li class="n-item"><a href="index.html">Inicio</a></li><li class="n-item"><a href="recetas.html">Recetas</a></li><li class="n-item"><a href="bebidas.html">Bebidas</a></li><li class="n-item"><a href="news.html">Noticias</a></li><li class="n-item"><a href="form.html">Contacto</a></li></ul></nav></header> '
        },
        "pie" : {
            template: '  <footer><article class="footer-container"><article class="footer-content-container"><h3 class="website-logo">Mesa12</h3><span class="footer-info">+54 011 1212 2121</span><span class="footer-info">Grupo12@Mesa12.com</span></article><article class="footer-menus"><article class="footer-content-container"><span class="menu-title">Navegación</span><a href="#top" class="menu-item-footer">Top</a><a href="index.html" class="menu-item-footer">Incio</a><a href="recetas.html" class="menu-item-footer">Recetas</a><a href="bebidas.html" class="menu-item-footer">Bebidas</a><a href="news.html" class="menu-item-footer">Noticias</a><a href="form.html" class="menu-item-footer">Contacto</a></article><article class="footer-content-container"><span class="menu-title">Legal</span><a href="#" class="menu-item-footer">Privacidad</a><a href="#" class="menu-item-footer">Cookies</a><a href="#" class="menu-item-footer">Legales</a></article></article><article class="footer-content-container"><span class="menu-title">Redes</span><article class="social-container"><a href="facebook.com" target="_blank" class="social-link"><i class="fa-brands fa-facebook"></i></a><a href="instagram.com" target="_blank" class="social-link"><i class="fa-brands fa-instagram"></i></a><a href="whatsapp.com" target="_blank" class="social-link"><i class="fa-brands fa-whatsapp"></i></a><a href="pinterest.com" target="_blank" class="social-link"><i class="fa-brands fa-pinterest"></i></a></article></article></article><article class="copyright-container"><span class="copyright">Copyright 2023, mesa12.com. Todos los derechos reservados.</span></article></footer>'
        },
    }
}).mount("#app");