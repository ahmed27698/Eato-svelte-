<script>
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
</script>

<section
    class="bg-[#FFC62B] py-16 text-white lg:px-24 md:px-16 px-4 justify-center items-center flex flex-col gap-8"
>
    <div class="flex flex-col gap-4 items-center text-center">
        <h2 class="text-black lg:text-5xl lg:w-6/12 font-bold">
            Passionate Chefs, Dedicated Team – Crafting Culinary Excellence
        </h2>
        <p class="text-black">
            Our talented chefs and dedicated team work together to create
            unforgettable dining experiences with passion, precision, and
            creativity.
        </p>
    </div>
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
                        <h2 class="text-black font-bold">Chef {i + 1}</h2>
                        <p class="text-black">Pastry Chef</p>
                    </div>
                </Carousel.Item>
            {/each}
        </Carousel.Content>
    </Carousel.Root>
    <button class="text-[#FFC62B] bg-[#C31E26] p-3 rounded-2xl cursor-pointer"
        >Discover Our Chefs</button
    >
</section>
