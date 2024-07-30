<template>
  <div>
    <!-- Search icon -->
    <img
      src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png"
      alt="Search Icon"
      style="width: 25px; height: 25px; margin-left: -140px; margin-right: 50px; cursor: pointer;"
      @click="openPopup"
    >

    <!-- Popup container -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <div class="popup-header">
          <h2>Search</h2>
          <button @click="closePopup" aria-label="Close" class="close-button">x</button>
        </div>
        <div class="popup-body">
          <!-- <form class="form">
            <label for="search">
              <input 
                required
                autocomplete="off" 
                placeholder="Search for city, restaurant, cuisine, food, or dish" 
                id="search" 
                type="text" 
                style="color: black; font-family: Uber Move Light; font-weight: 100; font-size: 18px;"
                v-model="searchQuery"
                @input="searchAll"
                @keydown.down="moveDown"
                @keydown.up="moveUp"
                @keydown.enter.prevent="selectResult"
              >
              <div class="icon">
              <svg stroke-width="2.5" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-on">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
              <svg stroke-width="2.5" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-off">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
            </div>
              <button type="reset" class="close-btn" @click="clearSearch">
                <svg viewBox="0 0 20 20" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
                </svg>
              </button>
            </label>
            <div v-if="showSuggestions" class="suggestions">
              <div 
                v-if="filteredResults.length > 0"
                v-for="(result, index) in filteredResults" 
                :key="index" 
                @click="selectResult(result)"
                :class="{ 'selected': index === selectedIndex }"
                class="suggestion-item"
              >
                <span class="result-type">{{ result.type }}:</span> {{ result.name }}
              </div>
              <div v-if="showNotFound" class="not-found-message">
                Hmm... can't find this. Try again?
              </div>
            </div>
          </form> -->


          <form class="form">
          <label for="search">
            <input 
            required
                autocomplete="off" 
                placeholder="Search for city, restaurant, cuisine, food, or dish" 
                id="search" 
                type="text" 
                style="color: black; font-family: Uber Move Light; font-weight: 100; font-size: 18px;"
                v-model="searchQuery"
                @input="searchAll"
                @keydown.down="moveDown"
                @keydown.up="moveUp"
                @keydown.enter.prevent="selectResult"
            >
            <div class="icon">
              <svg stroke-width="4" stroke="currentColor" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-on">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round" stroke-linecap="round" style="transform: scale(1.6);" ></path>
              </svg>
              <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-off">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linejoin="round" stroke-linecap="round" style="color: black;"></path>
              </svg>
            </div>
            <button type="reset" class="close-btn" @click="clearSearch">
              <svg viewBox="0 0 20 20" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
              </svg>
            </button>
          </label>
          <div v-if="showSuggestions" class="suggestions">
              <div 
                v-if="filteredResults.length > 0"
                v-for="(result, index) in filteredResults" 
                :key="index" 
                @click="selectResult(result)"
                :class="{ 'selected': index === selectedIndex }"
                class="suggestion-item"
              >
                <span class="result-type">{{ result.type }}:</span> {{ result.name }}
              </div>
              <div v-if="showNotFound" class="not-found-message">
                Hmm... can't find this. Try again?
              </div>
            </div>
        </form>



          <h2 style="font-family: Uber Move; color: black; text-align: left; font-size: 20px;">Recent searches</h2>
          <div class="order-details">
  <div v-for="(address, index) in savedAddresses" :key="index" class="detail-item">
    <div class="address-box">
      <div class="address-text">
        <strong>{{ address }}</strong>
      </div>
      <button class="remove-button" @click="removeAddress(index)">×</button>
    </div>
  </div>
</div>





          
          <div class="buttons-container">
            <button @click="closePopup" class="button" style="margin-top: 15px; font-family: 'Uber Move';">Done</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const showPopup = ref(false);
const searchQuery = ref('');
const showSuggestions = ref(false);
const showNotFound = ref(false);
const selectedIndex = ref(-1);
const savedAddresses = ref([]);

function removeAddress(index){
  this.savedAddresses.splice(index, 1);

}
const restaurants = ref([
  'McDonald\'s', 'Burger King', 'Subway', 'Pizza Hut', 'KFC', 'Domino\'s', 'Taco Bell', 'Wendy\'s', 'Starbucks', 'Dunkin\' Donuts',
  'Chipotle', 'Five Guys', 'Panera Bread', 'Panda Express', 'Sonic Drive-In', 'Arby\'s', 'Jack in the Box', 'Papa John\'s', 'Culver\'s', 'Chick-fil-A',
  'In-N-Out Burger', 'Jimmy John\'s', 'Popeyes', 'Little Caesars', 'Whataburger', 'Raising Cane\'s', 'Zaxby\'s', 'Wingstop', 'Panda Express', 'Noodles & Company',
  'Olive Garden', 'Red Lobster', 'Outback Steakhouse', 'Applebee\'s', 'TGI Fridays', 'Cheesecake Factory', 'LongHorn Steakhouse', 'Maggiano\'s Little Italy', 'Hooters', 'Bahama Breeze',
  'Carrabba\'s Italian Grill', 'Bonefish Grill', 'Ruby Tuesday', 'Ted\'s Montana Grill', 'Fleming\'s Prime Steakhouse', 'Morton\'s The Steakhouse', 'The Capital Grille', 'Del Frisco\'s Double Eagle Steakhouse', 'Ruth\'s Chris Steak House', 'Sullivan\'s Steakhouse',
  'The Melting Pot', 'Benihana', 'Kona Grill', 'Tavern on the Green', 'The Palm', 'The Spaghetti Factory', 'J Alexander\'s', 'Seasons 52', 'Earl\'s Kitchen + Bar', 'Miller & Carter',
  'TGI Fridays', 'Hibachi Grill & Supreme Buffet', 'Mongolian BBQ', 'P.F. Chang\'s', 'Pei Wei', 'Noodles & Company', 'Café Rio', 'Costa Vida', 'Buca di Beppo', 'Fazoli\'s',
  'Brio Tuscan Grille', 'Eddie V\'s', 'Ocean Prime', 'Mastro\'s Steakhouse', 'Bubba Gump Shrimp Co.', 'Joe\'s Crab Shack', 'Landry\'s Seafood', 'Chart House', 'Red Robin', 'Cheddar\'s Scratch Kitchen',
  'Smokey Bones', 'Twin Peaks', 'Miller’s Ale House', 'Gordon Ramsay Burger', 'The Keg Steakhouse + Bar', 'Bennigan\'s', 'Joe\'s Italian Kitchen', 'Café du Monde', 'Creole Cuisine', 'Ember\'s Steakhouse',
  'Balthazar', 'Blue Smoke', 'Delmonico\'s', 'Grimaldi\'s Pizzeria', 'Serafina', 'Lupa', 'Spice Market', 'Vaucluse', 'Per Se', 'Eleven Madison Park',
  'Shake Shack', 'Le Bernardin', 'The NoMad Restaurant', 'Jean-Georges', 'Momofuku', 'The Spotted Pig', 'Blue Hill', 'Union Square Cafe', 'The Modern', 'The Breslin',
  'Woolworth Building', 'The Dutch', 'Katz\'s Delicatessen', 'Dough', 'Milk Bar', 'Xi’an Famous Foods', 'Jung Sik', 'Sushi Nakazawa', 'L’Artusi', 'Il Buco',
  'Polo Bar', 'Osteria Morini', 'Ippudo', 'Nobu', 'Boqueria', 'Friedman’s', 'Dante', 'Ribalta', 'Casa Mono', 'Maialino', 'Pasta Flyer', 'Marea',
  'La Esquina', 'Gato', 'Momofuku Ssäm Bar', 'Don Angie', 'Red Farm', 'Gotham Bar & Grill', 'Lucali', 'Momos', 'Loring Place', 'Aldea',
  'Nerai', 'L&W Oyster Co.', 'Cafe Mogador', 'The Butcher’s Daughter', 'Clover Hill', 'Luna Park', 'The Smith', 'Houseman', 'Boqueria', 'Quality Eats',
  'Minetta Tavern', 'Maison Premiere', 'Le Coucou', 'Gato', 'Empellón', 'Hill Country Barbecue Market', 'Petite Bouchée', 'Dough', 'Balthazar', 'Porsena',
  'La Vara', 'Ilili', 'Bar LunÀtico', 'The Rainbow Room', 'Balthazar', 'Raoul’s', 'The Dead Rabbit', 'Lenny’s Pizza', 'Cipriani', 'The Spotted Pig',
  'Kiki’s', 'Raku', 'Prime Meats', 'Buddakan', 'Le Relais de Venise', 'Carbone', 'The Polo Bar', 'Cherche Midi', 'Blue Hill', 'Minetta Tavern', 'Il Cantinori',
  'Pegu Club', 'Al Di La', 'Ilili', 'Gotham Bar & Grill', 'Szechuan Gourmet', 'The Halal Guys', 'Barney Greengrass', 'Tiffin Wallah', 'Tamarind', 'Koi',
  'Hanjan', 'Sushi Yasuda', 'Haru', 'Sushi Noz', 'Red Farm', 'Taïm', 'Momofuku Ko', 'Lafayette', 'The Breslin', 'Le Bernardin', 'The Modern',
  'Yakiniku Futago', 'Café Mogador', 'Morimoto', 'Ippudo', 'Perry Street', 'Shuka', 'Momos', 'David Burke Kitchen', 'Ramen Lab', 'Lupa', 'Kopitiam',
  'Mamma Mia', 'Burger Joint', 'Cafe Mogador', 'Ilili', 'Kin Shop', 'Café Boulud', 'Shalom Japan', 'Rezdôra', 'Amali', 'Mr. Chow', 'Emilio’s Ballato',
  'Joe’s Pizza', 'Pineapple Hill', 'Esquina', 'Fresco by Scotto', 'Nobu', 'Le Bernardin', 'Zara’s', 'Café Mogador', 'The Cecil', 'Dough',
  'Cafe Mogador', 'Lupa', 'Uovo', 'Lillian’s', 'Wildair', 'Morandi', 'Le Bernardin', 'The Modern', 'Poco', 'The Spotted Pig', 'Nobu',
  'Roberta’s', 'Otto', 'Lupa', 'The Spotted Pig', 'Le Bernardin', 'Pegu Club', 'Morimoto', 'New York Pizza', 'The Spotted Pig', 'Ippudo'
]);


const cuisines = ref([
  'Italian', 'Chinese', 'Mexican', 'Japanese', 'Indian',
  'Thai', 'French', 'Greek', 'Spanish', 'American',
  'Mediterranean', 'Korean', 'Vietnamese', 'Turkish', 'Lebanese',
  'Brazilian', 'Moroccan', 'Peruvian', 'Argentinian', 'Russian',
  'Caribbean', 'Filipino', 'Tex-Mex', 'Malaysian', 'British',
  'Indonesian', 'Portuguese', 'German', 'Cuban', 'Ethiopian',
  'South African', 'Israeli', 'Swedish', 'Hawaiian', 'Australian',
  'Irish', 'Scottish', 'Austrian', 'Belgian', 'Canadian',
  'Swiss', 'Norwegian', 'Danish', 'Finnish', 'Dutch',
  'Polish', 'Hungarian', 'Czech', 'Romanian', 'Bulgarian',
  'Ukrainian', 'Georgian', 'Armenian', 'Iranian', 'Iraqi',
  'Egyptian', 'Tunisian', 'Algerian', 'Kenyan', 'Nigerian',
  'South Korean', 'North Korean', 'Bangladeshi', 'Pakistani', 'Sri Lankan',
  'Nepalese', 'Bhutanese', 'Tibetan', 'Afghan', 'Saudi Arabian',
  'Emirati', 'Kuwaiti', 'Qatari', 'Omani', 'Jordanian',
  'Syrian', 'Palestinian', 'Levantine', 'Yemeni', 'Sudanese',
  'Senegalese', 'Ivorian', 'Ghanaian', 'Cameroonian', 'Ethiopian',
  'Angolan', 'Mozambican', 'Zimbabwean', 'Zambian', 'Malawian',
  'Tanzanian', 'Ugandan', 'Rwandan', 'Burundian', 'Madagascan',
  'Mauritian', 'Seychellois', 'Fijian', 'Samoa', 'Tongan',
  'Papua New Guinean', 'Solomon Islands', 'Vanuatuan', 'Micronesian', 'Palauan',
  'Marshallese', 'Kiribati', 'Tuvaluan', 'Cook Islands', 'Niuean',
  'Tokelauan', 'Nauruan', 'American Samoan', 'Wallis and Futuna', 'New Caledonian',
  'French Polynesian', 'Guamanian', 'Chamorro', 'Mariana Islander', 'Finnish',
  'Estonian', 'Latvian', 'Lithuanian', 'Slovak', 'Croatian',
  'Bosnian', 'Serbian', 'Montenegrin', 'Kosovar', 'Albanian',
  'Macedonian', 'Cypriot', 'Maltese', 'Icelandic', 'Greenlandic',
  'Faroe Islands', 'Luxembourgish', 'Liechtensteiner', 'Monégasque', 'Andorran',
  'Sanmarinese', 'Vatican', 'Central African', 'Chadian', 'Gabonese',
  'Congolese', 'Equatorial Guinean', 'São Toméan', 'Cape Verdean', 'Sierra Leonean',
  'Liberian', 'Guinean', 'Ivorian', 'Burkinabé', 'Togolese',
  'Beninese', 'Nigerien', 'Mauritanian', 'Western Saharan', 'Comorian',
  'Djiboutian', 'Somali', 'Eritrean', 'Swazi', 'Lesothoan',
  'Botswanan', 'Namibian', 'Sahrawi', 'Seychellois', 'Palauan',
  'Marshall Islander', 'Kiribati', 'Tuvaluan', 'Nauruan', 'Haitian',
  'Antiguan and Barbudan', 'Barbudan', 'Grenadian', 'Dominican', 'Saint Lucian',
  'Saint Vincent and the Grenadines', 'Trinidadian and Tobagonian', 'Jamaican', 'Bahamian', 'Guyanese',
  'Surinamese', 'Cape Verdean', 'Cuban', 'Puerto Rican', 'Mexican',
  'Colombian', 'Venezuelan', 'Ecuadorian', 'Peruvian', 'Bolivian',
  'Chilean', 'Paraguayan', 'Uruguayan', 'Argentinian', 'Brazilian',
  'Papua New Guinean', 'Fijian', 'Solomon Islander', 'Vanuatuan', 'Ni-Vanuatu'
]);


const foods = ref([
  'Pizza', 'Burger', 'Sushi', 'Pasta', 'Tacos',
  'Curry', 'Salad', 'Steak', 'Sandwich', 'Ramen',
  'Burrito', 'Kebab', 'Falafel', 'Dim Sum', 'Noodles',
  'Paella', 'Samosa', 'Spring Roll', 'Chow Mein', 'Quesadilla',
  'Gyro', 'Enchiladas', 'Shawarma', 'Meatballs', 'Risotto',
  'Fajitas', 'Chicken Wings', 'Peking Duck', 'Moussaka', 'Hot Dog',
  'Goulash', 'Bratwurst', 'Tandoori Chicken', 'Ceviche', 'Clam Chowder',
  'Pancakes', 'Crepes', 'Waffles', 'Bagels', 'Donuts',
  'Croissant', 'Macarons', 'Brownies', 'Cheesecake', 'Apple Pie',
  'Tiramisu', 'Gelato', 'Ice Cream', 'Muffins', 'Cupcakes',
  'Lobster', 'Crab Cakes', 'Fettuccine Alfredo', 'Pesto Pasta', 'Lasagna',
  'Chicken Parmesan', 'Beef Stroganoff', 'Pot Roast', 'Shepherd’s Pie', 'Chili',
  'Lasagna', 'Risotto', 'Shrimp Scampi', 'Beef Wellington', 'Sauerbraten',
  'Fondue', 'Goulash', 'Ratatouille', 'Bouillabaisse', 'Jambalaya',
  'Gumbo', 'Cornbread', 'Deviled Eggs', 'Baked Ziti', 'Pork Ribs',
  'Barbecue Chicken', 'Buffalo Wings', 'Chicken Caesar Salad', 'Eggplant Parmesan', 'Sweet and Sour Pork',
  'Fried Rice', 'Cabbage Rolls', 'Beef Tacos', 'Chicken Fajitas', 'Cheeseburger',
  'Chicken Fried Rice', 'Pad Thai', 'Pork Schnitzel', 'Chimichanga', 'Beef Empanadas',
  'Chicken Teriyaki', 'Tofu Stir-Fry', 'Vegetable Samosas', 'Cabbage Soup', 'Potato Salad',
  'Hummus', 'Pita Bread', 'Shakshuka', 'Stuffed Peppers', 'Meatloaf',
  'Lentil Soup', 'Baba Ganoush', 'Kofta', 'Dolmas', 'Moussaka',
  'Spanakopita', 'Baba Ghanoush', 'Ratatouille', 'Chili Con Carne', 'Bangers and Mash',
  'Corn on the Cob', 'Fried Chicken', 'Pork Belly', 'Roast Chicken', 'Duck Confit',
  'Beef Brisket', 'Roast Beef', 'Braised Short Ribs', 'Chicken Pot Pie', 'Clams Casino',
  'Fettuccine Carbonara', 'Baked Mac and Cheese', 'Goulash', 'Sweet Potato Fries', 'Beef Bulgogi',
  'Mongolian Beef', 'Hot and Sour Soup', 'Dumplings', 'Chowder', 'Clams',
  'Fish Tacos', 'Banh Mi', 'Pho', 'Beef Empanadas', 'Seafood Paella',
  'Seafood Gumbo', 'Grilled Cheese', 'Roasted Vegetables', 'Pulled Pork', 'BBQ Ribs',
  'Chicken Satay', 'Thai Green Curry', 'Mongolian Noodles', 'Spaghetti Carbonara', 'Chicken Alfredo',
  'Vegetarian Chili', 'Tom Yum Soup', 'Falafel Wrap', 'Steak Frites', 'Tandoori Lamb',
  'Chicken Shawarma', 'Greek Salad', 'Margherita Pizza', 'Buffalo Chicken Dip', 'Crab Rangoon',
  'Chicken Tenders', 'Egg Drop Soup', 'Potato Wedges', 'Fish and Chips', 'Spaghetti Bolognese',
  'Churros', 'Rice Pudding', 'Baklava', 'Bread Pudding', 'Peach Cobbler',
  'Strawberry Shortcake', 'Lemon Bars', 'Cannoli', 'Panna Cotta', 'Rugelach',
  'Mocha Cake', 'Carrot Cake', 'Gingerbread', 'Pumpkin Pie', 'Pecan Pie',
  'Chocolate Lava Cake', 'Key Lime Pie', 'Eclairs', 'Chiffon Cake', 'Lamingtons',
  'Baba Au Rhum', 'Almond Cake', 'Coconut Macaroons', 'Gingerbread Cookies', 'Sugar Cookies',
  'Jelly Donuts', 'Cheesecake Brownies', 'Black Forest Cake', 'Opera Cake', 'Baklava',
  'Creme Brulee', 'Poff Poff', 'Beef Wellington', 'Scallops', 'Tandoori Prawns'
]);

const dishes = ref([
  'Margherita Pizza', 'Cheeseburger', 'California Roll', 'Spaghetti Carbonara', 'Fish Tacos',
  'Chicken Tikka Masala', 'Caesar Salad', 'Filet Mignon', 'Club Sandwich', 'Tonkotsu Ramen',
  'Beef Stroganoff', 'Chicken Alfredo', 'Pad Thai', 'Sushi Roll', 'Peking Duck', 'Lamb Chops', 'Moussaka', 'Ratatouille', 'Bangers and Mash', 'Paella',
  'Risotto', 'Burritos', 'Fettuccine Alfredo', 'Grilled Cheese Sandwich', 'Buffalo Wings', 'Goulash', 'Beef Wellington', 'Panzanella', 'Clam Chowder', 'Maki Roll',
  'Panzanella Salad', 'Ramen', 'Pho', 'Greek Salad', 'Pasta Primavera', 'Tandoori Chicken', 'Carnitas', 'Coq au Vin', 'Duck Confit', 'Sauerbraten',
  'Bulgur Wheat Salad', 'Chicken Parmesan', 'Katsu Curry', 'Pasta Bolognese', 'Lasagna', 'Chow Mein', 'Shrimp Scampi', 'Pulled Pork', 'Beef Tacos', 'Pita Falafel',
  'Pita Hummus', 'Falafel Wrap', 'Beef Empanadas', 'Stuffed Bell Peppers', 'Crispy Pork Belly', 'Grilled Salmon', 'Beef Skewers', 'Chicken Satay', 'Pork Schnitzel', 'Crepes',
  'Baked Ziti', 'Stuffed Mushrooms', 'Eggplant Parmesan', 'BBQ Ribs', 'Sloppy Joes', 'Meatballs', 'Crab Cakes', 'Minestrone Soup', 'Sweet and Sour Chicken', 'Coconut Shrimp',
  'Lobster Roll', 'Tuna Tartare', 'Osso Buco', 'Shrimp Tacos', 'Korean BBQ Beef', 'Bulgogi', 'Chimichangas', 'Jambalaya', 'Chicken Quesadilla', 'Jerk Chicken',
  'Tandoori Lamb', 'Chicken Shawarma', 'Egg Drop Soup', 'Kimchi Fried Rice', 'Chicken Kiev', 'Lentil Soup', 'Mongolian Beef', 'Samosas', 'Spanakopita', 'Chicken Curry',
  'Pork Buns', 'Tom Yum Soup', 'Beef Stroganoff', 'Spicy Tuna Roll', 'Miso Soup', 'Chicken and Waffles', 'Biryani', 'Chicken Enchiladas', 'Crêpes Suzette', 'Hainanese Chicken Rice',
  'Chili Con Carne', 'Moules Frites', 'Shrimp Pad Thai', 'Char Siu', 'Banh Mi', 'Buffalo Chicken Dip', 'Pork Belly Buns', 'Cuban Sandwich', 'Ramen Burger', 'Salmon Teriyaki',
  'Chicken Caesar Wrap', 'Beef Kofta', 'Hot Pot', 'Mango Sticky Rice', 'Pork Adobo', 'Eggplant Rollatini', 'Marinated Tofu', 'Vegetable Tempura', 'Teriyaki Chicken', 'Chicken Fried Rice',
  'Duck Curry', 'Sweet Potato Fries', 'Ratatouille', 'Goulash', 'Chicken Marsala', 'Pork Souvlaki', 'Baklava', 'Pasta Puttanesca', 'Cheese Fondue', 'Moussaka',
  'Stuffed Cabbage Rolls', 'Mediterranean Quinoa Salad', 'Lamb Shawarma', 'Sichuan Hot Pot', 'Spaghetti Bolognese', 'Seafood Paella', 'Vegetable Curry', 'Taco Salad', 'Shrimp and Grits', 'Lamb Vindaloo',
  'Beef Bourguignon', 'Roasted Chicken', 'Pork Chops', 'Black Bean Soup', 'Pork Fried Rice', 'Sweet and Sour Pork', 'Greek Moussaka', 'BBQ Chicken Pizza', 'Eggplant Curry', 'Fried Rice',
  'Tandoori Chicken Pizza', 'Chicken Fajitas', 'French Toast', 'Beef Stroganoff', 'Beef Brisket', 'Turkey Chili', 'Vegetable Lasagna', 'Mushroom Risotto', 'Lamb Kebab', 'Clam Bake',
  'Crab Rangoon', 'Lamb Rogan Josh', 'Fried Calamari', 'Lobster Bisque', 'Cheese Ravioli', 'Chicken Tetrazzini', 'Mango Chicken', 'Eggs Benedict', 'Pork Tacos', 'Chicken Nachos',
  'Shakshuka', 'Crispy Chicken Sandwich', 'Chicken and Dumplings', 'Beef Chili', 'Vegetarian Chili', 'Pork Stew', 'Lamb Kofta', 'Barbecue Chicken', 'Pasta Carbonara', 'Chicken Fettuccine',
  'Mango Lassi', 'Vegetable Stir-Fry', 'Sesame Chicken', 'Beef Empanadas', 'Moroccan Tagine', 'Pasta Salad', 'Chicken Satay Skewers', 'Taco Soup', 'Meatloaf', 'Beef Kebabs',
  'Chicken Fricassée', 'Chicken Cacciatore', 'Cornbread', 'Garlic Shrimp', 'Salmon Cakes', 'Beef Bourguignon', 'Shrimp Fried Rice', 'Thai Green Curry', 'Fried Chicken', 'Quiche Lorraine',
  'Zucchini Fritters', 'Pork Ramen', 'Chicken Pot Pie', 'Beef Short Ribs', 'Duck Breast', 'Tandoori Shrimp', 'Pasta Alfredo', 'Crispy Duck', 'Greek Gyro', 'Tom Kha Gai'
]);


const filteredResults = computed(() => {
  if (searchQuery.value.length < 2) return [];
  const query = searchQuery.value.toLowerCase();
  
  // const matchingCities = cities.value.filter(city => 
  //   city.toLowerCase().includes(query)
  // ).map(item => ({ type: 'City', name: item }));
  
  const matchingRestaurants = restaurants.value.filter(restaurant => 
    restaurant.toLowerCase().includes(query)
  ).map(item => ({ type: 'Restaurant', name: item }));
  
  const matchingCuisines = cuisines.value.filter(cuisine => 
    cuisine.toLowerCase().includes(query)
  ).map(item => ({ type: 'Cuisine', name: item }));
  
  const matchingFoods = foods.value.filter(food => 
    food.toLowerCase().includes(query)
  ).map(item => ({ type: 'Food', name: item }));
  
  const matchingDishes = dishes.value.filter(dish => 
    dish.toLowerCase().includes(query)
  ).map(item => ({ type: 'Dish', name: item }));
  
  return [
    // ...matchingCities,
    ...matchingRestaurants,
    ...matchingCuisines,
    ...matchingFoods,
    ...matchingDishes
  ];
});

function openPopup() {
  showPopup.value = true;
  if (savedAddresses.value.length > 0) {
    searchQuery.value = savedAddresses.value[0];
  }
}

function closePopup() {
  showPopup.value = false;
  searchQuery.value = '';
  showSuggestions.value = false;
  showNotFound.value = false;
}

function searchAll() {
  selectedIndex.value = -1;
  showSuggestions.value = searchQuery.value.length >= 2;
  showNotFound.value = searchQuery.value.length >= 2 && filteredResults.value.length === 0;
}

function moveDown() {
  if (selectedIndex.value < filteredResults.value.length - 1) {
    selectedIndex.value++;
  }
}

function moveUp() {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  }
}

function selectResult(result) {
  if (typeof result === 'string') {
    searchQuery.value = result;
  } else {
    searchQuery.value = result.name;
  }
  if (!savedAddresses.value.includes(searchQuery.value)) {
    savedAddresses.value.unshift(searchQuery.value);
    // Keep only the last 3 searches
    if (savedAddresses.value.length > 6) {
      savedAddresses.value.pop();
    }
  }
  showSuggestions.value = false;
  showNotFound.value = false;

  // closePopup();
}

function clearSearch() {
  searchQuery.value = '';
  showSuggestions.value = false;
  showNotFound.value = false;
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 600px;
}

.divider{
  border: None;
  color: #f3f3f3;
  height: 3px;
  width: 438px;
  background-color: #f3f3f3;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: -60px;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.popup-header h2 {
  font-family: 'Uber Move';
  color: black;
  margin: 0;
}

.close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: black;
}

.popup-body {
  display: flex;
  flex-direction: column;
}

.form {
  --input-bg: #f3f3f3;
  color: black;
  --padding: 1.5em;
  --rotate: 80deg;
  --gap: 2em;
  --icon-change-color: #000000;
  --height: 55px;
  width: 580px;
  padding-inline-end: 1em;
  background: var(--input-bg);
  position: relative;
  border-radius: 20px;
}



.form label {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--height);
}

.form input {
  width: 100%;
  padding-inline-start: calc(var(--padding) + var(--gap));
  outline: none;
  background: none;
  border: 0;
}

.icon {
  position: absolute;
  left: var(--padding);
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  right: calc(var(--padding) - var(--gap));
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  padding: 0.1em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.3s;
  opacity: 0;
  transform: scale(0);
  visibility: hidden;
}

.suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 2px solid #f3f3f3;
  border-top: none;
  max-height: 500px;
  overflow-y: auto;
  z-index: 1;
  border-radius: 10px;
}

.suggestion-item {
  padding: 10px;
  cursor: pointer;
  text-align: left;
}

.suggestion-item:hover, .suggestion-item.selected {
  background-color: #f0f0f0;
}

.result-type {
  font-weight: bold;
  margin-right: 5px;
}

.not-found-message {
  padding: 10px;
  color: #666;
  text-align: center;
  font-family: 'Uber Move';
}

.button {
  background-color: #000000;
  height: 59px;
  width: 100%;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 500px;
  cursor: pointer;
  font-family: 'Uber Move';
  margin-top: 15px;
}
.order-details {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.detail-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.address-box {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  position: relative;
}

.address-text {
  color: black;
  font-family: Uber Move, sans-serif;
  font-weight: 200;
  margin-right: 30px;
}

.remove-button {
  background: none;
  border: none;
  color: #000000;
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  font-size: 18px;
  buttom:15px;
  /* right: 10px;
  top: 10px; */
  right: -13px;
}


.form svg {
  /* display: block; */
  color: #111;
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  position: absolute;
  height: 15px;
}
/* search icon */
.icon {
  position: absolute;
  left: var(--padding);
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  display: flex;
  justify-content: center;
  align-items: center;
}
/* arrow-icon*/
.swap-off {
  transform: rotate(-80deg);
  opacity: 0;
  visibility: hidden;
}
/* close button */
.close-btn {
  /* removing default bg of button */
  background: none;
  border: none;
  right: calc(var(--padding) - var(--gap));
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
  padding: 0.1em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.3s;
  opacity: 0;
  transform: scale(0);
  visibility: hidden;
}

.form input:focus ~ .icon {
  transform: rotate(var(--rotate)) scale(1.3);
}

.form input:focus ~ .icon .swap-off {
  opacity: 1;
  transform: rotate(-80deg);
  visibility: visible;
  color: var(--icon-change-color);
}

.form input:focus ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.form input:valid ~ .icon {
  transform: scale(1.3) rotate(var(--rotate))
}

.form input:valid ~ .icon .swap-off {
  opacity: 1;
  visibility: visible;
  color: var(--icon-change-color);
}

.form input:valid ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.form input:valid ~ .close-btn {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  transition: 0s;
}


  </style>