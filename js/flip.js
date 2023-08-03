function flipCard(item) {
    item.classList.toggle("flip");
    isPair(item.getAttribute("card"));
}
