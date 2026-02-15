<script>
    import { CircleX } from "lucide-svelte";
</script>

<div
    class="flex flex-col gap-4 justify-start items-start text-center md:hidden h-6/12 w-8/12 bg-white fixed top-50 left-12.5 z-100"
>
    <CircleX class="cursor-pointer text-black self-end mt-2 ml-2" />
    <ul>
        <li class="text-[#C31E26]"><a href="/home">Home</a></li>
        <li class="text-[#C31E26]"><a href="/menu">Menu</a></li>
        <li class="text-[#C31E26]"><a href="/about">About Us</a></li>
        <li class="text-[#C31E26]"><a href="/contact">Contact Us</a></li>
    </ul>
</div>
