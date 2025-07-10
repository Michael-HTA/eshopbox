<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\Role;
use App\Models\Shop;
use App\Models\ShopType;
use App\Models\User;
use App\Models\State;
use App\Models\Category;
use App\Models\Manufacturer;
use App\Models\Product;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public $cities = [
        // Yangon Region
        ['name' => 'Yangon', 'state_id' => 14],
        ['name' => 'Hlegu', 'state_id' => 14],
        ['name' => 'Thanlyin', 'state_id' => 14],
        ['name' => 'Dala', 'state_id' => 14],
        ['name' => 'Taikkyi', 'state_id' => 14],

        // Mandalay Region
        ['name' => 'Mandalay', 'state_id' => 8],
        ['name' => 'Pyin Oo Lwin', 'state_id' => 8],
        ['name' => 'Meiktila', 'state_id' => 8],
        ['name' => 'Myingyan', 'state_id' => 8],
        ['name' => 'Kyaukse', 'state_id' => 8],
    ];

    public $shopTypes = [
        'Grocery Store',
        'Clothing Store',
        'Pharmacy',
        'Electronics',
        'Bookstore',
        'Bakery',
        'Furniture',
        'Toy Store',
        'Jewelry Store',
        'Hardware Store',
    ];

    public $states = [
        'Ayeyarwady Region',
        'Bago Region',
        'Chin State',
        'Kachin State',
        'Kayah State',
        'Kayin State',
        'Magway Region',
        'Mandalay Region',
        'Mon State',
        'Rakhine State',
        'Sagaing Region',
        'Shan State',
        'Tanintharyi Region',
        'Yangon Region',
    ];



    public $productSpecificCategories = [
        'Milk',
        'Bread',
        'Rice',
        'Sugar',
        'Salt',
        'Butter',
        'Cheese',
        'Yogurt',
        'Eggs',
        'Cooking Oil',
        'Soft Drinks',
        'Mineral Water',
        'Juice',
        'Coffee',
        'Tea',
        'Cereal',
        'Snacks',
        'Biscuits',
        'Chocolate',
        'Instant Noodles',
        'Toothpaste',
        'Toothbrush',
        'Shampoo',
        'Soap',
        'Body Wash',
        'Face Wash',
        'Lotion',
        'Deodorant',
        'Razor',
        'Tissue',
        'Paracetamol',
        'Ibuprofen',
        'Antibiotic Cream',
        'Bandages',
        'Thermometer',
        'Cough Syrup',
        'Vitamin C',
        'Eye Drops',
        'Hand Sanitizer',
        'Face Mask',
        'T-Shirt',
        'Jeans',
        'Jacket',
        'Dress',
        'Skirt',
        'Shorts',
        'Socks',
        'Shoes',
        'Hat',
        'Belt',
        'Laptop',
        'Smartphone',
        'Tablet',
        'Monitor',
        'Keyboard',
        'Mouse',
        'Printer',
        'Router',
        'Webcam',
        'Charger',
        'Books',
        'Notebook',
        'Pen',
        'Pencil',
        'Marker',
        'Highlighter',
        'Stapler',
        'Eraser',
        'Ruler',
        'Glue Stick',
        'Chair',
        'Table',
        'Sofa',
        'Mattress',
        'Pillow',
        'Blanket',
        'Curtain',
        'Lamp',
        'Fan',
        'Clock',
        'Toy Car',
        'Doll',
        'Puzzle',
        'Board Game',
        'Lego',
        'Action Figure',
        'Crayons',
        'Coloring Book',
        'Play-Doh',
        'Bubble Maker',
        'Gold Ring',
        'Necklace',
        'Bracelet',
        'Earrings',
        'Watch',
        'Hair Clip',
        'Makeup Kit',
        'Perfume',
        'Nail Polish',
        'Mirror'
    ];

    public $manufacturers = [
        'Nestlé',               // Milk, Bread, Rice, Butter, Yogurt, Snacks, Chocolate, Cereal
        'Kraft Heinz',          // Cheese, Butter, Snacks, Biscuits, Instant Noodles
        'Unilever',             // Soap, Shampoo, Body Wash, Lotion, Deodorant
        'Colgate-Palmolive',    // Toothpaste, Toothbrush, Soap
        'Procter & Gamble',     // Shampoo, Face Wash, Lotion, Razor, Tissue
        'Johnson & Johnson',    // Bandages, Antibiotic Cream, Thermometer, Face Mask
        'Pfizer',               // Paracetamol, Ibuprofen, Cough Syrup, Vitamin C
        'Samsung',              // Smartphone, Tablet, Monitor, Keyboard, Mouse, Printer, Webcam, Charger
        'Apple',                // Smartphone, Tablet, Laptop, Charger
        'Dell',                 // Laptop, Monitor, Keyboard, Mouse, Printer
        'HP',                   // Printer, Laptop, Monitor, Keyboard
        'Logitech',             // Keyboard, Mouse, Webcam
        'Sony',                 // Monitor, Webcam, Smartphone
        'Nike',                 // T-Shirt, Shoes, Socks, Jacket
        'Adidas',               // T-Shirt, Shoes, Socks, Shorts
        'Levi’s',               // Jeans, Jacket, Shorts, Belt
        'H&M',                  // T-Shirt, Dress, Skirt, Hat
        'Zara',                 // Dress, Skirt, Jacket, Belt
        'IKEA',                 // Chair, Table, Sofa, Lamp, Curtain, Blanket, Pillow
        'Ashley Furniture',     // Sofa, Mattress, Chair, Table
        'Mattel',               // Toy Car, Doll, Puzzle, Board Game, Lego
        'Hasbro',               // Board Game, Puzzle, Action Figure, Coloring Book
        'LEGO Group',           // Lego, Building Sets
        'Ferrero',              // Chocolate, Biscuits, Snacks
        'Mars',                 // Chocolate, Snacks, Soft Drinks
        'PepsiCo',              // Soft Drinks, Juice, Snacks
        'Coca-Cola',            // Soft Drinks, Juice, Mineral Water
        'Reckitt Benckiser',    // Hand Sanitizer, Face Mask, Disinfectants
        'GlaxoSmithKline',      // Vitamin C, Eye Drops, Pharmaceuticals
        'L’Oréal',              // Makeup Kit, Perfume, Nail Polish
        'Estée Lauder',         // Makeup Kit, Perfume, Lotion
        'Fisher-Price',         // Toy Car, Doll, Crayons, Coloring Book
        'Crayola',              // Crayons, Coloring Book
        'Canon',                // Printer, Webcam
        'Nikon',                // Cameras, Webcam
        'Philips',              // Lamp, Fan, Razor
        'Bosch',                // Lamp, Fan, Household appliances
        '3M',                   // Bandages, Tissue, Glue Stick, Masking Tape
        'Sharp',                // Monitor, Printer, Fan
        'Bose',                 // Headphones, Speakers (if you add)
        'Rolex',                // Watch, Jewelry
        'Tiffany & Co.',        // Gold Ring, Necklace, Bracelet, Earrings
        'Pandora',              // Necklace, Bracelet, Earrings
        'Maybelline',           // Makeup Kit, Nail Polish
        'Nivea',                // Lotion, Body Wash, Face Wash
        'Duracell',             // Batteries (if you add)
        'Faber-Castell',        // Pen, Pencil, Marker, Highlighter
        'Staedtler',            // Pen, Pencil, Eraser, Ruler
    ];



    public function run(): void
    {
        // User::factory(10)->create();

        Role::factory()->create(['id' => 1, 'name' => 'Admin']);
        Role::factory()->create(['id' => 2, 'name' => 'User']);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'role_id' => 2,
        ]);

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'role_id' => 1,
        ]);

        foreach ($this->shopTypes as $index => $name) {
            ShopType::updateOrCreate(
                ['id' => $index + 1],
                ['name' => $name]
            );
        }


        foreach ($this->states as $index => $name) {
            State::updateOrCreate(
                ['id' => $index + 1],
                ['name' => $name]
            );
        }

        foreach ($this->cities as $index => $city) {
            City::updateOrCreate(
                ['id' => $index + 1],  // Assign explicit city ID starting at 1
                ['name' => $city['name'], 'state_id' => $city['state_id']]
            );
        }

        Shop::factory()->count(100)->create();

        foreach ($this->productSpecificCategories as $index => $name) {
            Category::updateOrCreate(
                ['id' => $index + 1],
                ['name' => $name]
            );
        }

        foreach ($this->manufacturers as $index => $name) {
            Manufacturer::updateOrCreate(
                ['id' => $index + 1],
                ['name' => $name]
            );
        }

        Product::factory()->count(1000)->create();
    }
}
