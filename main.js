const products = [
    { name: '5000mAh Mini Portable Power Bank', price: '$13.49 <br>Ksh 1, 753', image: 'images/img1.avif', alt: '' },
    { name: 'Type 2 to Type 1 Charging Cable ', price: '$5.16<br>Ksh 671', image: 'images/img10.avif', alt: '' },
    { name: 'Soft Leather Handbags Luxury Designer', price: '$11.00<br>Ksh 1, 429', image: 'images/img11.avif', alt: '' },
    { name: 'Lace Princess Dresses For Kids', price: '$16.67<br>Ksh 2, 165', image: 'images/img12.avif', alt: '' },
    { name: 'MIOZING Fiber Pique nununu clothing', price: '$6.32<br>Ksh 822', image: 'images/img13.avif', alt: '' },
    { name: 'High Quality 7 in 1 USB Hub Type-C Hub Multiport', price: '$4.37<br>Ksh 568', image: 'images/img14.avif', alt: '' },
    { name: 'Travel Foldable Infant Baby Pushchair Stroller for 0-3 Years', price: '$23.20<br>Ksh 3, 014', image: 'images/img2.avif', alt: '' },
    { name: 'Lipstick Shape Lady Trimmer Lip Hair Remover', price: '$1.01<br>Ksh 132', image: 'images/img3.avif', alt: '' },
    { name: 'Wholesale 20L Black Forest Free Portable', price: '$60.14<br>Ksh 7, 810', image: 'images/img4.avif', alt: '' },
    { name: 'HPL Wood Grain formica marble hpl sheets', price: '$9.27 <br>Ksh 1, 205', image: 'images/img5.avif', alt: '' },
    { name: 'Fridge Top-freezer Refrigerator Home', price: '$61.69<br>Ksh 8, 009', image: 'images/img6.avif', alt: '' },
    { name: 'Bath Rain Shower Set 304 Stainless Steel', price: '$26.56 <br>Ksh 3, 450', image: 'images/img7.avif', alt: '' }
];

const productList = document.querySelector('.product-list');
let openFormContainer = null;
const warning = document.getElementById('warning');

products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <img src="${product.image}" alt="${product.alt}">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <button class="contact-supplier-btn">Contact Supplier</button>
        <div class="form-container">
            <form class="contact-form">
             <label for="product-type">Enter Product Type:</label>
                <input type="text" class="product-type" name="product-type" required>
                <br><br>
                
                <label for="quantity">Number of Products:</label>
                <input type="number" class="quantity" name="quantity" min="1" required>
                <br><br>

                <label for="color">Preferred Color:</label>
                <input type="text" class="color" name="color" required>
                <br><br>

                <label for="date">Preferred Delivery Date:</label>
                <input type="date" class="date" name="date" required>
                <br><br>

                <label for="phone-number">Your Phone Number:</label>
                <input type="tel" class="phone-number" name="phone-number" placeholder="Enter your phone number" required>
                <br><br>

                <label for="payment-mode">Mode of Payment:</label>
                <select id="payment-mode" class="payment-mode" name="payment-mode" required>
                    <option value="">Select a mode of payment</option>
                    <option value="credit-card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank-transfer">Bank Transfer</option>
                    <option value="cash">Cash</option>
                    <option value="mpesa">M-Pesa</option>
                    <!-- Add other payment modes as necessary -->
                </select>
                <br><br>

                <label for="supplier-hotline">Supplier Hotline Number:</label>
                <input type="text" id="supplier-hotline" class="supplier-hotline" name="supplier-hotline" value="1-800-555-1234" readonly>
                <br><br>

                <button type="submit">Submit</button>
                <button type="button" class="cancel-btn">Cancel</button>
            </form>
        </div>
    `;
    productList.appendChild(productItem);

    // Event listener for Contact Supplier button
    const contactSupplierBtn = productItem.querySelector('.contact-supplier-btn');
    const formContainer = productItem.querySelector('.form-container');
    const contactForm = productItem.querySelector('.contact-form');
    const cancelBtn = productItem.querySelector('.cancel-btn');

    contactSupplierBtn.addEventListener('click', () => {
        if (openFormContainer && openFormContainer !== formContainer) {
            warning.style.display = 'block';
            setTimeout(() => {
                warning.style.display = 'none';
            }, 2000);
            return;
        }

        // Show form and blur background
        formContainer.style.display = 'block';
        productList.classList.add('blur');
        openFormContainer = formContainer;
    });

    cancelBtn.addEventListener('click', () => {
        closeForm(formContainer);
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const quantity = contactForm.querySelector('.quantity').value;
        const color = contactForm.querySelector('.color').value;
        const date = contactForm.querySelector('.date').value;
        const phoneNumber = contactForm.querySelector('.phone-number').value;
        const paymentMode = contactForm.querySelector('.payment-mode').value;

        // Process form data
        console.log("Number of Products:", quantity);
        console.log("Preferred Color:", color);
        console.log("Preferred Delivery Date:", date);
        console.log("Phone Number:", phoneNumber);
        console.log("Mode of Payment:", paymentMode);

        // Close the form after submission
        closeForm(formContainer);
    });
});

// Function to close the form
function closeForm(formContainer) {
    formContainer.style.display = 'none';
    productList.classList.remove('blur');
    formContainer.querySelector('.contact-form').reset(); // Reset form fields
    openFormContainer = null;
}

// Sign-in and login functions display
const signinBtn = document.getElementById('signin-btn');
const loginBtn = document.getElementById('login-btn');
const authModal = document.getElementById('auth-modal');
const closeModal = document.querySelector('.close');
const signinForm = document.getElementById('signin-form');
const loginForm = document.getElementById('login-form');

signinBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    signinForm.style.display = 'block';
    loginForm.style.display = 'none';
});

loginBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    signinForm.style.display = 'none';
    loginForm.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    authModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === authModal) {
        authModal.style.display = 'none';
    }
});


