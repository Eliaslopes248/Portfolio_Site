
let button1 = document.getElementById('btn1')

let button2 = document.getElementById('btn2')

let button3 = document.getElementById('btn3')

let button4 = document.getElementById('btn4')

let button5 = document.getElementById('btn5')

let button6 = document.getElementById('btn6')

let button7 = document.getElementById('btn7')

let button8 = document.getElementById('btn8')

let button9 = document.getElementById('btn9')

let button10 = document.getElementById('btn10')





class Project {

    constructor(name, url, languages,desc) {
        this.name = name;
        this.url = url;
        this.languages = languages;
        this.desc = desc;

    }

    display_project() {
        // Create project box
        let project_box = document.createElement('div');
        project_box.classList.add('project-js-box');

        // Create and append the exit button
        let exit_button = document.createElement('button');
        exit_button.textContent = 'Exit';
        exit_button.classList.add('exit-button'); // Add a class for styling
        
        exit_button.addEventListener('click', () => {
            project_box.remove(); // Removes the project box from the document
        });
        
        
        // Create and append the h1 element for the project name
        let project_name = document.createElement('h1');
        project_name.textContent = this.name;
        project_box.appendChild(project_name);
        project_name.classList.add("proj-name")

       
         // Create and append the div element for languages

        let lang_h1 = document.createElement('h1')
        lang_h1.classList.add("lang-h1")
        lang_h1.textContent = 'Languages'
       
        let languages_div = document.createElement('div');
        languages_div.classList.add('languages-box');

        languages_div.appendChild(lang_h1)
        
        this.languages.forEach(language => {
            let language_item = document.createElement('p');
            language_item.textContent = language;
            languages_div.appendChild(language_item);
        });
        
        project_box.appendChild(languages_div);

        // create div to hold description of project

        let desc_div = document.createElement('div')
        desc_div.classList.add('desc-div')
        project_box.appendChild(desc_div)

        // create h1 for desc-box

        let desc_h1 = document.createElement('h1')
        desc_h1.textContent = 'Description'
        desc_h1.classList.add("desc-h1")
        desc_div.appendChild(desc_h1)

        let desc = document.createElement('p')
        desc.textContent = this.desc
        desc_div.appendChild(desc)

        // Create and append the button element with a link
        let visit_button = document.createElement('button');
        visit_button.classList.add('visit-btn')
        let visit_link = document.createElement('a');
        visit_link.classList.add('visit-link')
        visit_link.href = this.url;
        visit_link.textContent = 'Visit Project';
        visit_link.target = '_blank'; // Opens the link in a new tab
        visit_button.appendChild(visit_link);
        project_box.appendChild(visit_button);

        
        project_box.appendChild(exit_button);

        // Append the project box to the document body if not already present
        if (!document.querySelector('.project-js-box')) {
            document.body.appendChild(project_box);
            console.log('project displayed')
        }
    }
}
// project objects
let freshnfit = new Project('Fresh-N-Fit','file:///C:/Users/Heidy/OneDrive/Desktop/landing_pages_portfolio/catering_mockup.pdf',['JavaScript','HMTL','CSS'],'The catering site mock-up presents a sleek, user-friendly design. It highlights a large hero image and detailed service sections. Rich visuals and clear calls to action make it easy for clients to explore and inquire.')
let iphone_showcase = new Project('iPhone Showcase','#',['JavaScript','HTML','CSS'],'The showcase website highlights the new iPhone 15 with a sleek, modern design. It features interactive sections on specifications and advanced technology. Engaging visuals offer an immersive user experience.')
let pokesearch = new Project('PokeSearch','#',['JavaScript','HTML','CSS'],'The program uses a Pokémon API to retrieve and display data for searched Pokémon. Users can input a Pokémon name to access detailed information such as stats, abilities, and types. The interface provides an easy way to explore and learn about various Pokémon.')
let tutoring = new Project('Tutoring Site','#',['HTML','CSS'],'The landing page for the tutoring website features a clean, professional design with an easy-to-navigate layout. It highlights key services, tutor profiles, and client testimonials. The page aims to attract and engage potential students with clear calls to action and comprehensive information.')
let fruit = new Project('UpTown Fruits','#',['HTML','CSS'],'The landing page for the FreshFruits website offers a vibrant, visually appealing design showcasing a variety of fresh fruits. It highlights seasonal specials, product details, and offers an easy-to-use shopping interface. Engaging images and clear calls to action encourage visitors to explore and purchase premium, fresh fruit options.')
let pizza = new Project('Pizza Site','#',['HTML','CSS'],'The landing page for the pizza website features a mouth-watering design with enticing images of pizzas. It showcases the menu, special offers, and an easy ordering system. Engaging visuals and clear calls to action invite visitors to explore and order their favorite pizzas.')
let porsche = new Project('Car Landing page','#',['HTML','CSS','JavaScript'],'The landing page for the Porsche 911 showcase highlights the cars sleek design and advanced features. It includes high-resolution images, detailed specifications, and interactive elements to explore the vehicle. The page aims to captivate visitors with stunning visuals and compelling information about the Porsche 911.')
let tictac = new Project('Tic-Tac-Toe','#',['HTML','CSS','JavaScript'],'The Tic Tac Toe game features both player-versus-player (PvP) and player-versus-computer (CPU) modes. Users can challenge friends in PvP or test their skills against the CPU in single-player mode. The game offers a simple, engaging experience with an intuitive interface.')
let car_rental = new Project('Car Rental Site','#',['HTML','CSS','JavaScript'],'The car rental site features a user-friendly interface for browsing and booking a variety of vehicles. It highlights available options, rental rates, and special offers. Clear navigation and a streamlined booking process make it easy for users to find and rent their ideal car.')
let to_do = new Project('To-Do List','#',['HTML','CSS','JavaScript'],'The to-do list program allows users to customize tasks with options for color, importance, category, and font. It offers a flexible interface for managing and organizing tasks according to personal preferences. Enhanced visual and organizational features make task management efficient and personalized.')


//click event listeners
button1.addEventListener('click',()=>{
    freshnfit.display_project()
})
button2.addEventListener('click',()=>{
   iphone_showcase.display_project()
})
button3.addEventListener('click',()=>{
    pokesearch.display_project()
 })
 button4.addEventListener('click',()=>{
    tutoring.display_project()
 })
 button5.addEventListener('click',()=>{
    fruit.display_project()
 })
 button6.addEventListener('click',()=>{
    pizza.display_project()
 })
 button7.addEventListener('click',()=>{
    porsche.display_project()
 })

 button8.addEventListener('click',()=>{
    tictac.display_project()
 })
 button9.addEventListener('click',()=>{
    car_rental.display_project()
 })
 button10.addEventListener('click',()=>{
    to_do.display_project()
 })

console.log(freshnfit.name)