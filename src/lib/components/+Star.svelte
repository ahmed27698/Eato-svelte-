<script lang="ts">
    export let fill = 1;
    export let id = Math.random().toString(36).substring(2, 9);
</script>

<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <defs>
        <linearGradient id="grad-{id}" x1="0" y1="0" x2="1" y2="0">
            <stop offset={fill} stop-color="#C31E26" />
            <stop offset={fill} stop-color="#D1D5DB" />
        </linearGradient>
    </defs>

    <path
        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.163L12 18.897l-7.334 3.858 1.4-8.163L.132 9.21l8.2-1.192z"
        fill="url(#grad-{id})"
    />
</svg>
