// Step :
// - making class
// - making object
// - called it so it appears in browser using loop and innerHTML
// - refactor the code so it implements inheritance AuthorTestimonial
// - refactor the code so it implement encapsulation, use getter and settet(the key point is : encapsulation make app more secure by implementing restriction)
// - refactor the code so it implement polymorphism by making class CompanyTestimonial and override get author(the key point is : polymorphism implement and overriding)
// - refactor the code so it implement abstraction by making get testimonialHTML and get author throw error when children didn't use it

class Testimonial {
    #quote = "";
    #image = "";

    constructor(quote, image) {
        this.#quote = quote;
        this.#image = image;
    }
    
    get quote() {
        return this.#quote;
    }

    get image() {
        return this.#image;
    }

    get author() {
        throw new Error("getAuthor() method not implemented.");
    }

    get testimonialHTML() {
        return `
        <div class="testimoniall">
            <div class="image-card">
                 <img src="${this.image}" alt="" />
            </div>
            <div class="title-sub-title">
                <div class="title">${this.author}</div>
                <div class="sub-title">${this.quote}</div>
            </div>    
        </div>`;
    }
}

class AuthorTestimonial extends Testimonial {
    #author = "";

    constructor(author, quote, image) {
        super(quote, image);
        this.#author = author;
    }

    get author() {
        return this.#author;
    }
}

class CompanyTestimonial extends Testimonial {
    #company = "";
  
    constructor(author, quote, image) {
      super(quote, image);
      this.#company = author;
    }
  
    get author() {
      return this.#company + " Company";
    }
}

const testimonial1 = new AuthorTestimonial(
    "Jojo Keling",
    "Good game",
    "img/Parental_Advisory_label.png"
);

const testimonial2 = new AuthorTestimonial(
    "Keling Item",
    "Wellplayed",
    "img/Parental_Advisory_label.png"
);

const testimonial3 = new AuthorTestimonial(
    "Jemb Kud",
    "Mantaps",
    "img/Parental_Advisory_label.png"
);

let testimonialData = [testimonial1, testimonial2, testimonial3];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
}

document.getElementById("testimonial").innerHTML = testimonialHTML;

