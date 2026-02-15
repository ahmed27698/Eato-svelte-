<script lang="ts">
    import { Skeleton } from "$lib/components/ui/skeleton/index.js";
    import { CircleArrowRight, CircleArrowLeft } from "lucide-svelte";
    import { fade } from "svelte/transition";
    import fill from "./+Star.svelte";
    import Star from "./+Star.svelte";
    interface Recipe {
        name: string;
        image: string;
        ingredients: string[];
        instructions: string[];
        rating: string;
        price: string;
        fill: number;
    }

    let recipes: Recipe[] = [];
    let isLoading = true;
    let loadedImages: boolean[] = [];
    let hoveredIndex: number | null = null;

    let slideOne = 0;
    async function getRecipes() {
        isLoading = true;
        try {
            const res = await fetch("https://dummyjson.com/recipes?limit=100");
            const data = await res.json();
            recipes = data.recipes.map((r: any) => ({
                ...r,
                price: (Math.random() * 20 + 5).toFixed(2),
            }));
            loadedImages = recipes.map(() => false);
        } catch (err) {
            console.error("Error fetching recipes:", err);
        } finally {
            isLoading = false;
        }
    }

    function RightArrow() {
        if (!recipes.length) return;
        slideOne = (slideOne + 1) % recipes.length;
    }

    function LeftArrow() {
        if (!recipes.length) return;
        slideOne = (slideOne - 1 + recipes.length) % recipes.length;
    }

    getRecipes();
</script>

<section class="bg-black py-16 text-white lg:px-24 md:px-16 px-4">
    <!-- Header -->
    <div class="flex justify-between items-center">
        <div>
            <h2 class="text-3xl font-semibold">Our Signature Menu</h2>
            <p class="opacity-80 max-w-xl">
                Experience our signature menu, a masterpiece of flavors crafted
                with premium ingredients, culinary expertise, and an artistic
                touch to delight
            </p>
        </div>

        <div class="flex gap-4">
            <button on:click={LeftArrow} aria-label="Previous">
                <CircleArrowLeft />
            </button>
            <button on:click={RightArrow} aria-label="Next">
                <CircleArrowRight />
            </button>
        </div>
    </div>

    <!-- Slider -->
    <div class="flex justify-center gap-6 mt-12">
        {#if isLoading}
            {#each Array.from({ length: 4 })}
                <Skeleton class="w-3/12 h-105" />
            {/each}
        {:else}
            {#each Array.from({ length: 4 }) as _, i}
                {@const index = (slideOne + i) % recipes.length}
                {@const r = recipes[index]}

                <div
                    role="button"
                    tabindex="0"
                    class="w-3/12 flex flex-col relative overflow-hidden rounded-xl"
                    on:mouseenter={() => (hoveredIndex = index)}
                    on:mouseleave={() => (hoveredIndex = null)}
                >
                    <!-- Image -->
                    <div class="h-64 overflow-hidden relative rounded-xl">
                        {#if !loadedImages[index]}
                            <Skeleton class="absolute inset-0" />
                        {/if}

                        <img
                            src={r.image}
                            alt={r.name}
                            class="w-full h-full object-cover transition-transform duration-300 ease-out
                            {hoveredIndex === index
                                ? '-translate-y-10'
                                : 'translate-y-0'}"
                            on:load={() => (loadedImages[index] = true)}
                        />

                        {#if hoveredIndex === index}
                            <div
                                class="absolute inset-0 bg-[#FFC62B] text-black
                                flex flex-col justify-between p-4 rounded-xl"
                                in:fade={{ duration: 250 }}
                                out:fade={{ duration: 200 }}
                            >
                                <div>
                                    <p class="text-[#C31E26] font-bold">
                                        {r.instructions[2]}
                                    </p>
                                    <p class="text-[#C31E26] font-bold">
                                        {r.instructions[3]}
                                    </p>
                                </div>
                                <div
                                    class="mt-2 flex justify-between items-center text-black  py-1 rounded-md text-sm font-medium"
                                >
                                <div class="flex gap-3">

                                    <div class="flex justify-start">
                                        
                                        {#each Array(5) as _, i}
                                        <Star
                                        fill={+r.rating - i >= 1
                                                ? 1
                                                : +r.rating - i > 0
                                                ? +r.rating - i
                                                : 0}
                                        />
                                        {/each}
                                    </div>
                                    <p>{r.rating}</p>
                                    </div>

                                    <p
                                        class="text-[#C31E26] font-bold text-3xl"
                                    >
                                        ${Math.round(+r.price)}
                                    </p>
                                </div>
                            </div>
                        {/if}
                    </div>

                    <div class="mt-4 flex-1 px-1 self-start">
                        <p class="text-lg font-semibold">{r.name}</p>
                        <p class="text-sm opacity-70 line-clamp-2">
                            {r.instructions[1]}
                        </p>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</section>
