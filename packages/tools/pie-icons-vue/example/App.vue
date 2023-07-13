<template>
    <div id="app">
        <header class="header">
            <div class="container">
                <h1 class="hero-heading">
                    pie-icons-vue
                </h1>
                <h2 class="desc">
                    Simply beautiful open source icons as Vue functional components.
                </h2>
            </div>
        </header>
        <div class="container">
            <div class="search-bar">
                <input
                    v-model="keyword"
                    type="text"
                    class="search-input"
                    :placeholder="`Search in ${icons.length} icons...`">
            </div>
            <div class="icons">
                <div
                    v-for="icon in filteredIcons"
                    :key="icon"
                    class="icon"
                    :title="example"
                    @click="handleClickIcon(icon)">
                    <component
                        :is="icon"
                        class="icon-svg" />
                    <span>{{ icon }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import kebab from 'lodash.kebabcase'; // eslint-disable-line
import * as icons from '../generated';
import example from './example.md';

export default {
    components: {
        ...icons
    },
    data () {
        return {
            icons: Object.keys(icons),
            keyword: '',
            hoverIcon: '',
            year: new Date().getFullYear()
        };
    },
    computed: {
        filteredIcons () {
            const keyword = this.keyword.trim().toLowerCase();
            if (!keyword) return this.icons;

            return this.icons.filter(name => name.toLowerCase().indexOf(keyword) > -1);
        },
        example () {
            return example
        .replace(/ICON/g, this.hoverIcon)
        .replace(/kebab-icon/g, kebab(this.hoverIcon));
        }
    },
    methods: {
        handleClickIcon (icon) {
            this.hoverIcon = icon;
        }
    }
};
</script>

<style src="prismjs/themes/prism.css"></style>

<style>
body {
  margin: 0;
  font: 14px/1.4 'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>

<style scoped>
.header {
  background: linear-gradient(90deg,#5733ea, #4894ff 70%,#a5bcff);
  padding: 40px 0;
}

.desc {
  color: white;
  font-weight: 500;
}

.hero-heading {
  color: #7dffc3;
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  background: -webkit-linear-gradient(135deg, #fff9b0, #7dffc3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.icons {
  display: flex;
  flex-wrap: wrap;
}

.icon {
  display: flex;
  align-items: center;
  padding: 10px;
  width: 25%;
  border-radius: 3px;
  cursor: pointer;
}

.icon:hover {
  background: #f1f5ff;
}

.icon-svg {
  margin-right: 10px;
  width: 100px;
  height: 100px;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.search-input {
  padding: 10px;
  outline: none;
  width: 100%;
  font-size: 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
}

.search-input:focus {
  border-color: #ccc;
}

.footer {
  margin: 40px 0;
  font-size: 1rem
}

.sizing {
  text-align: center;
}

.sizes {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.size {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
}

.size-label {
  font-size: 1.5em;
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.36);
  margin-bottom: 0.5em;
}

.size-icon {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
}

.size:hover {
  background: #f1f5ff;
}

@media screen and (max-width: 768px) {
  .icon {
    width: 100%;
  }
}
</style>
