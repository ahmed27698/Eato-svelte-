<script>
    import { Search } from "lucide-svelte";
    import Burger from "$lib/assets/burger.jpg";
    import pizza from "$lib/assets/pizza.jpg";
</script>

<section
    class="py-16 lg:px-24 md:px-16 px-4 justify-center items-center flex flex-col gap-8"
>
    <h2 class="font-bold lg:text-6xl md:text-3xl text-xl text-center">
        Delicious Insights, Culinary Tips, and Restaurant News
    </h2>
    <p>
        Explore our blog for mouthwatering recipes, expert tips, and the latest
        updates from our restaurant to enhance your dining experience
    </p>
    <div class="relative w-full md:w-6/12">
        <Search class="absolute left-5 top-3 text-gray-400" />
        <input
            type="text"
            placeholder="What do you want to know?"
            class="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C31E26] focus:border-transparent"
        />
    </div>
    <div class="flex gap-5 flex-col md:flex-row justify-between items-start">
        <aside
            class="md:w-6/12 w-full h- flex flex-col gap-4 justify-center items-center"
        >
            <img
                src={Burger}
                alt="Burger"
                class="w-screen h-145 object-cover rounded-2xl"
            />
            <div>
                <div class="flex gap-3 my-2">
                    <span
                        class="text-[#C31E26] bg-[#FFC62B] px-3 py-1 rounded-full text-sm"
                        >Food Trends</span
                    ><span
                        class="text-[#C31E26] bg-[#FFC62B] px-3 py-1 rounded-full text-sm"
                        >6 Min Read</span
                    >
                </div>
                <h2 class="font-bold text-2xl">
                    The rise of plant-based dining in restaurants reflects
                    health trends and environmental sustainability awareness
                    among consumers
                </h2>
                <p>
                    In recent years, there has been a significant shift towards
                    plant-based dining, driven by health-conscious consumers and
                    growing awareness of environmental sustainability.
                </p>
            </div>
        </aside>
        <aside class="lg:w-6/12">
            <div class="w-full flex">
                <img
                    src={pizza}
                    alt="pizza"
                    class="w-50 h-50 object-cover rounded-2xl"
                />
                <div>
                    <h2>
                        In recent years, there has been a significant shift
                        towards plant-based dining.
                    </h2>
                    <p>
                        In recent years, there has been a significant shift
                        towards plant-based dining, driven by health-conscious
                        consumers and growing awareness of environmental
                        sustainability.
                    </p>
                    <div class="flex gap-3 my-2">
                        <span
                            class="text-[#C31E26] bg-[#FFC62B] px-3 py-1 rounded-full text-sm"
                            >Food Trends</span
                        ><span
                            class="text-[#C31E26] bg-[#FFC62B] px-3 py-1 rounded-full text-sm"
                            >6 Min Read</span
                        >
                    </div>
                </div>
            </div>
            <div class="w-full flex">
                <img
                    src={pizza}
                    alt="pizza"
                    class="w-50 h-50 object-cover rounded-2xl"
                />
                <div>
                    <h2>
                        In recent years, there has been a significant shift
                        towards plant-based dining.
                    </h2>
                    <p>
                        In recent years, there has been a significant shift
                        towards plant-based dining, driven by health-conscious
                        consumers and growing awareness of environmental
                        sustainability.
                    </p>
                    <div class="flex gap-3 my-2">
                        <span
                            class="text-[#C31E26] bg-[#FFC62B] px-3 py-1 rounded-full text-sm"
                            >Food Trends</span
                        ><span
                            class="text-[#C31E26] bg-[#FFC62B] px-3 py-1 rounded-full text-sm"
                            >6 Min Read</span
                        >
                    </div>
                </div>
            </div>
            <div class="w-full flex">
                <img
                    src={pizza}
                    alt="pizza"
                    class="w-50 h-50 object-cover rounded-2xl"
                />
                <div>
                    <h2>
                        In recent years, there has been a significant shift
                        towards plant-based dining.
                    </h2>
                    <p>
                        In recent years, there has been a significant shift
                        towards plant-based dining, driven by health-conscious
                        consumers and growing awareness of environmental
                        sustainability.
                    </p>
                    <div class="flex gap-3 my-2">
                        <span
                            class="text-[#C31E26] bg-[#FFC62B] px-3 py-1 rounded-full text-sm"
                            >Food Trends</span
                        ><span
                            class="text-[#C31E26] bg-[#FFC62B] px-3 py-1 rounded-full text-sm"
                            >6 Min Read</span
                        >
                    </div>
                </div>
            </div>
            <div class="w-full flex">
                <img
                    src={pizza}
                    alt="pizza"
                    class="w-50 h-50 object-cover rounded-2xl"
                />
                <div>
                    <h2>
                        In recent years, there has been a significant shift
                        towards plant-based dining.
                    </h2>
                    <p>
                        In recent years, there has been a significant shift
                        towards plant-based dining, driven by health-conscious
                        consumers and growing awareness of environmental
                        sustainability.
                    </p>
                    <div class="flex gap-3 my-2">
                        <span
                            class="text-[#C31E26] bg-[#FFC62B] px-3 py-1 rounded-full text-sm"
                            >Food Trends</span
                        ><span
                            class="text-[#C31E26] bg-[#FFC62B] px-3 py-1 rounded-full text-sm"
                            >6 Min Read</span
                        >
                    </div>
                </div>
            </div>
        </aside>
    </div>
</section>
