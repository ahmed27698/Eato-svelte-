<script>
    import Chef from "$lib/assets/chef.svg";
    import Burger from "$lib/assets/burger.jpg";
    import Pizza from "$lib/assets/pizza.jpg";
    import Tacos from "$lib/assets/taco.jpg";

    const slides = [Pizza, Tacos, Burger];
    let slideOne = slides.length - 1;

    function rightClick() {
        slideOne = (slideOne + 1) % slides.length;
    }

    function leftClick() {
        slideOne = (slideOne - 1 + slides.length) % slides.length;
    }
</script>

<main
    class="flex md:flex-row flex-col relative items-start justify-between bg-[#C31E26] lg:px-24 md:px-16 px-4 pb-10"
>
    <div class="flex flex-col self-start gap-3 md:w-8/12 w-full text-white">
        <p
            class="flex items-center justify-center rounded-2xl py-2 px-4 gap-2 text-sm md:text-lg bg-white/13  w-full"
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
                >View Menu</button
            >
            <button
                class="bg-white text-[#C31E26] p-3 rounded-2xl cursor-pointer w-full md:w-3/12"
            >
                Explore More
            </button>
        </div>
        <div class="md:flex hidden gap-4 mt-5">
            <img
                src={slideOne + 1 < slides.length
                    ? slides[slideOne + 1]
                    : slides[0]}
                alt="Pizza"
                class="lg:w-62.5 lg:h-62.5 h-100 w-100 rounded-2xl"
            />
            <img
                src={slideOne + 2 < slides.length
                    ? slides[slideOne + 2]
                    : slides[slideOne + 2 - slides.length]}
                alt="Burger"
                class="lg:w-62.5 lg:h-62.5 h-100 w-100 rounded-2xl"
            />
        </div>
    </div>
    <div class="lg:w-4/12 md:w-6/12 w-10/12 mt-10">
        <img
            src={slides[slideOne]}
            alt="Burger"
            class=" rounded-4xl object-cover lg:h-150   h-70 w-full"
        />
    </div>
    <button
        aria-labelledby="right slide"
        class="absolute md:bottom-50 bottom-40 cursor-pointer right-5 bg-[#FFC62B] p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        on:click={rightClick}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><path fill="#C31E26" d="m10 17l5-5l-5-5z" /></svg
        >
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
            viewBox="0 0 24 24"
            class="rotate-180"
        >
            <path fill="#C31E26" d="m10 17l5-5l-5-5z" />
        </svg>
    </button>
</main>
