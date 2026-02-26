<template>
    <PanelItem :field="field">
        <template #value>
            <p class="text-gray-900 dark:text-gray-300">{{ formattedValue }}</p>
        </template>
    </PanelItem>
</template>

<script>
    import mixin from './mixin';

    export default {
        props: ['resource', 'resourceName', 'resourceId', 'field'],
        mixins: [mixin],
    }
</script>
