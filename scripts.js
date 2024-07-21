// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            alert(`You clicked: ${this.textContent}`);
        });
    });
});
