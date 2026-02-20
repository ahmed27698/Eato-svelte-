<script>
    import Logo from "$lib/assets/logo.png";
    import { Menu } from 'lucide-svelte';
    import NavMenu from "$lib/components/+NavMenu.svelte";
    
    let isMenuOpen = false;
</script>

<nav class="lg:px-24 md:px-14 px-4 py-10 flex items-center justify-between bg-[#C31E26]">
    <div class="w-full flex gap-10 items-center">
        <div class="flex items-center gap-2">
            <img src={Logo} alt="logo" />
            <h1>Eato</h1>
        </div>
        <ul class="md:flex hidden  gap-4 ">
            <li><a href="/home">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
        </ul>
    </div>
    <Menu class="md:hidden block" on:click={() => {isMenuOpen = !isMenuOpen}}/>
    <button class="bg-[#FFC62B] text-[#C31E26] font-semibold rounded-lg py-3 px-3 grow lg:w-2/12 cursor-pointer md:block hidden">Book Reservation</button>
    {#if isMenuOpen}
        <NavMenu />
    {/if}
</nav>
