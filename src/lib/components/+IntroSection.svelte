<script lang="ts">
    import signatue from "$lib/assets/signature.jpg";
    import { CookingPot } from "lucide-svelte";
    import { HandPlatter } from "lucide-svelte";
    import { Microwave } from "lucide-svelte";

    let box: HTMLImageElement;
</script>

<main
    class="bg-[#FFC62B] flex flex-col justify-center items-center py-16 lg:px-24 md:px-16 px-4 relative"
>
    <h2 class="text-center font-bold text-xl md:text-3xl lg:text-4xl">
        <span class="text-[#C31E26]"
            >A CULINARY DESTINATION WHERE PASSION MEETS PERFECTION</span
        ><span class="text-black"
            >, SERVING EXQUISITE FLAVORS AND IMPECCABLE SERVICE</span
        >
    </h2>
    <div
        class="flex flex-col items-center py-5 relative lg:w-4/12 z-2 md:w-7/12 w-full gap-5"
    >
        <div
            class="text-black bg-white rounded-2xl p-2 md:absolute lg:-left-58 md:-left-49 top-30 z-3 md:w-70 w-full"
        >
            <div class="flex text-3xl">
                <p class="flex gap-5 items-start">
                    <span class="bg-[#C31E26] p-2 rounded-2xl"
                        ><CookingPot class="text-white" /></span
                    >100%
                </p>
            </div>
            <p>Happy Customers Served Daily</p>
        </div>
        <div
            class="text-black bg-white rounded-2xl p-2 md:absolute lg:-right-58 md:-right-49 top-0 z-3 md:w-70 w-full"
        >
            <div class="flex text-3xl">
                <p class="flex gap-5 items-start">
                    <span class="bg-[#C31E26] p-2 rounded-2xl"
                        ><HandPlatter class="text-white" /></span
                    >+50
                </p>
            </div>
            <p>Unique Dishes on Our Menu</p>
        </div>
        <div
            class="text-black bg-white rounded-2xl p-2 md:absolute lg:-right-58 md:-right-49 top-70 z-3 md:w-70 w-full"
        >
            <div class="flex text-3xl">
                <p class="flex gap-5 items-start">
                    <span class="bg-[#C31E26] p-2 rounded-2xl"
                        ><Microwave class="text-white" /></span
                    >+1000
                </p>
            </div>
            <p>Happy Customers Served Daily</p>
        </div>
        <img
            bind:this={box}
            on:mouseenter={() => {
                box.classList.add("skew-y-1");
                box.classList.add("scale-103");
            }}
            on:mouseleave={() => {
                box.classList.remove("skew-y-1");
                box.classList.remove("scale-103");
            }}
            class="rounded-2xl transition-all"
            src={signatue}
            alt="signatue_image"
        />
        <div
            class="bg-[#070707] z-1 h-20 w-40 rounded-full blur-2xl rotate-x-45"
        ></div>
    </div>
    <p class="text-black lg:w-8/12 w-full text-center">
        Experience a world of culinary excellence where passion and precision
        come together, offering meticulously crafted flavors, exceptional
        service, and a dining journey that delights the senses with every bite,
        creating unforgettable moments in an elegant and welcoming atmosphere
    </p>
</main>
