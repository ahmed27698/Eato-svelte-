<script>
    import Burger from "$lib/assets/burger.jpg";
    import { Hamburger } from 'lucide-svelte';
    import { HandPlatter } from 'lucide-svelte';
    import { Microwave } from 'lucide-svelte';
    import { Utensils } from 'lucide-svelte';

</script>

<section class="lg:px-24 md:px-16 px-4 py-16">
    <div class=" flex flex-col gap-3 justify-center items-center">

        <h2 class="font-bold text-5xl lg:w-7/12">Unmatched Quality, Exceptional Service, Memorable Experience</h2>
        <p>We blend premium ingredients, expert craftsmanship, and warm hospitality to create a dining experience that exceeds expectations every time.</p>
    </div>
    <div class="flex justify-between items-start flex-col md:flex-row gap-6 mt-10">
        <div class="lg:w-3/12 w-full flex flex-col gap-6">
            <div class="bg-[#464646] flex flex-col gap-2 rounded-2xl p-4  hover:bg-[#FFC62B] hover:text-black group">
                <div class="group-hover:animate-pulse group-hover:bg-[#c31E26] bg-[#ffc62b] text-black group-hover:text-white w-15 h-15 flex items-center justify-center rounded-2xl">

                    <Hamburger/>
                </div>
                <h2 class="mt-5 font-bold">Exceptional Quality Ingredients</h2>
                <p>We source only the finest, freshest ingredients to ensure every dish bursts with flavor and nutrition. Our skilled chefs bring creativity and passion to every plate, crafting unique and delicious dishes</p>
            </div>
            <div class="bg-[#464646] flex flex-col gap-2 rounded-2xl p-4  hover:bg-[#FFC62B] hover:text-black group">
                <div class="group-hover:animate-pulse group-hover:bg-[#c31E26] bg-[#ffc62b] text-black group-hover:text-white w-15 h-15 flex items-center justify-center rounded-2xl">

                    <HandPlatter/>
                </div>
                <h2 class="mt-5 font-bold">Expert Culinary Team</h2>
                <p>We source only the finest, freshest ingredients to ensure every dish bursts with flavor and nutrition. Our skilled chefs bring creativity and passion to every plate, crafting unique and delicious dishes</p>
            </div>
        </div>
        <div class="lg:w-3/12 w-full flex flex-col gap-6 justify-between items-center h-full">
            <img loading="lazy" class="w-full h-full object-cover rounded-2xl" src={Burger} alt="Burger">
            <button type="button" class="bg-[#C31E26] text-[#FFC62B] p-3 rounded-2xl cursor-pointer w-full md:w-6/12"><a href="/">Reserve Now</a></button>
        </div>
        <div class="lg:w-3/12 w-full flex flex-col gap-6">
            <div class="bg-[#464646] flex flex-col gap-2 rounded-2xl p-4  hover:bg-[#FFC62B] hover:text-black group">
                <div class="group-hover:animate-pulse group-hover:bg-[#c31E26] bg-[#ffc62b] text-black group-hover:text-white w-15 h-15 flex items-center justify-center rounded-2xl">

                    <Microwave/>
                </div>
                <h2 class="mt-5 font-bold">Impeccable Service</h2>
                <p>We source only the finest, freshest ingredients to ensure every dish bursts with flavor and nutrition. Our skilled chefs bring creativity and passion to every plate, crafting unique and delicious dishes</p>
            </div>
            <div class="bg-[#464646] flex flex-col gap-2 rounded-2xl p-4  hover:bg-[#FFC62B] hover:text-black group">
                <div class="group-hover:animate-pulse group-hover:bg-[#c31E26] bg-[#ffc62b] text-black group-hover:text-white w-15 h-15 flex items-center justify-center rounded-2xl">

                    <Utensils/>
                </div>
                <h2 class="mt-5 font-bold">Inviting Atmosphere</h2>
                <p>We source only the finest, freshest ingredients to ensure every dish bursts with flavor and nutrition. Our skilled chefs bring creativity and passion to every plate, crafting unique and delicious dishes</p>
            </div>
        </div>
    </div>
</section>