function flipCard() {
    this.classList.toggle("flip");
    isPair(this.getAttribute("card"));
}
