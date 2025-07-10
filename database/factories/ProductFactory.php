<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Manufacturer;
use App\Models\Shop;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
         // Get random existing related model IDs, fallback to 1 if none exists
        $shopId = Shop::inRandomOrder()->value('id') ?? 1;
        $categoryId = Category::inRandomOrder()->value('id') ?? 1;
        $manufacturerId = Manufacturer::inRandomOrder()->value('id') ?? 1;

        $basePrice = $this->faker->numberBetween(1000, 100000); // e.g., price in cents or lowest unit
        // Sale price is base price plus up to 30% markup
        $salePrice = (int) ($basePrice * (1 + $this->faker->randomFloat(2, 0, 0.3)));

        return [
            'name' => $this->faker->word() . ' ' . $this->faker->unique()->numberBetween(1, 1000),
            'base_price' => $basePrice,
            'sale_price' => $salePrice,
            'stock' => $this->faker->numberBetween(0, 1000),
            'shop_id' => $shopId,
            'category_id' => $categoryId,
            'manufacturer_id' => $manufacturerId,
        ];
    }
}
