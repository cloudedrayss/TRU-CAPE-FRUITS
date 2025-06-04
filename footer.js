// Function to create and insert the footer
function createFooter() {
    // Footer HTML structure
    const footerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-row">
                <!-- Footer Column 1 -->
                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/services">Our services</a></li>
                        <li><a href="/privacy">Privacy policy</a></li>
                    </ul>
                </div>
               
                <!-- Footer Column 2 -->
                <div class="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Contact us</a></li>
                        <li><a href="/support">Support</a></li>
                    </ul>
                </div>
               
                <!-- Footer Column 3 -->
                <div class="footer-col">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
           
            <!-- Copyright -->
            <div class="footer-copyright">
                <p>&copy; ${new Date().getFullYear()} Tru-Cape. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
   
    // Insert the footer at the end of the body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
 
// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createFooter);