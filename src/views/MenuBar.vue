<template>
  <div class="menu-bar">
    <div v-for="(tab, index) in tabs" :key="index" class="button-content">
      <button
        :data-baseweb="tab.dataBaseweb"
        :tabindex="tab.tabIndex"
        :aria-checked="tab.ariaChecked"
        :role="tab.role"
        class="button"
        style="display: inline-block; border-radius: 400px;"
      >
        <svg
          v-if="tab.svgPath"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          style="vertical-align: text-bottom; width: auto; height: 1.2em;"
        >
          <title>{{ tab.svgTitle }}</title>
          <path :d="tab.svgPath" fill="currentColor"></path>
        </svg>
        {{ tab.text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          text: 'Offers',
          dataBaseweb: 'button-group',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'M19 5v5.8l-9 9-5.8-5.7 9-9H19V5Zm3-3H12L0 14l10 10 12-12V2Z',
          svgTitle: 'Tag',
        },
        {
          text: 'Delivery fee',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z',
          svgTitle: 'Chevron down small',
        },
        {
          text: 'Under 30 mins',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
        },
        {
          text: 'Best overall',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'm15 9 8-8h-6l-5 5-5-5H1l8 8h6ZM6 13.5v6l6 3.5 6-3.5v-6L12 10l-6 3.5Zm3 4.51v-3.02l3-1.75 3 1.75v3.02l-3 1.75-3-1.75Z',
          svgTitle: 'Medal',
        },
        {
          text: 'Rating',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'M23.917 8.5 16.104 8l-3.646-7-3.646 7L1 8.5 6.73 14l-2.084 8 7.812-4 7.813 4-2.084-8 5.73-5.5Zm-8.855 4.7L16 16.8 12.458 15l-3.541 1.8.937-3.6-2.5-2.4 3.23-.2L12.457 7l1.875 3.6 3.23.2-2.5 2.4Z',
          svgTitle: 'Star',
        },
        {
          text: 'Price',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z',
          svgTitle: 'Chevron down small',
        },
        {
          text: 'Dietary',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z',
          svgTitle: 'Chevron down small',
        },
        {
          text: 'Sort',
          tabIndex: '0',
          ariaChecked: 'false',
          role: 'checkbox',
          svgPath: 'M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z',
          svgTitle: 'Chevron down small',
        },
      ],
    };
  },
};
</script>

<style scoped>
.menu-bar {
  display: flex;
  gap: 25px;
  width: 100%;
  position: relative;
  top: 4.5px;
  left: 30px;
}

.button-content {
  display: flex;
  vertical-align: baseline;
  align-items: center;
}

.button {
  width: auto;
  white-space: nowrap;
}
</style>
