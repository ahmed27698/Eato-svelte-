<script lang="ts">
    import { onMount, tick } from "svelte";
    import Chef from "$lib/assets/chef.svg";
    import Burger from "$lib/assets/burger.jpg";
    import Pizza from "$lib/assets/pizza.jpg";
    import Tacos from "$lib/assets/taco.jpg";
    import { Skeleton } from "./ui/skeleton";

    const slides = [Pizza, Tacos, Burger];
    let slideOne = slides.length - 1;

    let mainLoaded = false;
    let sideLoaded1 = false;
    let sideLoaded2 = false;

    let mainImg: HTMLImageElement;
    let sideImg1: HTMLImageElement;
    let sideImg2: HTMLImageElement;

    function rightClick() {
        slideOne = (slideOne + 1) % slides.length;
        resetLoading();
        checkImages();
    }

    function leftClick() {
        slideOne = (slideOne - 1 + slides.length) % slides.length;
        resetLoading();
        checkImages();
    }

    function resetLoading() {
        mainLoaded = false;
        sideLoaded1 = false;
        sideLoaded2 = false;
    }

    $: nextIndex1 = slideOne + 1 < slides.length ? slideOne + 1 : 0;
    $: nextIndex2 =
        slideOne + 2 < slides.length
            ? slideOne + 2
            : slideOne + 2 - slides.length;

    async function checkImages() {
        await tick();

        if (mainImg?.complete) mainLoaded = true;
        if (sideImg1?.complete) sideLoaded1 = true;
        if (sideImg2?.complete) sideLoaded2 = true;
    }

    onMount(checkImages);
</script>

<main
    class="flex md:flex-row flex-col relative items-start justify-between bg-[#C31E26] lg:px-24 md:px-16 px-4 pb-10"
>
    <div class="flex flex-col self-start gap-3 md:w-8/12 w-full text-white">
        <p
            class="flex items-center justify-center rounded-2xl py-2 px-4 gap-2 text-sm md:text-lg bg-white/13 w-full"
        >
            <img src={Chef} alt="Chef" />Number 1 Restaurant in the world
        </p>

        <p
            class="text-[#FFC62B] font-bold text-md md:text-4xl lg:text-5xl font-serif"
        >
            Savor the rich flavors, delight in every bite , enjoy the
            experience!
        </p>

        <p class="md:w-8/12 w-full font-semibold">
            Experience a delightful fusion of flavors, crafted with passion and
            served with warmth for an unforgettable dining journey
        </p>

        <div class="flex md:flex-row flex-col gap-4 mt-5">
            <button
                class="bg-[#FFC62B] text-[#C31E26] p-3 rounded-2xl cursor-pointer w-full md:w-3/12"
            >
                View Menu
            </button>
            <button
                class="bg-white text-[#C31E26] p-3 rounded-2xl cursor-pointer w-full md:w-3/12"
            >
                Explore More
            </button>
        </div>

        <div class="md:flex hidden gap-4 mt-5">
            <div class="relative">
                {#if !sideLoaded1}
                    <Skeleton
                        class="lg:w-62.5 lg:h-62.5 h-100 w-100 rounded-2xl absolute inset-0"
                    />
                {/if}
                <img
                    bind:this={sideImg1}
                    src={slides[nextIndex1]}
                    alt="Pizza"
                    class="lg:w-62.5 lg:h-62.5 h-100 w-100 rounded-2xl transition-opacity duration-300"
                    class:opacity-0={!sideLoaded1}
                    on:load={() => (sideLoaded1 = true)}
                />
            </div>

            <div class="relative">
                {#if !sideLoaded2}
                    <Skeleton
                        class="lg:w-62.5 lg:h-62.5 h-100 w-100 rounded-2xl absolute inset-0"
                    />
                {/if}
                <img
                    bind:this={sideImg2}
                    src={slides[nextIndex2]}
                    alt="Burger"
                    class="lg:w-62.5 lg:h-62.5 h-100 w-100 rounded-2xl transition-opacity duration-300"
                    class:opacity-0={!sideLoaded2}
                    on:load={() => (sideLoaded2 = true)}
                />
            </div>
        </div>
    </div>

    <div class="lg:w-4/12 md:w-6/12 w-10/12 mt-10">
        <div class="relative w-full lg:h-150 h-70">
            {#if !mainLoaded}
                <Skeleton class="rounded-4xl w-full h-full absolute inset-0" />
            {/if}

            <img
                bind:this={mainImg}
                src={slides[slideOne]}
                alt="tacos"
                class="rounded-4xl object-cover w-full h-full transition-opacity duration-300"
                class:opacity-0={!mainLoaded}
                on:load={() => (mainLoaded = true)}
            />
        </div>
    </div>

    <button
        aria-label="right slide"
        class="absolute md:bottom-50 bottom-40 cursor-pointer right-5 bg-[#FFC62B] p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        on:click={rightClick}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path fill="#C31E26" d="m10 17l5-5l-5-5z" />
        </svg>
    </button>

    <button
        aria-label="left slide"
        class="absolute md:bottom-50 bottom-40 cursor-pointer left-5 bg-[#FFC62B] p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        on:click={leftClick}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="rotate-180"
        >
            <path fill="#C31E26" d="m10 17l5-5l-5-5z" />
        </svg>
    </button>
</main>
