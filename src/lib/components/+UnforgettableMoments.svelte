<script>
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
</script>

<section class=" py-16 lg:px-24 md:px-16 px-4 justify-center items-center flex flex-col gap-8">
    <h2 class="lg:text-4xl lg:w-6/12 font-bold text-center">
        Unforgettable Moments, Beautifully Crafted, Memories That Last Forever
    </h2>
    <Carousel.Root class="w-full overflow-hidden" opts={{ loop: true }}>
        <Carousel.Content class="flex  gap-4">
            {#each Array(10) as _, i (i)}
                <Carousel.Item class="flex-none  w-1/4 shrink-0">
                    <Card.Root class="cursor-pointer">
                        <Card.Content
                            class="flex aspect-square items-center justify-center p-6"
                        >
                            <span class="text-2xl font-semibold">{i + 1}</span>
                        </Card.Content>
                    </Card.Root>
                    <div class="flex flex-col items-center mt-4">
                        <h2 class=" font-bold">Chef {i + 1}</h2>
                        <p >Pastry Chef</p>
                    </div>
                </Carousel.Item>
            {/each}
        </Carousel.Content>
    </Carousel.Root>

    <h2 class="font-bold">Elegant Anniversary Dinner</h2>
    <p class="">
        A beautifully curated private dining experience celebrating a couple’s
        milestone anniversary. The evening featured a gourmet five-course meal,
        candlelit ambiance, and live acoustic music.
    </p>
    <button class="text-[#FFC62B] bg-[#C31E26] py-3 px-7 rounded-2xl cursor-pointer"
        >See More</button
    >
</section>
