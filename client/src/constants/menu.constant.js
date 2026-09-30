// Prices are in INR. For repeated sections, use the higher-priced menu photos.
export const menu = {
  mainCourse: {
    title: 'Main Course',
    preparationTimeMinutes: 30,
    items: [
      { name: 'Signature Salisbury lamb steak', description: 'Minced lamb steak, sundried tomato mash, buttered veggies, mushroom jus', price: 675 },
      { name: 'Pan seared prawns with wilted amaranth, Malabar sauce', description: 'Buttered vegetables, creamy coconut rice', price: 595 },
      { name: 'Peri peri fish with buttered greens', description: 'Mashed potatoes, peri peri sauce', price: 550 },
      { name: 'Chicken lasagne', description: 'Slow cooked minced chicken layered with lasagne crepes and topped with cream sauce', price: 525 },
      { name: 'Scamorza filled tandoori spice rubbed chicken breast', description: 'Scallion mash potato, garlic butter veggies, tomato butter sauce', price: 525 },
      { name: 'Pan roasted chicken breast with chimichurri', description: 'Baked dauphine potatoes, ratatouille', price: 499 },
      { name: 'Goat cheese and Beetroot gnocchi with pumpkin crème', price: 525, vegetarian: true },
      { name: 'Ricotta, spinach and pea Filo parcel', description: 'Creamy ricotta, spinach and peas wrapped in filo pastry, jalapeno olive cream sauce', price: 525, vegetarian: true },
      { name: 'Peri peri paneer with buttered greens, mash potato', price: 499, vegetarian: true },
      { name: 'Char Siu tofu with sauteed greens, olive & chilly mash', price: 465, vegan: true },
    ],
  },
  pastas: {
    title: 'Pastas',
    pastaChoices: ['Spaghetti', 'Penne'],
    items: [
      { name: 'Chicken alfredo', description: 'Sliced chicken, mushrooms, cream sauce', price: 565 },
      { name: 'Chicken pesto cream', description: 'Sundried tomato and olive pesto', price: 550 },
      { name: 'Alfredo', description: 'Mushroom cream sauce', price: 525, vegetarian: true },
      { name: 'Primavera', description: 'Vegetables with cream sauce', price: 495, vegetarian: true },
      { name: 'Rosso veg', description: 'Vegetables with tomato cream sauce', price: 495, vegetarian: true },
      { name: 'Pesto cream', description: 'Pesto, olive, sundried tomato, cream', price: 495, vegetarian: true },
      { name: 'Aglio olio e pepperonchino', description: 'Garlic flakes, chillies, olive oil', price: 450, vegetarian: true },
      { name: 'Arabiatta', description: 'Tomato sauce with chilli flakes', price: 450, vegetarian: true },
      { name: 'Napolitana', description: 'Tomato basil sauce', price: 450, vegetarian: true },
    ],
    addOns: [
      { name: 'Parmesan cheese', price: 120 },
      { name: 'Chicken', price: 120 },
    ],
  },
  appetizers: {
    title: 'Appetizers',
    items: [
      { name: 'Cajun spiced fish fingers, tartare sauce', price: 375 },
      { name: 'Buffalo chicken wings', price: 350 },
      { name: 'Chicken nuggets, garlic aioli', note: "Kid's Special", price: 320 },
      { name: 'Jalapeno cheese poppers with salsa', price: 350, vegetarian: true },
      { name: 'Nachos with refried beans, cheese sauce, devils garnish, salsa', price: 350, vegetarian: true },
      { name: 'Cheese & chilly garlic toast', note: '2 pcs', price: 320, vegetarian: true },
    ],
  },
  soups: {
    title: 'Soups',
    items: [
      { name: 'Mushroom and thyme', price: 285, vegetarian: true },
      { name: 'Tomato and basil', price: 260, vegetarian: true },
    ],
  },
  sandwiches: {
    title: 'Sandwich',
    items: [
      { name: 'Lazy Suzy Deli', description: 'Chicken pepperoni, chicken lyonner n fried eggs, cheese, grilled onions, gherkins in multigrain bread', price: 415 },
      { name: 'Chicken tikka Ciabatta', description: 'Sourdough Ciabatta, chicken tikka, green peppers, onion, tomatoes, curried mayonnaise', price: 360 },
      { name: 'Paneer tikka Ciabatta', description: 'Sourdough Ciabatta, paneer tikka, green peppers, onion, tomatoes, curried mayonnaise', price: 360, vegetarian: true },
      { name: 'Grilled vegetable, chilly cheese melt with fresh Bocconcini', description: 'Open sandwich with grilled vegetables, chilly and cheese melt & fresh Bocconcini', price: 340, vegetarian: true },
    ],
  },
  gourmetBurgers: {
    title: 'Gourmet Burgers',
    items: [
      { name: 'Signature Salisbury lamb burger', description: 'Lamb patty, cheese, mushrooms, grilled onions, gherkins, and fried egg sunny side up', price: 510 },
      { name: "Suzy's signature burger", description: 'Any of the below burgers with cheese, mushrooms, grilled onions, gherkins, and fried egg sunny side up', price: 490 },
      { name: "Suzy's crunchy spicy fried chicken burger", description: 'Crispy and spicy fried chicken with garlic aioli', price: 460 },
      { name: 'Spiced vegetable and cheese burger', description: 'Crumb fried, spiced vegetable burger with cheese and ranch mayonnaise', price: 460, vegetarian: true },
    ],
  },
  eggsToOrder: {
    title: 'Eggs to order',
    items: [
      { name: 'Signature French omelette with toast and chicken sausage', description: 'Mushy folded omelette with chicken bacon, mushroom, & cheese', note: 'Chicken sausage 2 pcs', price: 325 },
      { name: 'Poached eggs on toast with chicken bacon & guacamole', price: 325 },
      { name: 'Lazy Suzy Benedict', description: 'Poached eggs on English muffin, with chicken ham, warm Hollandaise, cheese', price: 295 },
      { name: 'Thai kai jiao with chicken', description: 'Spicy aromatic Thai style flat omelette with chillies, onions and chopped chicken', price: 285 },
      { name: 'French style folded omelette with toast — vegetables', note: 'Mushy, runny, creamy', price: 250 },
      { name: 'French style folded omelette with toast — mushroom and cheese', note: 'Mushy, runny, creamy', price: 260 },
      { name: 'Indian masala omelette', note: 'Flat, well done', price: 240 },
      { name: 'Scrambled eggs on toast', note: 'Mushy, runny', price: 240 },
      { name: 'Indian style bhurjee', note: 'Spiced, well cooked', price: 240 },
      { name: 'Scrambled eggs on toast — mushroom and cheese', price: 250 },
      { name: 'Fried eggs on toast', note: 'Sunny side up / over easy / over hard', price: 220 },
    ],
    sides: [
      { name: 'Chicken sausage', note: '2 pcs', price: 150 },
      { name: 'In-house baked bread toast', note: '2 pcs', price: 40 },
    ],
  },
  signaturePancakes: {
    title: 'Signature Pancakes',
    note: 'Contains egg',
    items: [
      { name: 'Nutty Mascarpone and golden apricot', price: 325 },
      { name: 'Blueberry', price: 250 },
      { name: 'Hazelnut', price: 250 },
      { name: 'Peanut butter and salted caramel', price: 250 },
      { name: 'Chocolate', price: 245 },
      { name: 'Banana caramel', price: 245 },
      { name: 'Regular', price: 220 },
    ],
  },
  frenchToast: {
    title: 'French Toast',
    items: [
      { name: 'French Toast', note: 'Maple syrup, contains egg', price: 245 },
    ],
  },
  salads: {
    title: 'Salads',
    items: [
      { name: 'Goat cheese salad with avocado, olives & walnuts', description: 'Zaatar lavache, mixed lettuce, Raspberry Vinaigrette', price: 325, vegetarian: true },
      { name: 'Som tam Thai', description: 'Thai spicy raw papaya salad with pounded beans, tomato and roast peanuts', price: 285, vegetarian: true },
      { name: 'Mesclun of lettuce with orange and roast beetroot', description: 'Roast beetroot, walnuts, cherry tomatoes, orange, mixed lettuce, citrus herb vinaigrette', price: 285, vegetarian: true },
      { name: "Suzy's Caesar veg", description: 'Iceberg lettuce, olives, mushrooms, cherry tomatoes, croutons with signature dressing', price: 275, vegetarian: true },
      { name: "Suzy's Caesar chicken", description: 'Iceberg lettuce, chicken, olives, mushrooms, cherry tomatoes, croutons with signature dressing', price: 295 },
    ],
  },
  signatureDesserts: {
    title: 'Signature Desserts',
    items: [
      { name: 'Tira Misu', description: 'Our Italian favourite made of finest Mascarpone cheese, coffee-soaked devil sponge', price: 475 },
      { name: 'Chilled fresh mango and milk chocolate cheesecake', description: 'Mango and milk chocolate layered cheesecake', note: 'Eggless', price: 450 },
      { name: 'Saffron Pistaccio Tres Leches', description: 'Soft sponge cake steeped in melange of 3 forms of milk, flavoured with saffron', price: 450 },
      { name: 'Chocolate Mollet', description: 'Soft baked chocolate pudding with warm saucy centre, vanilla ice cream scoop', preparationTimeMinutes: 25, price: 450 },
      { name: '3 Chocolate walnut brownie, roast almond caramel ice cream', price: 450 },
      { name: 'Granny Smith apple pie', description: 'Served with a scoop of vanilla ice cream and Crème Anglaise', price: 425, vegetarian: true },
      { name: 'Creme Brulee classic', description: 'Vanilla bean flavoured slow baked cream custard with burnt sugar crust', price: 400 },
    ],
  },
  deluxePastries: {
    title: 'Selection of Deluxe Pastries',
    groups: [
      {
        title: 'Cheesecakes',
        items: [
          { name: 'Vegan nutty blueberry cheesecake', note: 'Contains coconut oil', price: 355, vegan: true },
          { name: 'Raspberry Philadelphia cheesecake', note: 'Baked', price: 355 },
          { name: 'Roast almond salted caramel cheesecake', note: 'Baked', price: 355 },
          { name: 'Triple chocolate cheesecake', note: 'Cold', price: 340, vegetarian: true },
        ],
      },
      {
        title: 'Chocolate Favourites',
        items: [
          { name: 'Belgian chocolate feuillant', price: 375 },
          { name: 'Raspberry & Belgian chocolate marquis', price: 375, vegetarian: true },
          { name: '3 Chocolate walnut brownie', price: 350 },
          { name: 'Signature chocolate truffle pastry', price: 315 },
        ],
      },
      {
        title: 'Coffee Pairings',
        items: [
          { name: 'Chicken tikka Puff', price: 180 },
          { name: 'Paneer tikka Puff', price: 180 },
          { name: "Suzy's Paris Brest", description: 'Gianduja creme and vanilla pastry cream', price: 295 },
          { name: 'Fresh cream pineapple pastry', price: 260 },
          { name: 'Banana walnut teacake', price: 190 },
          { name: 'French almond macaroons', note: 'Assorted flavours, per piece', price: 100, needsConfirmation: true, sourceLabel: 'Older supplied menu photograph' },
        ],
      },
    ],
  },
  beverages: {
    title: 'Beverages',
    groups: [
      {
        title: 'Coffee',
        items: [
          { name: 'Cafe Mocca', description: 'Coffee, chocolate, foamed milk', price: 285 },
          { name: 'Cafe latte', description: 'Single espresso, milk', price: 260 },
          { name: 'Lactose free milk coffee', price: 260 },
          { name: 'Cappuccino', description: 'Double espresso, foamed milk', price: 250 },
          { name: 'Americano', description: 'Double espresso, hot water', price: 220 },
          { name: 'Espresso Double', note: '60ml', price: 180 },
          { name: 'Espresso Single', note: '30ml', price: 120 },
          { name: 'Macchiato', description: 'Double espresso with spot of milk foam', price: 190 },
          { name: 'Hazelnut Cold coffee', price: 295 },
          { name: 'Lactose free Cold coffee', price: 290 },
          { name: 'Cold coffee', price: 285 },
        ],
      },
      {
        title: 'Hot Chocolate',
        items: [
          { name: 'Signature hot chocolate', price: 290 },
          { name: 'Hazelnut hot chocolate', price: 310 },
          { name: 'Raspberry Chilly', price: 310 },
        ],
      },
      {
        title: 'Tea',
        items: [
          { name: 'Green', price: 190 },
          { name: 'Masala', price: 190 },
          { name: 'Peppermint', price: 180 },
          { name: 'Earl Grey green', price: 180 },
          { name: 'Lemon', price: 180 },
          { name: 'Darjeeling', price: 180 },
          { name: 'Assam', price: 180 },
        ],
      },
      {
        title: 'Milkshakes',
        note: 'Real milk, real fruit',
        items: [
          { name: 'Very Berry', price: 295 },
          { name: 'Kit Kat', price: 295 },
          { name: 'Chocolate', price: 290 },
          { name: 'Cookie n cream', price: 290 },
          { name: 'Banana caramel', price: 280 },
          { name: 'Vanilla', price: 275 },
        ],
      },
      {
        title: 'Mocktails',
        items: [
          { name: 'Luscious lychee', description: 'Lychee nectar, coco lime crème', price: 295 },
          { name: 'Guava Breeze', description: 'Guava nectar, raspberry compote, lime, crème frais', price: 295 },
          { name: 'Fruits de Paradis', description: 'Mixed fruit juice, vanilla crème, strawberry syrup, lime', price: 295 },
        ],
      },
      {
        title: 'Iced Teas',
        items: ['Lemon mint', 'Peach', 'Green apple', 'Mango passion', 'Strawberry'].map(name => ({ name, price: 280 })),
      },
      {
        title: 'Mojitos',
        note: 'Non-alcoholic',
        items: ['Cranberry chilli', 'Green apple', 'Classic lemon mint', 'Mango passion', 'Strawberry', 'Peach and basil'].map(name => ({ name, price: 280 })),
      },
      {
        title: 'Ice cream Soda',
        items: [
          { name: 'Berry magic', description: 'Berry coulis, vanilla ice cream, aerated lime', price: 295 },
          { name: 'Choco vanilla', description: 'Chocolate, vanilla ice cream, aerated lime', price: 295 },
        ],
      },
      {
        title: 'Aerated',
        items: [
          { name: 'Fresh lime soda', price: 240 },
          { name: 'Fresh lime water', price: 220 },
          { name: 'Glass of Club soda', price: 70 },
          { name: 'Bottled water', note: '500ml', price: 35 },
        ],
      },
    ],
  },
  christmasSpecial: {
    title: 'Christmas special Turkey Lunch & Dinner',
    seasonal: true,
    pricesPerPerson: [
      { courses: 5, price: 2250 },
      { courses: 3, price: 1900 },
    ],
    taxNote: 'GST extra',
    courses: [
      {
        title: 'Appetiser',
        items: [
          { name: 'Port infused chicken liver pâté with artisanal toast' },
          { name: 'Prawn rechade' },
          { name: 'Moroccan chicken kebab' },
        ],
      },
      {
        title: 'Salad',
        items: [
          { name: 'Feta cheese, avocado & plum with mesclun of lettuce, roasted walnut', description: 'Raspberry vinaigrette, herb and sea salt crusted lavache' },
        ],
      },
      {
        title: 'Soup',
        items: [
          { name: 'Roast butternut pumpkin and thyme', description: 'Sour cream, parmesan croute' },
        ],
      },
      {
        title: 'Main course',
        items: [
          { name: 'Traditional Roast turkey, pistaccio and bread stuffing', description: 'Cranberry sauce, roast gravy, buttered vegetables, orange glazed sweet potato' },
          { name: 'Roast corn-fed chicken roulade with pistaccio and bread stuffing', description: 'Mushroom sauce, buttered vegetables, orange glazed sweet potato, roast gravy' },
        ],
      },
      {
        title: 'Dessert',
        items: [
          { name: 'Plum pudding with vanilla anglaise sauce, roasted almond and caramel ice cream' },
        ],
      },
    ],
  },
}
