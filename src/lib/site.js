// Central site config. Replace phone with the real number.
export const SITE = {
    name: "Butterfly Lawn & Landscape Enterprises",
    shortName: "Butterfly Lawn & Landscape",
    owner: "Neha Padwal",
    credentials: "BSc Agriculture",
    email: "butter1214fly@gmail.com",
    // NOTE: placeholder phone — replace with real number before launch.
    phoneDisplay: "+91 99879 75991",
    phoneTel: "+919987975991",
    whatsappNumber: "919987975991",
    address:
        "Shop No.1, Durga Mata Mandir Road, Near SK Patil Office, Kopar (E), Thane – 400709",
    shortAddress: "Kopar (E), Thane – 400709",
    mapQuery: "Durga Mata Mandir Road, Kopar East, Thane, 400709",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.83..."

};

export const waLink = (text = "Hi! I'd like to know more about your gardening services.") =>
    `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const telLink = () => `tel:${SITE.phoneTel}`;
