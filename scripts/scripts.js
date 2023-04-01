const $btnSeccion = document.querySelector('.icono-compartir');
const $btnMenu = document.querySelector('.icono-menu-compartir')
const $menuCompartir = document.querySelector('.menu-compartir');
const $seccionCompartir = document.querySelector('.seccion-compartir');

$btnSeccion.addEventListener('click', e => {
  $seccionCompartir.classList.toggle('ocultar-menu');
  $menuCompartir.classList.toggle('ocultar-menu');
})

$btnMenu.addEventListener('click', e => {
  $seccionCompartir.classList.toggle('ocultar-menu');
  $menuCompartir.classList.toggle('ocultar-menu');
})