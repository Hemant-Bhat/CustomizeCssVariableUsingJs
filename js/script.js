const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const unit = this.dataset.unit || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}` + `${unit}`);
}

 inputs.forEach( input => input.addEventListener('input', handleUpdate));