document.addEventListener('DOMContentLoaded', () => {
    const properties = [
        { title: 'Beautiful House', img: 'images/1.jpg', price: '$500,000' },
        { title: 'Luxury Apartment', img: 'images/2.jpg', price: '$300,000' },
        { title: 'Modern Villa', img: 'images/3.jpg', price: '$750,000' },
        // Add more properties here
    ];

    const propertyList = document.querySelector('.property-list');
    properties.forEach(prop => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${prop.img}" alt="${prop.title}">
            <h3>${prop.title}</h3>
            <p>${prop.price}</p>
        `;
        propertyList.appendChild(div);
    });
});
