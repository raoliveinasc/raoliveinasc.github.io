import Link from "next/link"

export default function Footer({  }) {
    const currentYear = new Date().getFullYear()

    return (
        <>
                <div className="footer-surround">
            <div className="top-footer">
                <div className="first-section">
                    <div className="footer-title">Venha nos visitar!</div>
                    <div className="footer-contact">
                        <div className="contact-item">
                        <i class="fa-solid fa-envelope fa-2x"></i>
                            <div className="contact-item-text">faleconosco@ottomotos.com.br</div>
                        </div>
                        <div className="contact-item">
                        <i class="fa-solid fa-location-dot fa-2x"></i>
                            <div className="contact-item-text">Endereço: Em Breve</div>
                        </div>
                        <div className="contact-item">
                        <i class="fa-solid fa-phone fa-2x"></i>
                            <div className="contact-item-text">+55 21 90000-0000</div>
                        </div>
                    </div>
                </div>
                <div className="second-section">
                    <div className="map-section">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7315.896294611728!2d-46.577343860095255!3d-23.534367325126414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ee7acdd50f5%3A0x3eeaf24eff368507!2sTatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1678565595647!5m2!1sen!2sbr" width="auto" height="auto" className="maps-styled" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="third-section">
                    <Link href="/" className="contact-social-media">
                        <i class="fa-brands fa-facebook fa-2x"></i>
                    </Link>
                    <Link href="/" className="contact-social-media">
                        <i class="fa-brands fa-twitter fa-2x"></i>
                    </Link>
                    <Link href="/" className="contact-social-media">
                        <i class="fa-brands fa-youtube fa-2x"></i>
                    </Link>
                </div>
            </div>
            <div className="bottom-footer">
            © {currentYear} by <b>Otto</b>Motos
            </div>
        </div>
        <div class="whatsapp-surround">
            <a href="https://api.whatsapp.com/send?phone=&amp;text=" class="whatsapp-button" title="Agende por whatsapp!">
                <i class="fa-brands fa-whatsapp fa-2x"></i>
            </a>
        </div>
        </>
    )
}