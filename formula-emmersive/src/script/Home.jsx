export function updateBlitz() {
    const stored = sessionStorage.getItem('data');
    return stored ? JSON.parse(stored) : 0;
}

export function addBlitz(quantity) {
    const current = updateBlitz();
    const newValue = current + quantity;
    sessionStorage.setItem('data', JSON.stringify(newValue));
}