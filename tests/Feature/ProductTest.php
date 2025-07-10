<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_product_route(): void
    {
        $response = $this->get('/products');

        $response->assertStatus(200);
    }

    public function test_product_post_route(){
        $response = $this->post('/products', [
            'category' => 'Electronics',
            'query' => 'laptop'
        ]);

        $response->assertStatus(200)
            ->assertInertia(fn ($page) => $page
                ->component('Products')
                ->where('category', 'Electronics')
                ->where('query', 'laptop')
            );
    }
}
