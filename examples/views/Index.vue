<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'index',

  data: () => ({
    routes: [
      {
        label: 'Simple Usage',
        route: 'Simple',
      },
      {
        label: 'All Extensions',
        route: 'AllExtensions',
      },
      {
        label: 'Bubble Menu',
        route: 'BubbleMenu',
      },
      {
        label: 'Placeholder',
        route: 'Placeholder',
      },
      {
        label: 'Readonly',
        route: 'Readonly',
      },
      {
        label: 'Custom Menubar',
        route: 'CustomMenubar',
      },
      {
        label: 'Event',
        route: 'Event',
      },
      {
        label: 'Output',
        route: 'Output',
      },
    ],
  }),
};
</script>

<style lang="scss">
.el-container {
  font-family: sans-serif;
}

.el-main {
  display: flex;
  justify-content: center;
  overflow: initial;
  padding: 50px;
}

.el-tiptap-editor {
  margin-bottom: 30px;

  &__wrapper {
    width: 60vw;
  }
}

.el-footer {
  align-items: center;
  display: flex;
  font-weight: 700;
  font-size: 14px;
  justify-content: center;
}

.github-corner:hover {
  .octo-arm {
    animation: octocat-wave 560ms ease-in-out
  }
}

@media (max-width:500px) {
  .github-corner:hover {
    .octo-arm {
      animation: none;
    }
  }

  .github-corner {
    .octo-arm{
      animation: octocat-wave 560ms ease-in-out;
    }
  }
}

@keyframes octocat-wave {
  0%, 100%{
    transform:rotate(0);
  }

  20%, 60%{
    transform:rotate(-25deg);
  }

  40%, 80%{
    transform:rotate(10deg);
  }
}
</style>
